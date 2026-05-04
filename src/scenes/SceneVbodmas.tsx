import { useCurrentFrame } from "remotion";
import { D } from "../design";
import { FONTS } from "../fonts";
import { SceneShell } from "../components/SceneShell";
import { RuleBox } from "../components/RuleBox";
import { findSceneById, getCueFrame } from "../content/cues";
import { numbersManifest } from "../content/numbersManifest";

const scene = findSceneById(numbersManifest.scenes, "vbodmas");
const STEPS = [
  { letter: "V", label: "Vinculum / Bar", color: D.blue },
  { letter: "B", label: "Brackets", color: D.blue },
  { letter: "O", label: "Of", color: D.yellow },
  { letter: "D", label: "Division", color: D.textPrimary },
  { letter: "M", label: "Multiplication", color: D.textPrimary },
  { letter: "A", label: "Addition", color: D.textSecondary },
  { letter: "S", label: "Subtraction", color: D.textSecondary },
];

export const SceneVbodmas: React.FC = () => {
  const frame = useCurrentFrame();
  const detailIn = getCueFrame(scene.cueFrames, "detailIn", 20);
  const exampleIn = getCueFrame(scene.cueFrames, "exampleIn", 60);
  const shown = Math.min(STEPS.length, Math.max(0, Math.floor((frame - detailIn) / 20) + 1));

  return (
    <SceneShell label={scene.label} accentColor={D[scene.accentColor]}>
      <div style={{ display: "flex", gap: 24, marginBottom: 48 }}>
        {STEPS.map((s, i) => (
          <div
            key={s.letter}
            style={{
              opacity: i < shown ? 1 : 0,
              fontFamily: FONTS.body,
              fontSize: 100,
              fontWeight: 700,
              color: s.color,
              lineHeight: 1,
            }}
          >
            {s.letter}
          </div>
        ))}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {STEPS.map((s, i) => (
          <div
            key={s.label}
            style={{
              opacity: i < shown ? 1 : 0,
              fontFamily: FONTS.body,
              fontSize: D.sz.body,
              color: s.color,
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <span style={{ fontWeight: 700, minWidth: 40 }}>{s.letter}</span>
            <span style={{ color: D.textLabel }}>—</span>
            <span style={{ fontWeight: s.color === D.yellow ? 600 : 400 }}>{s.label}</span>
          </div>
        ))}
      </div>

      <RuleBox color={D.yellow} startFrame={exampleIn} style={{ marginTop: 48, alignSelf: "flex-start" }}>
        {scene.takeaway}
      </RuleBox>
    </SceneShell>
  );
};
