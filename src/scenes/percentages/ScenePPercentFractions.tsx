import { SceneShell } from "../../components/SceneShell";
import { RuleBox } from "../../components/RuleBox";
import { D } from "../../design";
import { FONTS } from "../../fonts";
import { interpolate, useCurrentFrame } from "remotion";

const mappings = ["10% = 1/10", "12.5% = 1/8", "33.33% = 1/3", "50% = 1/2"];

export const ScenePPercentFractions: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <SceneShell label="Percentages · Think in Fractions" accentColor={D.yellow}>
      <div
        style={{
          fontFamily: FONTS.body,
          fontSize: D.sz.heading,
          fontWeight: 700,
          color: D.yellow,
          marginBottom: 36,
        }}
      >
        Percentage = Per Hundred
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 44 }}>
        {mappings.map((item, index) => {
          const start = 14 + index * 12;
          const opacity = interpolate(frame, [start, start + 8], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          return (
            <div
              key={item}
              style={{
                opacity,
                fontFamily: FONTS.body,
                fontSize: D.sz.body,
                color: index < 2 ? D.blue : D.textPrimary,
              }}
            >
              {item}
            </div>
          );
        })}
      </div>

      <RuleBox color={D.green} startFrame={62} style={{ alignSelf: "flex-start" }}>
        Convert to fractions first — calculations become faster and cleaner
      </RuleBox>
    </SceneShell>
  );
};
