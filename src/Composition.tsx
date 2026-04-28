import { Audio } from "@remotion/media";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { AbsoluteFill, CalculateMetadataFunction, staticFile } from "remotion";
import {
  FPS,
  SCENE_AUDIO_FILES,
  SCENE_FALLBACK_FRAMES,
  TRANSITION_DURATION,
} from "./constants";
import { getAudioDuration } from "./utils/getAudioDuration";
import { SceneBrand } from "./scenes/SceneBrand";
import { SceneHook } from "./scenes/SceneHook";
import { SceneIntro } from "./scenes/SceneIntro";
import { SceneOfTrap } from "./scenes/SceneOfTrap";
import { ScenePhilosophy } from "./scenes/ScenePhilosophy";
import { SceneTopicReveal } from "./scenes/SceneTopicReveal";
import { SceneUnitDigit } from "./scenes/SceneUnitDigit";
import { SceneVbodmas } from "./scenes/SceneVbodmas";
import { SceneClosing } from "./scenes/SceneClosing";
import { D } from "./design";

const BRAND_INTRO_FRAMES = 75;  // 2.5s
const BRAND_OUTRO_FRAMES = 90;  // 3.0s
const timing = linearTiming({ durationInFrames: TRANSITION_DURATION });

type Props = { sceneDurations: number[] };

export const calculateMetadata: CalculateMetadataFunction<Props> = async () => {
  const durations = await Promise.all(
    SCENE_AUDIO_FILES.map((f) => getAudioDuration(staticFile(f))),
  );
  const sceneDurations = durations.map(
    (sec) => Math.ceil(sec * FPS) + TRANSITION_DURATION,
  );
  const contentFrames =
    sceneDurations.reduce((a, b) => a + b, 0) -
    (sceneDurations.length - 1) * TRANSITION_DURATION;

  return {
    durationInFrames: BRAND_INTRO_FRAMES + contentFrames + BRAND_OUTRO_FRAMES,
    props: { sceneDurations },
  };
};

export const MyComposition: React.FC<Props> = ({ sceneDurations }) => {
  const durations = sceneDurations?.length
    ? sceneDurations
    : SCENE_FALLBACK_FRAMES.map((f) => f + TRANSITION_DURATION);

  const contentScenes = [
    { dur: durations[0], node: <SceneIntro />,       audio: SCENE_AUDIO_FILES[0] },
    { dur: durations[1], node: <SceneTopicReveal />, audio: SCENE_AUDIO_FILES[1] },
    { dur: durations[2], node: <SceneHook />,        audio: SCENE_AUDIO_FILES[2] },
    { dur: durations[3], node: <SceneVbodmas />,     audio: SCENE_AUDIO_FILES[3] },
    { dur: durations[4], node: <SceneOfTrap />,      audio: SCENE_AUDIO_FILES[4] },
    { dur: durations[5], node: <SceneUnitDigit />,   audio: SCENE_AUDIO_FILES[5] },
    { dur: durations[6], node: <ScenePhilosophy />,  audio: SCENE_AUDIO_FILES[6] },
    { dur: durations[7], node: <SceneClosing />,     audio: SCENE_AUDIO_FILES[7] },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: D.bg }}>
      <TransitionSeries>
        {/* Brand intro — no audio */}
        <TransitionSeries.Sequence
          durationInFrames={BRAND_INTRO_FRAMES + TRANSITION_DURATION}
        >
          <SceneBrand mode="intro" />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={timing} />

        {/* Content scenes — audio locked inside each Sequence */}
        {contentScenes.map((scene, i) => (
          <>
            <TransitionSeries.Sequence
              key={`scene-${i}`}
              durationInFrames={scene.dur}
              premountFor={TRANSITION_DURATION * 2}
            >
              <Audio src={staticFile(scene.audio)} />
              {scene.node}
            </TransitionSeries.Sequence>
            <TransitionSeries.Transition
              key={`t-${i}`}
              presentation={fade()}
              timing={timing}
            />
          </>
        ))}

        {/* Brand outro — no audio */}
        <TransitionSeries.Sequence durationInFrames={BRAND_OUTRO_FRAMES}>
          <SceneBrand mode="outro" />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
