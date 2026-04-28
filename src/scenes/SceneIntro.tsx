import { AbsoluteFill } from "remotion";
import { COLORS } from "../constants";
import { FONTS } from "../fonts";
import { HandwrittenText } from "../components/HandwrittenText";
import { Underline } from "../components/Underline";
import { CaptionOverlay } from "../components/CaptionOverlay";

export const SceneIntro: React.FC = () => {
  return (
    <AbsoluteFill
      style={{ justifyContent: "center", alignItems: "center", color: COLORS.text }}
    >
      <HandwrittenText
        text="नमस्ते!"
        devanagari
        charsPerFrame={0.5}
        style={{ fontSize: 160, fontWeight: 700, color: COLORS.yellow }}
      />
      <HandwrittenText
        text="आज के CSAT session में आपका स्वागत है।"
        devanagari
        startFrame={40}
        charsPerFrame={0.7}
        style={{
          marginTop: 24,
          fontSize: 56,
          color: COLORS.text,
          fontFamily: FONTS.devanagari,
        }}
      />
      <Underline y={20} startFrame={32} durationInFrames={46} />
      <CaptionOverlay sceneName="scene-intro" />
    </AbsoluteFill>
  );
};
