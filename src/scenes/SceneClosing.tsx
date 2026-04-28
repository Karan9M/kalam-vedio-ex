import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { CaptionOverlay } from "../components/CaptionOverlay";
import { COLORS } from "../constants";
import { FONTS } from "../fonts";
import { HandwrittenText } from "../components/HandwrittenText";

export const SceneClosing: React.FC = () => {
  const frame = useCurrentFrame();
  const rays = interpolate(frame, [0, 50], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(circle at center, rgba(88,196,221,0.35), rgba(88,196,221,0))",
          transform: `scale(${0.7 + rays * 0.6})`,
          opacity: rays,
        }}
      />
      <HandwrittenText
        text="चलिए शुरू करते हैं!"
        devanagari
        charsPerFrame={0.5}
        style={{ fontSize: 132, color: COLORS.yellow, fontWeight: 700 }}
      />
      <div
        style={{
          marginTop: 24,
          fontFamily: FONTS.devanagari,
          fontSize: 48,
          color: COLORS.text,
          opacity: 0.8,
        }}
      >
        अपनी मेहनत पर भरोसा रखें
      </div>
      <CaptionOverlay sceneName="scene-closing" />
    </AbsoluteFill>
  );
};
