import { AbsoluteFill } from "remotion";
import { HandwrittenText } from "../../components/HandwrittenText";
import { KeywordChip } from "../../components/KeywordChip";
import { COLORS } from "../../constants";

export const ScenePTitle: React.FC = () => {
  return (
    <AbsoluteFill style={{ justifyContent: "center", paddingLeft: 140 }}>
      <HandwrittenText
        text="Percentages  +  Averages"
        charsPerFrame={0.45}
        style={{ fontSize: 130, color: COLORS.blue, fontWeight: 700 }}
      />
      <KeywordChip
        text="Arithmetic Core for UPSC CSAT"
        color={COLORS.yellow}
        x={1240}
        y={130}
        startFrame={36}
      />
    </AbsoluteFill>
  );
};
