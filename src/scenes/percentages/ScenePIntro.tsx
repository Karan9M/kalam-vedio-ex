import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { D } from "../../design";
import { FONTS } from "../../fonts";
import { RevealText } from "../../components/RevealText";

export const ScenePIntro: React.FC = () => {
  const frame = useCurrentFrame();

  const subOpacity = interpolate(frame, [30, 50], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const lineScale = interpolate(frame, [20, 45], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const opacity = interpolate(frame, [0, 12], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: D.bg,
        opacity,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 40,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: D.accentHeight,
          backgroundColor: D.yellow,
        }}
      />

      <RevealText
        text="नमस्ते!"
        wordsPerSecond={4}
        fontSize={160}
        color={D.yellow}
      />

      <div
        style={{
          width: 620,
          height: 2,
          backgroundColor: `${D.yellow}40`,
          transform: `scaleX(${lineScale})`,
          transformOrigin: "left",
        }}
      />

      <div
        style={{
          opacity: subOpacity,
          fontFamily: FONTS.body,
          fontSize: D.sz.sub,
          fontWeight: 400,
          color: D.textSecondary,
          textAlign: "center",
        }}
      >
        CSAT Percentages and Averages में आपका स्वागत है
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: D.accentHeight,
          backgroundColor: D.yellow,
        }}
      />
    </AbsoluteFill>
  );
};
