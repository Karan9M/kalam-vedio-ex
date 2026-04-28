import { AbsoluteFill } from "remotion";
import { KeywordChip } from "../../components/KeywordChip";
import { MathExpr } from "../../components/MathExpr";
import { COLORS } from "../../constants";
import { FONTS } from "../../fonts";

export const ScenePSpeedTricks: React.FC = () => {
  return (
    <AbsoluteFill style={{ padding: "80px 120px", color: COLORS.text }}>
      <div style={{ fontFamily: FONTS.handwritten, fontSize: 102, color: COLORS.green }}>
        Speed Trick: Average Speed
      </div>
      <div style={{ marginTop: 26, fontFamily: FONTS.body, fontSize: 46 }}>
        Not simple average of x and y
      </div>
      <MathExpr style={{ marginTop: 36, color: COLORS.yellow }}>
        Avg Speed = (2xy) / (x + y)
      </MathExpr>
      <div style={{ marginTop: 46, fontFamily: FONTS.body, fontSize: 44 }}>
        A to B at x, return at y {"=>"} use harmonic form
      </div>
      <KeywordChip text="Pattern question in CSAT" color={COLORS.yellow} x={1300} y={140} />
    </AbsoluteFill>
  );
};
