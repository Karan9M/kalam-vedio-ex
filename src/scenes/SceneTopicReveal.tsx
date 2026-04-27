import { AbsoluteFill } from "remotion";
import { HandwrittenText } from "../components/HandwrittenText";
import { KeywordChip } from "../components/KeywordChip";
import { COLORS } from "../constants";

export const SceneTopicReveal: React.FC = () => {
  return (
    <AbsoluteFill style={{ justifyContent: "center", paddingLeft: 160 }}>
      <HandwrittenText
        text="Numbers & Simplification"
        charsPerFrame={0.45}
        style={{
          fontSize: 132,
          fontWeight: 700,
          color: COLORS.yellow,
          maxWidth: 1300,
        }}
      />
      <KeywordChip
        text="UPSC GS Paper 2  ·  Marks Foundation"
        startFrame={36}
        x={1200}
        y={130}
      />
    </AbsoluteFill>
  );
};
