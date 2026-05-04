import { Audio } from "@remotion/media";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { AbsoluteFill, CalculateMetadataFunction, staticFile } from "remotion";
import {
  PERCENTAGE_BRAND_INTRO_FRAMES,
  PERCENTAGE_BRAND_OUTRO_FRAMES,
  PERCENTAGE_SCENE_AUDIO_FILES,
  PERCENTAGE_SCENE_FALLBACK_FRAMES,
  PERCENTAGE_TRANSITION_DURATION,
} from "./constantsPercentages";
import { D } from "./design";
import { ScenePAverageBasics } from "./scenes/percentages/ScenePAverageBasics";
import { ScenePBaseValue } from "./scenes/percentages/ScenePBaseValue";
import { ScenePConclusion } from "./scenes/percentages/ScenePConclusion";
import { ScenePIntro } from "./scenes/percentages/ScenePIntro";
import { ScenePLogicalBalancing } from "./scenes/percentages/ScenePLogicalBalancing";
import { ScenePPercentFractions } from "./scenes/percentages/ScenePPercentFractions";
import { ScenePSpeedTricks } from "./scenes/percentages/ScenePSpeedTricks";
import { ScenePSuccessiveChange } from "./scenes/percentages/ScenePSuccessiveChange";
import { ScenePTitle } from "./scenes/percentages/ScenePTitle";
import { SceneBrand } from "./scenes/SceneBrand";
import { FPS } from "./constants";
import { getAudioDuration } from "./utils/getAudioDuration";
import { percentagesManifest } from "./content/percentagesManifest";

const transitionTiming = linearTiming({
  durationInFrames: PERCENTAGE_TRANSITION_DURATION,
});

type Props = { sceneDurations: number[] };

export const calculatePercentagesMetadata: CalculateMetadataFunction<Props> = async () => {
  const durations = await Promise.all(
    PERCENTAGE_SCENE_AUDIO_FILES.map((file) => getAudioDuration(staticFile(file))),
  );

  const sceneDurations = durations.map(
    (sec) => Math.ceil(sec * FPS) + PERCENTAGE_TRANSITION_DURATION,
  );
  const contentFrames =
    sceneDurations.reduce((a, b) => a + b, 0) -
    (sceneDurations.length - 1) * PERCENTAGE_TRANSITION_DURATION;

  return {
    durationInFrames:
      PERCENTAGE_BRAND_INTRO_FRAMES + contentFrames + PERCENTAGE_BRAND_OUTRO_FRAMES,
    props: { sceneDurations },
  };
};

export const PercentagesAveragesComposition: React.FC<Props> = ({ sceneDurations }) => {
  const durations = sceneDurations?.length
    ? sceneDurations
    : PERCENTAGE_SCENE_FALLBACK_FRAMES.map(
        (frames) => frames + PERCENTAGE_TRANSITION_DURATION,
      );

  const contentScenes = [
    {
      dur: durations[0],
      node: <ScenePIntro />,
      audio: PERCENTAGE_SCENE_AUDIO_FILES[0],
    },
    {
      dur: durations[1],
      node: <ScenePTitle />,
      audio: PERCENTAGE_SCENE_AUDIO_FILES[1],
    },
    {
      dur: durations[2],
      node: <ScenePPercentFractions />,
      audio: PERCENTAGE_SCENE_AUDIO_FILES[2],
    },
    {
      dur: durations[3],
      node: <ScenePSuccessiveChange />,
      audio: PERCENTAGE_SCENE_AUDIO_FILES[3],
    },
    {
      dur: durations[4],
      node: <ScenePAverageBasics />,
      audio: PERCENTAGE_SCENE_AUDIO_FILES[4],
    },
    {
      dur: durations[5],
      node: <ScenePLogicalBalancing />,
      audio: PERCENTAGE_SCENE_AUDIO_FILES[5],
    },
    {
      dur: durations[6],
      node: <ScenePSpeedTricks />,
      audio: PERCENTAGE_SCENE_AUDIO_FILES[6],
    },
    {
      dur: durations[7],
      node: <ScenePBaseValue />,
      audio: PERCENTAGE_SCENE_AUDIO_FILES[7],
    },
    {
      dur: durations[8],
      node: <ScenePConclusion />,
      audio: PERCENTAGE_SCENE_AUDIO_FILES[8],
    },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: D.bg }}>
      <TransitionSeries>
        <TransitionSeries.Sequence
          durationInFrames={
            PERCENTAGE_BRAND_INTRO_FRAMES + PERCENTAGE_TRANSITION_DURATION
          }
        >
          <SceneBrand
            mode="intro"
            introSubtitle={percentagesManifest.introSubtitle}
            outroSubtitle={percentagesManifest.outroSubtitle}
          />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={transitionTiming} />
        {contentScenes.map((scene, i) => (
          <>
            <TransitionSeries.Sequence
              key={`p-scene-${i}`}
              durationInFrames={scene.dur}
              premountFor={PERCENTAGE_TRANSITION_DURATION * 2}
            >
              <Audio src={staticFile(scene.audio)} />
              {scene.node}
            </TransitionSeries.Sequence>
            <TransitionSeries.Transition
              key={`p-transition-${i}`}
              presentation={fade()}
              timing={transitionTiming}
            />
          </>
        ))}
        <TransitionSeries.Sequence
          durationInFrames={PERCENTAGE_BRAND_OUTRO_FRAMES}
        >
          <SceneBrand
            mode="outro"
            introSubtitle={percentagesManifest.introSubtitle}
            outroSubtitle={percentagesManifest.outroSubtitle}
          />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
