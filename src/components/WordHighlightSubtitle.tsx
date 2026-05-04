import { interpolate, useCurrentFrame } from "remotion";
import { D } from "../design";
import { FONTS } from "../fonts";
import type { WordEntry } from "../hooks/useWordSync";
import { useWordSync } from "../hooks/useWordSync";

type Props = {
  text: string;
  accentColor?: string;
  words?: WordEntry[];
  audioStartFrame?: number;
  fps?: number;
};

export const WordHighlightSubtitle: React.FC<Props> = ({
  text,
  accentColor = D.blue,
  words,
  audioStartFrame = 0,
  fps = 30,
}) => {
  const frame = useCurrentFrame();
  const { activeIndex } = useWordSync(words ?? [], audioStartFrame, fps);

  const opacity = interpolate(frame, [0, 10], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Split text into tokens (words + spaces) to render each word individually
  const tokens = text.trim().split(/(\s+)/);
  let wordIdx = 0;

  return (
    <div
      style={{
        opacity,
        padding: "24px 48px",
        borderTop: `1px solid rgba(255,255,255,0.08)`,
        display: "flex",
        flexWrap: "wrap",
        gap: "0 6px",
        alignItems: "center",
        minHeight: 100,
      }}
    >
      {tokens.map((token, i) => {
        if (/^\s+$/.test(token)) return <span key={i} style={{ width: 10 }} />;

        const myIndex = wordIdx++;
        const isActive = words && words.length > 0 && myIndex === activeIndex;
        const isPast = words && words.length > 0 && myIndex < activeIndex;

        return (
          <span
            key={i}
            style={{
              fontFamily: FONTS.body,
              fontSize: D.sz.body,
              fontWeight: isActive ? 700 : 400,
              color: isActive ? accentColor : isPast ? D.textSecondary : D.textLabel,
              lineHeight: 1.5,
              transition: "color 0.1s",
            }}
          >
            {token}
          </span>
        );
      })}
    </div>
  );
};
