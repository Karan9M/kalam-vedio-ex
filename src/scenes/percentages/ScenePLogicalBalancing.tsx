import { AbsoluteFill } from "remotion";
import { KeywordChip } from "../../components/KeywordChip";
import { COLORS } from "../../constants";
import { FONTS } from "../../fonts";

export const ScenePLogicalBalancing: React.FC = () => {
  return (
    <AbsoluteFill style={{ padding: "80px 120px", color: COLORS.text }}>
      <div style={{ fontFamily: FONTS.handwritten, fontSize: 100, color: COLORS.yellow }}>
        Logical Balancing
      </div>
      <div style={{ marginTop: 28, fontFamily: FONTS.body, fontSize: 48 }}>
        Class average = 50, new student = 60
      </div>
      <div style={{ marginTop: 24, fontFamily: FONTS.body, fontSize: 54, color: COLORS.green }}>
        Extra +10 gets distributed across class
      </div>
      <div
        style={{
          marginTop: 60,
          display: "flex",
          gap: 16,
          alignItems: "center",
          fontFamily: FONTS.body,
          fontSize: 42,
        }}
      >
        <div
          style={{
            padding: "14px 24px",
            border: `2px solid ${COLORS.blue}`,
            borderRadius: 12,
          }}
        >
          50
        </div>
        <div style={{ fontSize: 52 }}>+</div>
        <div
          style={{
            padding: "14px 24px",
            border: `2px solid ${COLORS.yellow}`,
            borderRadius: 12,
          }}
        >
          +10/N
        </div>
      </div>
      <KeywordChip text="Do not recalc total sum every time" color={COLORS.blue} x={1150} y={140} />
    </AbsoluteFill>
  );
};
