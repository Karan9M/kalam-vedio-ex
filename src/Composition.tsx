import { Audio } from "@remotion/media";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import {
  AbsoluteFill,
  CalculateMetadataFunction,
  staticFile,
} from "remotion";
import { Background } from "./components/Background";
import {
  FPS,
  SCENE_AUDIO_FILES,
  SCENE_FALLBACK_FRAMES,
  TRANSITION_DURATION,
} from "./constants";
import { getAudioDuration } from "./utils/getAudioDuration";
import { SceneClosing } from "./scenes/SceneClosing";
import { SceneHook } from "./scenes/SceneHook";
import { SceneIntro } from "./scenes/SceneIntro";
import { SceneOfTrap } from "./scenes/SceneOfTrap";
import { ScenePhilosophy } from "./scenes/ScenePhilosophy";
import { SceneTopicReveal } from "./scenes/SceneTopicReveal";
import { SceneUnitDigit } from "./scenes/SceneUnitDigit";
import { SceneVbodmas } from "./scenes/SceneVbodmas";

type Props = {
  sceneDurations: number[]; // frames per scene
};

const transitionTiming = linearTiming({ durationInFrames: TRANSITION_DURATION });

// Measures each per-scene audio file and passes exact frame counts as props.
// Timing is 100% driven by audio — no more hardcoded SCENE_SECONDS.
export const calculateMetadata: CalculateMetadataFunction<Props> = async () => {
  const durations = await Promise.all(
    SCENE_AUDIO_FILES.map((file) => getAudioDuration(staticFile(file))),
  );

  const sceneDurations = durations.map(
    (sec) => Math.ceil(sec * FPS) + TRANSITION_DURATION,
  );

  const numTransitions = sceneDurations.length - 1;
  const totalFrames =
    sceneDurations.reduce((a, b) => a + b, 0) -
    numTransitions * TRANSITION_DURATION;

  return {
    durationInFrames: totalFrames,
    props: { sceneDurations },
  };
};

export const MyComposition: React.FC<Props> = ({ sceneDurations }) => {
  const durations = sceneDurations?.length
    ? sceneDurations
    : SCENE_FALLBACK_FRAMES.map((f) => f + TRANSITION_DURATION);

  const [intro, topic, hook, vbodmas, ofTrap, unitDigit, philosophy, closing] =
    durations;

  const scenes = [
    { dur: intro, component: <SceneIntro />, audio: SCENE_AUDIO_FILES[0] },
    { dur: topic, component: <SceneTopicReveal />, audio: SCENE_AUDIO_FILES[1] },
    { dur: hook, component: <SceneHook />, audio: SCENE_AUDIO_FILES[2] },
    { dur: vbodmas, component: <SceneVbodmas />, audio: SCENE_AUDIO_FILES[3] },
    { dur: ofTrap, component: <SceneOfTrap />, audio: SCENE_AUDIO_FILES[4] },
    { dur: unitDigit, component: <SceneUnitDigit />, audio: SCENE_AUDIO_FILES[5] },
    { dur: philosophy, component: <ScenePhilosophy />, audio: SCENE_AUDIO_FILES[6] },
    { dur: closing, component: <SceneClosing />, audio: SCENE_AUDIO_FILES[7] },
  ];

  return (
    <AbsoluteFill>
      <Background />
      <TransitionSeries>
        {scenes.map((scene, i) => (
          <>
            {/* Audio inside each Sequence so it starts exactly when its scene starts */}
            <TransitionSeries.Sequence
              key={`scene-${i}`}
              durationInFrames={scene.dur}
              premountFor={TRANSITION_DURATION * 2}
            >
              <Audio src={staticFile(scene.audio)} />
              {scene.component}
            </TransitionSeries.Sequence>
            {i < scenes.length - 1 && (
              <TransitionSeries.Transition
                key={`transition-${i}`}
                presentation={fade()}
                timing={transitionTiming}
              />
            )}
          </>
        ))}
      </TransitionSeries>
    </AbsoluteFill>
  );
};
