import { SceneShell } from "../../components/SceneShell";
import { RuleBox } from "../../components/RuleBox";
import { D } from "../../design";
import { FONTS } from "../../fonts";

export const ScenePBaseValue: React.FC = () => {
  return (
    <SceneShell label="Percentages · Base Value" accentColor={D.red}>
      <div
        style={{
          fontFamily: FONTS.body,
          fontSize: 96,
          fontWeight: 700,
          color: D.red,
          marginBottom: 24,
        }}
      >
        Base Value Matters
      </div>

      <div style={{ fontFamily: FONTS.body, fontSize: D.sz.sub, color: D.textPrimary, marginBottom: 12 }}>
        A is 25% more than B
      </div>
      <div style={{ fontFamily: FONTS.body, fontSize: D.sz.sub, color: D.yellow, marginBottom: 26 }}>
        B is NOT 25% less than A
      </div>

      <div style={{ fontFamily: FONTS.body, fontSize: D.sz.body, color: D.textSecondary, marginBottom: 34 }}>
        If B = 100, A = 125 ⇒ B is 20% less than A
      </div>

      <RuleBox color={D.red} startFrame={34} style={{ alignSelf: "flex-start" }}>
        Always identify the reference base before applying percentage logic
      </RuleBox>
    </SceneShell>
  );
};
