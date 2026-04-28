import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { KeywordChip } from "../../components/KeywordChip";
import { COLORS } from "../../constants";
import { FONTS } from "../../fonts";

export const ScenePAverageBasics: React.FC = () => {
  const frame = useCurrentFrame();
  const barA = interpolate(frame, [10, 60], [200, 320], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const barB = interpolate(frame, [10, 60], [280, 320], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const barC = interpolate(frame, [10, 60], [360, 320], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ padding: "80px 120px", color: COLORS.text }}>
      <div style={{ fontFamily: FONTS.handwritten, fontSize: 106, color: COLORS.blue }}>
        Averages = Balance Point
      </div>
      <div style={{ marginTop: 28, fontFamily: FONTS.body, fontSize: 48 }}>
        Sum of observations / Number of observations
      </div>
      <div style={{ marginTop: 54, display: "flex", alignItems: "flex-end", gap: 80 }}>
        <div style={{ width: 110, height: barA, background: COLORS.red, borderRadius: 10 }} />
        <div style={{ width: 110, height: barB, background: COLORS.yellow, borderRadius: 10 }} />
        <div style={{ width: 110, height: barC, background: COLORS.green, borderRadius: 10 }} />
        <div style={{ width: 8, height: 360, background: COLORS.blue, marginLeft: 30 }} />
      </div>
      <KeywordChip text="Weighted + Deviation methods matter" x={1110} y={150} />
    </AbsoluteFill>
  );
};
