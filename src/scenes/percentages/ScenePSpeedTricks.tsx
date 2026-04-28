import { SceneShell } from "../../components/SceneShell";
import { RuleBox } from "../../components/RuleBox";
import { D } from "../../design";
import { FONTS } from "../../fonts";

export const ScenePSpeedTricks: React.FC = () => {
  return (
    <SceneShell label="Averages · Speed Trick" accentColor={D.green}>
      <div
        style={{
          fontFamily: FONTS.body,
          fontSize: 96,
          fontWeight: 700,
          color: D.green,
          marginBottom: 18,
        }}
      >
        Average Speed Trick
      </div>

      <div
        style={{
          fontFamily: FONTS.body,
          fontSize: D.sz.sub,
          color: D.textSecondary,
          marginBottom: 24,
        }}
      >
        Not simple average of x and y
      </div>

      <div
        style={{
          fontFamily: FONTS.body,
          fontSize: 68,
          fontWeight: 700,
          color: D.yellow,
          marginBottom: 34,
        }}
      >
        Avg Speed = 2xy / (x + y)
      </div>

      <RuleBox color={D.yellow} startFrame={36} style={{ alignSelf: "flex-start" }}>
        For equal distance travel, always use harmonic mean form
      </RuleBox>
    </SceneShell>
  );
};
