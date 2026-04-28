import { SceneShell } from "../../components/SceneShell";
import { RuleBox } from "../../components/RuleBox";
import { D } from "../../design";
import { FONTS } from "../../fonts";

export const ScenePLogicalBalancing: React.FC = () => {
  return (
    <SceneShell label="Averages · Logical Balancing" accentColor={D.yellow}>
      <div
        style={{
          fontFamily: FONTS.body,
          fontSize: 96,
          fontWeight: 700,
          color: D.yellow,
          marginBottom: 20,
        }}
      >
        Class avg = 50, new student = 60
      </div>

      <div
        style={{
          fontFamily: FONTS.body,
          fontSize: D.sz.sub,
          color: D.textSecondary,
          marginBottom: 36,
        }}
      >
        Extra +10 gets distributed across the full class
      </div>

      <div
        style={{
          display: "flex",
          gap: 18,
          alignItems: "center",
          fontFamily: FONTS.body,
          fontSize: 42,
          marginBottom: 40,
          color: D.textPrimary,
        }}
      >
        <div style={{ padding: "14px 24px", border: `2px solid ${D.blue}`, borderRadius: D.cardR }}>50</div>
        <div style={{ fontSize: 52, color: D.textLabel }}>+</div>
        <div style={{ padding: "14px 24px", border: `2px solid ${D.yellow}`, borderRadius: D.cardR }}>10 / N</div>
      </div>

      <RuleBox color={D.blue} startFrame={44} style={{ alignSelf: "flex-start" }}>
        Use balancing logic first — avoid total-sum brute force
      </RuleBox>
    </SceneShell>
  );
};
