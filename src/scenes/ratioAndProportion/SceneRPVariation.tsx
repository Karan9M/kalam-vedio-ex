import { useCurrentFrame } from "remotion";
import { SceneShell } from "../../components/SceneShell";
import { RuleBox } from "../../components/RuleBox";
import { VisualRenderer } from "../../components/VisualRenderer";
import { WordHighlightSubtitle } from "../../components/WordHighlightSubtitle";
import { D } from "../../design";
import { ratioProportionManifest } from "../../content/ratioProportionManifest";
import { findSceneById, getCueFrame, getActiveSegmentIndex } from "../../content/cues";

const scene = findSceneById(ratioProportionManifest.scenes, "rp-avg-speed");

export const SceneRPVariation: React.FC = () => {
  const frame = useCurrentFrame();
  const activeIdx = getActiveSegmentIndex(frame, scene);
  const seg = scene.narration[activeIdx];
  const segStartFrame = scene.cueFrames[seg?.cue ?? "sceneIn"] ?? 0;
  const ruleBoxIn = getCueFrame(scene.cueFrames, "ruleBoxIn", 9999);

  return (
    <SceneShell label={scene.label} accentColor={D[scene.accentColor]}>
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {seg?.visual && (
          <VisualRenderer spec={seg.visual} startFrame={segStartFrame} accentColor={D[scene.accentColor]} />
        )}
      </div>
      <WordHighlightSubtitle text={seg?.text ?? ""} accentColor={D[scene.accentColor]} />
      {ruleBoxIn < 9999 && (
        <RuleBox color={D[scene.accentColor]} startFrame={ruleBoxIn} style={{ alignSelf: "flex-start", marginTop: 24 }}>
          {scene.takeaway}
        </RuleBox>
      )}
    </SceneShell>
  );
};
