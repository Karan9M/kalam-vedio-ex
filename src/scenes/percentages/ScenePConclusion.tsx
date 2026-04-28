import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { D } from "../../design";
import { FONTS } from "../../fonts";
import { RevealText } from "../../components/RevealText";

export const ScenePConclusion: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 12], [0, 1], {
    extrapolateRight: "clamp",
  });
  const subOpacity = interpolate(frame, [26, 44], [0, 1], {
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
        gap: 38,
      }}
    >
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

      <RevealText
        text="Smart observer bano, formula machine nahi"
        wordsPerSecond={2.8}
        fontSize={88}
        color={D.blue}
        style={{ textAlign: "center", maxWidth: 1500 }}
      />

      <div
        style={{
          opacity: subOpacity,
          fontFamily: FONTS.body,
          fontSize: D.sz.sub,
          color: D.yellow,
          textAlign: "center",
        }}
      >
        चलिए, अब इन concepts को solve करते हैं!
      </div>

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
