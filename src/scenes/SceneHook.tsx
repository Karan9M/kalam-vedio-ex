import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { D } from "../design";
import { FONTS } from "../fonts";
import { RuleBox } from "../components/RuleBox";

export const SceneHook: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 12], [0, 1], {
    extrapolateRight: "clamp",
  });
  const exprOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });
  const decodeOpacity = interpolate(frame, [35, 55], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: D.bg,
        opacity,
        padding: D.pad,
        paddingTop: D.pad + D.accentHeight + 24,
        flexDirection: "column",
        justifyContent: "center",
        gap: D.gap * 1.5,
      }}
    >
      {/* Accent bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: D.accentHeight,
          backgroundColor: D.red,
        }}
      />

      {/* Scene label */}
      <div
        style={{
          position: "absolute",
          top: D.accentHeight + 28,
          left: D.pad,
          fontFamily: FONTS.body,
          fontSize: D.sz.label,
          fontWeight: 400,
          color: D.textLabel,
        }}
      >
        Numbers · The Challenge
      </div>

      {/* Big expression */}
      <div
        style={{
          opacity: exprOpacity,
          fontFamily: FONTS.body,
          fontSize: 80,
          fontWeight: 700,
          color: D.textPrimary,
          letterSpacing: "-0.02em",
          lineHeight: 1.2,
        }}
      >
        (7/9 × 13/4) − 5/12 + (11/15 × 6/7)
      </div>

      {/* Decode reveal */}
      <div
        style={{
          opacity: decodeOpacity,
          fontFamily: FONTS.body,
          fontSize: 52,
          fontWeight: 400,
          color: D.textSecondary,
        }}
      >
        Looks complex? Here's the truth —
      </div>

      <RuleBox color={D.green} startFrame={50}>
        Simplification = decoding complexity, not computing it
      </RuleBox>
    </AbsoluteFill>
  );
};
