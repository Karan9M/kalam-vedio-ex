import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { KeywordChip } from "../components/KeywordChip";
import { COLORS, FONTS } from "../constants";

export const SceneHook: React.FC = () => {
  const frame = useCurrentFrame();
  const shake = Math.sin(frame * 0.7) * interpolate(frame, [0, 40], [14, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const decodeOpacity = interpolate(frame, [48, 80], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      <div
        style={{
          transform: `translateX(${shake}px)`,
          color: COLORS.red,
          fontFamily: FONTS.body,
          fontSize: 74,
          fontWeight: 700,
          marginBottom: 60,
        }}
      >
        (7/9 x 13/4) - 5/12 + (11/15 x 6/7)
      </div>
      <div
        style={{
          color: COLORS.green,
          fontFamily: FONTS.handwritten,
          fontSize: 140,
          fontWeight: 700,
          opacity: decodeOpacity,
        }}
      >
        DECODE
      </div>
      <KeywordChip text="complexity -> decode" color={COLORS.green} x={1400} y={150} />
    </AbsoluteFill>
  );
};
