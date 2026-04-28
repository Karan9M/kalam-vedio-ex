import { SceneShell } from "../../components/SceneShell";
import { RuleBox } from "../../components/RuleBox";
import { D } from "../../design";
import { FONTS } from "../../fonts";

export const ScenePSuccessiveChange: React.FC = () => {
  return (
    <SceneShell label="Percentages · Successive Change" accentColor={D.red}>
      <div
        style={{
          fontFamily: FONTS.body,
          fontSize: 96,
          fontWeight: 700,
          color: D.yellow,
          marginBottom: 28,
        }}
      >
        +10% then -10% ≠ 0%
      </div>

      <div
        style={{
          fontFamily: FONTS.body,
          fontSize: D.sz.sub,
          color: D.textSecondary,
          marginBottom: 20,
        }}
      >
        Net % change = x + y + (xy/100)
      </div>

      <div
        style={{
          fontFamily: FONTS.body,
          fontSize: D.sz.body,
          color: D.textPrimary,
          marginBottom: 42,
        }}
      >
        10 + (-10) + (10 × -10 / 100) = <span style={{ color: D.red }}>-1%</span>
      </div>

      <RuleBox color={D.red} startFrame={40} style={{ alignSelf: "flex-start" }}>
        Equal up and down percentages do not cancel — base keeps changing
      </RuleBox>
    </SceneShell>
  );
};
