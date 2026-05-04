import { interpolate, useCurrentFrame } from "remotion";
import { D } from "../design";
import { FONTS } from "../fonts";
import { SceneShell } from "../components/SceneShell";
import { RuleBox } from "../components/RuleBox";
import { findSceneById, getCueFrame } from "../content/cues";
import { numbersManifest } from "../content/numbersManifest";

const scene = findSceneById(numbersManifest.scenes, "of-trap");

export const SceneOfTrap: React.FC = () => {
  const frame = useCurrentFrame();
  const comparisonIn = getCueFrame(scene.cueFrames, "comparisonIn", 18);
  const ruleBoxIn = getCueFrame(scene.cueFrames, "ruleBoxIn", 72);

  const wrongOpacity = interpolate(frame, [comparisonIn, comparisonIn + 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const rightOpacity = interpolate(frame, [comparisonIn + 25, comparisonIn + 45], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <SceneShell label={scene.label} accentColor={D[scene.accentColor]}>
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

      <div style={{ display: "flex", gap: 40, marginBottom: 48 }}>
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
          <div style={{ fontFamily: FONTS.body, fontSize: D.sz.body, fontWeight: 700, color: D.red, marginBottom: 20 }}>
            ✗  Wrong
          </div>
          <div style={{ fontFamily: FONTS.body, fontSize: D.sz.body, color: D.textSecondary, lineHeight: 1.8 }}>
            18 ÷ 3 = 6{"\n"}1/2 of 6 = 3
          </div>
        </div>

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
          <div style={{ fontFamily: FONTS.body, fontSize: D.sz.body, fontWeight: 700, color: D.green, marginBottom: 20 }}>
            ✓  Correct
          </div>
          <div style={{ fontFamily: FONTS.body, fontSize: D.sz.body, color: D.textSecondary, lineHeight: 1.8 }}>
            1/2 of 18 = 9{"\n"}9 ÷ 3 = 3
          </div>
        </div>
      </div>

      <RuleBox color={D.yellow} startFrame={ruleBoxIn} style={{ alignSelf: "flex-start" }}>
        {scene.takeaway}
      </RuleBox>
    </SceneShell>
  );
};
