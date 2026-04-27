import { AbsoluteFill } from "remotion";
import { KeywordChip } from "../../components/KeywordChip";
import { MathExpr } from "../../components/MathExpr";
import { COLORS, FONTS } from "../../constants";

export const ScenePSuccessiveChange: React.FC = () => {
  return (
    <AbsoluteFill style={{ padding: "80px 120px", color: COLORS.text }}>
      <div style={{ fontFamily: FONTS.handwritten, fontSize: 98, color: COLORS.yellow }}>
        Successive Percentage Change
      </div>
      <MathExpr style={{ marginTop: 36, color: COLORS.blue }}>+10% then -10% != 0%</MathExpr>
      <div style={{ marginTop: 50, fontFamily: FONTS.body, fontSize: 56 }}>
        Formula: <span style={{ color: COLORS.green }}>x + y + (xy / 100)</span>
      </div>
      <div style={{ marginTop: 20, fontFamily: FONTS.body, fontSize: 52, color: COLORS.red }}>
        10 + (-10) + (10 x -10 / 100) = -1%
      </div>
      <KeywordChip text="Price always drops by 1%" color={COLORS.red} x={1260} y={140} />
    </AbsoluteFill>
  );
};
