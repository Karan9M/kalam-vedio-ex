import { interpolate, useCurrentFrame } from "remotion";
import { SceneShell } from "../../components/SceneShell";
import { RuleBox } from "../../components/RuleBox";
import { D } from "../../design";
import { FONTS } from "../../fonts";

export const ScenePAverageBasics: React.FC = () => {
  const frame = useCurrentFrame();
  const barA = interpolate(frame, [12, 42], [200, 320], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const barB = interpolate(frame, [12, 42], [280, 320], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const barC = interpolate(frame, [12, 42], [360, 320], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <SceneShell label="Averages · Balance Point" accentColor={D.blue}>
      <div
        style={{
          fontFamily: FONTS.body,
          fontSize: 100,
          fontWeight: 700,
          color: D.blue,
          marginBottom: 20,
        }}
      >
        Averages = Balance Point
      </div>

      <div
        style={{
          fontFamily: FONTS.body,
          fontSize: D.sz.body,
          color: D.textSecondary,
          marginBottom: 42,
        }}
      >
        Sum of observations / Number of observations
      </div>

      <div style={{ marginTop: 8, display: "flex", alignItems: "flex-end", gap: 56, marginBottom: 40 }}>
        <div style={{ width: 110, height: barA, background: D.red, borderRadius: 10 }} />
        <div style={{ width: 110, height: barB, background: D.yellow, borderRadius: 10 }} />
        <div style={{ width: 110, height: barC, background: D.green, borderRadius: 10 }} />
        <div style={{ width: 8, height: 360, background: D.blue, marginLeft: 24 }} />
      </div>

      <RuleBox color={D.blue} startFrame={54} style={{ alignSelf: "flex-start" }}>
        Think in deviations from average, not full recalculation each time
      </RuleBox>
    </SceneShell>
  );
};
