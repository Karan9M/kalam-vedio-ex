import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { D } from "../design";
import { FONTS } from "../fonts";
import { RevealText } from "../components/RevealText";

export const SceneClosing: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 12], [0, 1], {
    extrapolateRight: "clamp",
  });
  const subOpacity = interpolate(frame, [25, 45], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const lineScale = interpolate(frame, [15, 40], [0, 1], {
    extrapolateLeft: "clamp",
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
      {/* Top accent bar */}
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
        text="चलिए शुरू करते हैं!"
        wordsPerSecond={3}
        fontSize={120}
        color={D.yellow}
        style={{ letterSpacing: "-0.01em" }}
      />

      {/* Divider */}
      <div
        style={{
          width: 480,
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
        }}
      >
        अपनी मेहनत पर भरोसा रखें
      </div>

      {/* Bottom accent bar */}
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
