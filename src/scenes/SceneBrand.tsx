import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { D } from "../design";
import { FONTS } from "../fonts";

type Props = {
  mode: "intro" | "outro";
  introSubtitle?: string;
  outroSubtitle?: string;
};

export const SceneBrand: React.FC<Props> = ({
  mode,
  introSubtitle = "UPSC CSAT — Numbers & Simplification",
  outroSubtitle = "Subscribe for complete CSAT coverage",
}) => {
  const frame = useCurrentFrame();

  // Keep logo visible from the very first intro frame.
  const logoOpacity = mode === "intro"
    ? 1
    : interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });
  const taglineOpacity = interpolate(
    frame,
    mode === "intro" ? [20, 45] : [10, 30],
    [0, 1],
    { extrapolateRight: "clamp" },
  );
  const lineScale = interpolate(
    frame,
    mode === "intro" ? [15, 40] : [5, 25],
    [0, 1],
    { extrapolateRight: "clamp" },
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: D.bg,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 32,
      }}
    >
      {/* Top accent bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: D.accentHeight,
          backgroundColor: D.blue,
        }}
      />

      {/* Brand logo */}
      <div
        style={{
          opacity: logoOpacity,
          width: 520,
          height: 160,
          borderRadius: 20,
          border: `2px solid ${D.blue}40`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FFFFFF",
          padding: "20px 28px",
        }}
      >
        <Img
          src={staticFile("brand/logo.jpg")}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>

      {/* Company name */}
      <div
        style={{
          opacity: logoOpacity,
          fontFamily: FONTS.body,
          fontSize: 56,
          fontWeight: 600,
          color: D.textPrimary,
          letterSpacing: "-0.02em",
        }}
      >
        SuperKalam
      </div>

      {/* Divider line */}
      <div
        style={{
          width: 400,
          height: 2,
          backgroundColor: `${D.blue}50`,
          transform: `scaleX(${lineScale})`,
          transformOrigin: "center",
        }}
      />

      {/* Tagline */}
      <div
        style={{
          opacity: taglineOpacity,
          fontFamily: FONTS.body,
          fontSize: 36,
          fontWeight: 400,
          color: D.textSecondary,
          letterSpacing: "0.05em",
        }}
      >
        {mode === "intro"
          ? introSubtitle
          : outroSubtitle}
      </div>

      {/* Bottom accent bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: D.accentHeight,
          backgroundColor: D.blue,
        }}
      />
    </AbsoluteFill>
  );
};
