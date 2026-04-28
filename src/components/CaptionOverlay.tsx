import { useState, useEffect, useCallback, useMemo } from "react";
import {
  AbsoluteFill,
  Sequence,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  continueRender,
  delayRender,
} from "remotion";
import { createTikTokStyleCaptions } from "@remotion/captions";
import type { Caption, TikTokPage } from "@remotion/captions";
import { FONTS } from "../fonts";
import { COLORS } from "../constants";

const SWITCH_EVERY_MS = 1500;

type Props = { sceneName: string };

const CaptionPage: React.FC<{ page: TikTokPage }> = ({ page }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const absoluteTimeMs = page.startMs + (frame / fps) * 1000;

  return (
    <AbsoluteFill
      style={{ justifyContent: "flex-end", alignItems: "center", paddingBottom: 72 }}
    >
      <div
        style={{
          fontFamily: FONTS.body,
          fontSize: 50,
          fontWeight: 700,
          whiteSpace: "pre",
          textAlign: "center",
          padding: "16px 80px",
          background: "rgba(0,0,0,0.55)",
          borderRadius: 16,
          maxWidth: 1600,
          lineHeight: 1.45,
        }}
      >
        {page.tokens.map((token) => {
          const isActive =
            token.fromMs <= absoluteTimeMs && token.toMs > absoluteTimeMs;
          return (
            <span
              key={token.fromMs}
              style={{
                color: isActive ? COLORS.yellow : COLORS.text,
                textShadow: isActive ? `0 0 18px ${COLORS.yellow}99` : "none",
              }}
            >
              {token.text}
            </span>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

export const CaptionOverlay: React.FC<Props> = ({ sceneName }) => {
  const [captions, setCaptions] = useState<Caption[] | null>(null);
  const [handle] = useState(() => delayRender(`captions-${sceneName}`));
  const { fps } = useVideoConfig();

  const load = useCallback(async () => {
    try {
      const res = await fetch(staticFile(`captions/${sceneName}.json`));
      setCaptions(await res.json());
    } catch {
      // captions file missing — skip silently rather than crash
    } finally {
      continueRender(handle);
    }
  }, [handle, sceneName]);

  useEffect(() => {
    load();
  }, [load]);

  const { pages } = useMemo(() => {
    if (!captions) return { pages: [] };
    return createTikTokStyleCaptions({
      captions,
      combineTokensWithinMilliseconds: SWITCH_EVERY_MS,
    });
  }, [captions]);

  if (!captions || !pages.length) return null;

  return (
    <AbsoluteFill style={{ pointerEvents: "none" }}>
      {pages.map((page, i) => {
        const next = pages[i + 1] ?? null;
        const startFrame = (page.startMs / 1000) * fps;
        const endFrame = next
          ? (next.startMs / 1000) * fps
          : startFrame + (SWITCH_EVERY_MS / 1000) * fps;
        const dur = Math.max(1, Math.round(endFrame - startFrame));

        return (
          <Sequence
            key={i}
            from={Math.round(startFrame)}
            durationInFrames={dur}
            layout="none"
          >
            <CaptionPage page={page} />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
