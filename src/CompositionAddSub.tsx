import { Audio } from "@remotion/media";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { AbsoluteFill, CalculateMetadataFunction, Sequence, staticFile } from "remotion";
import { FPS } from "./constants";
import { getAudioDuration } from "./utils/getAudioDuration";
import { SceneBrand } from "./scenes/SceneBrand";
import { SceneASIntro }    from "./scenes/addSub/SceneASIntro";
import { SceneASAddTrick } from "./scenes/addSub/SceneASAddTrick";
import { SceneASSubTrick } from "./scenes/addSub/SceneASSubTrick";
import { D } from "./design";
import { addSubManifest } from "./content/addSubManifest";
import {
  AS_FALLBACK_FRAMES,
  AS_MASTER_AUDIO,
  AS_SCENE_START_SECONDS,
  AS_TRANSITION_DURATION,
} from "./constantsAddSub";

const BRAND_INTRO_FRAMES = 75;
const BRAND_OUTRO_FRAMES = 90;
const timing = linearTiming({ durationInFrames: AS_TRANSITION_DURATION });

type Props = { sceneDurations: number[] };

export const calculateASMetadata: CalculateMetadataFunction<Props> = async () => {
  let sceneDurations: number[];

  try {
    const totalSecs = await getAudioDuration(staticFile(AS_MASTER_AUDIO));
    const starts = Array.from(AS_SCENE_START_SECONDS);

    sceneDurations = starts.map((start, i) => {
      const end = starts[i + 1] ?? totalSecs;
      return Math.round((end - start) * FPS) + AS_TRANSITION_DURATION;
    });
  } catch {
    sceneDurations = Array.from(AS_FALLBACK_FRAMES).map(
      (f) => f + AS_TRANSITION_DURATION,
    );
  }

  const contentFrames =
    sceneDurations.reduce((a, b) => a + b, 0) -
    (sceneDurations.length - 1) * AS_TRANSITION_DURATION;

  return {
    durationInFrames: BRAND_INTRO_FRAMES + contentFrames + BRAND_OUTRO_FRAMES,
    props: { sceneDurations },
  };
};

export const AddSubComposition: React.FC<Props> = ({ sceneDurations }) => {
  const durations = sceneDurations?.length === 3
    ? sceneDurations
    : Array.from(AS_FALLBACK_FRAMES).map((f) => f + AS_TRANSITION_DURATION);

  const contentFrames =
    durations.reduce((a, b) => a + b, 0) -
    (durations.length - 1) * AS_TRANSITION_DURATION;

  const contentScenes = [
    { dur: durations[0], node: <SceneASIntro /> },
    { dur: durations[1], node: <SceneASAddTrick /> },
    { dur: durations[2], node: <SceneASSubTrick /> },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: D.bg }}>
      {/* Master audio starts after brand intro, spans all content */}
      <Sequence from={BRAND_INTRO_FRAMES} durationInFrames={contentFrames}>
        <Audio src={staticFile(AS_MASTER_AUDIO)} />
      </Sequence>

      <TransitionSeries>
        <TransitionSeries.Sequence
          durationInFrames={BRAND_INTRO_FRAMES + AS_TRANSITION_DURATION}
        >
          <SceneBrand
            mode="intro"
            brandName="SuperKalam"
            introSubtitle={addSubManifest.introSubtitle}
            outroSubtitle={addSubManifest.outroSubtitle}
          />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={timing} />

        {contentScenes.map((scene, i) => (
          <>
            <TransitionSeries.Sequence
              key={`as-scene-${i}`}
              durationInFrames={scene.dur}
              premountFor={AS_TRANSITION_DURATION * 2}
            >
              {scene.node}
            </TransitionSeries.Sequence>
            <TransitionSeries.Transition
              key={`as-t-${i}`}
              presentation={fade()}
              timing={timing}
            />
          </>
        ))}

        <TransitionSeries.Sequence durationInFrames={BRAND_OUTRO_FRAMES}>
          <SceneBrand
            mode="outro"
            brandName="SuperKalam"
            introSubtitle={addSubManifest.introSubtitle}
            outroSubtitle={addSubManifest.outroSubtitle}
          />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
