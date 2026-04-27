import { AbsoluteFill } from "remotion";
import { HandwrittenText } from "../../components/HandwrittenText";
import { Underline } from "../../components/Underline";
import { COLORS } from "../../constants";

export const ScenePIntro: React.FC = () => {
  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      <HandwrittenText
        text="नमस्ते!"
        devanagari
        charsPerFrame={0.5}
        style={{ fontSize: 160, color: COLORS.yellow, fontWeight: 700 }}
      />
      <HandwrittenText
        text="CSAT quantitative aptitude में आपका स्वागत है।"
        devanagari
        startFrame={36}
        charsPerFrame={0.65}
        style={{ marginTop: 20, fontSize: 58, color: COLORS.text }}
      />
      <Underline y={30} startFrame={30} durationInFrames={50} />
    </AbsoluteFill>
  );
};
