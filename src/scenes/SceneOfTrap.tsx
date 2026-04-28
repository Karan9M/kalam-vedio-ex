import { interpolate, useCurrentFrame } from "remotion";
import { D } from "../design";
import { FONTS } from "../fonts";
import { SceneShell } from "../components/SceneShell";
import { RuleBox } from "../components/RuleBox";

export const SceneOfTrap: React.FC = () => {
  const frame = useCurrentFrame();

  const wrongOpacity = interpolate(frame, [15, 35], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const rightOpacity = interpolate(frame, [40, 60], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <SceneShell label="Numbers · The 'Of' Trap" accentColor={D.yellow}>
      {/* Problem statement */}
      <div
        style={{
          fontFamily: FONTS.body,
          fontSize: 96,
          fontWeight: 700,
          color: D.textPrimary,
          letterSpacing: "-0.02em",
          marginBottom: 56,
        }}
      >
        1/2 of 18 ÷ 3
      </div>

      {/* Two-column comparison */}
      <div style={{ display: "flex", gap: 40, marginBottom: 48 }}>
        {/* Wrong path */}
        <div
          style={{
            opacity: wrongOpacity,
            flex: 1,
            border: `2px solid ${D.red}`,
            borderRadius: D.cardR,
            padding: "32px 40px",
            backgroundColor: `${D.red}10`,
          }}
        >
          <div
            style={{
              fontFamily: FONTS.body,
              fontSize: D.sz.body,
              fontWeight: 700,
              color: D.red,
              marginBottom: 20,
            }}
          >
            ✗  Wrong
          </div>
          <div
            style={{
              fontFamily: FONTS.body,
              fontSize: D.sz.body,
              color: D.textSecondary,
              lineHeight: 1.8,
            }}
          >
            18 ÷ 3 = 6{"\n"}1/2 of 6 = 3
          </div>
        </div>

        {/* Right path */}
        <div
          style={{
            opacity: rightOpacity,
            flex: 1,
            border: `2px solid ${D.green}`,
            borderRadius: D.cardR,
            padding: "32px 40px",
            backgroundColor: `${D.green}10`,
          }}
        >
          <div
            style={{
              fontFamily: FONTS.body,
              fontSize: D.sz.body,
              fontWeight: 700,
              color: D.green,
              marginBottom: 20,
            }}
          >
            ✓  Correct
          </div>
          <div
            style={{
              fontFamily: FONTS.body,
              fontSize: D.sz.body,
              color: D.textSecondary,
              lineHeight: 1.8,
            }}
          >
            1/2 of 18 = 9{"\n"}9 ÷ 3 = 3
          </div>
        </div>
      </div>

      <RuleBox color={D.yellow} startFrame={70} style={{ alignSelf: "flex-start" }}>
        'Of' always solves before Division — this is VBODMAS in action
      </RuleBox>
    </SceneShell>
  );
};
