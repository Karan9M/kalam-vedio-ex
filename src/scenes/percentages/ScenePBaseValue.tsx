import { AbsoluteFill } from "remotion";
import { KeywordChip } from "../../components/KeywordChip";
import { COLORS } from "../../constants";
import { FONTS } from "../../fonts";

export const ScenePBaseValue: React.FC = () => {
  return (
    <AbsoluteFill style={{ padding: "80px 120px", color: COLORS.text }}>
      <div style={{ fontFamily: FONTS.handwritten, fontSize: 104, color: COLORS.red }}>
        Base Value Matters
      </div>
      <div style={{ marginTop: 26, fontFamily: FONTS.body, fontSize: 52 }}>
        A is 25% more than B
      </div>
      <div style={{ marginTop: 16, fontFamily: FONTS.body, fontSize: 52, color: COLORS.yellow }}>
        B is NOT 25% less than A
      </div>
      <div style={{ marginTop: 38, fontFamily: FONTS.body, fontSize: 42 }}>
        If B = 100, A = 125
      </div>
      <div style={{ marginTop: 8, fontFamily: FONTS.body, fontSize: 42, color: COLORS.green }}>
        So B is 20% less than A (not 25%)
      </div>
      <KeywordChip text="Always check the base" color={COLORS.red} x={1350} y={140} />
    </AbsoluteFill>
  );
};
