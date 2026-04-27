import { Audio } from "@remotion/media";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { AbsoluteFill, staticFile } from "remotion";
import { Background } from "./components/Background";
import { SCENE_FRAMES, TRANSITION_DURATION } from "./constants";
import { SceneClosing } from "./scenes/SceneClosing";
import { SceneHook } from "./scenes/SceneHook";
import { SceneIntro } from "./scenes/SceneIntro";
import { SceneOfTrap } from "./scenes/SceneOfTrap";
import { ScenePhilosophy } from "./scenes/ScenePhilosophy";
import { SceneTopicReveal } from "./scenes/SceneTopicReveal";
import { SceneUnitDigit } from "./scenes/SceneUnitDigit";
import { SceneVbodmas } from "./scenes/SceneVbodmas";

const transitionTiming = linearTiming({ durationInFrames: TRANSITION_DURATION });

export const MyComposition: React.FC = () => {
  const [intro, topic, hook, vbodmas, ofTrap, unitDigit, philosophy, closing] =
    SCENE_FRAMES;

  return (
    <AbsoluteFill>
      <Background />
      <Audio src={staticFile("audio1.mp3")} />
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={intro + TRANSITION_DURATION}>
          <SceneIntro />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={transitionTiming} />
        <TransitionSeries.Sequence durationInFrames={topic + TRANSITION_DURATION}>
          <SceneTopicReveal />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={transitionTiming} />
        <TransitionSeries.Sequence durationInFrames={hook + TRANSITION_DURATION}>
          <SceneHook />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={transitionTiming} />
        <TransitionSeries.Sequence durationInFrames={vbodmas + TRANSITION_DURATION}>
          <SceneVbodmas />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={transitionTiming} />
        <TransitionSeries.Sequence durationInFrames={ofTrap + TRANSITION_DURATION}>
          <SceneOfTrap />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={transitionTiming} />
        <TransitionSeries.Sequence durationInFrames={unitDigit + TRANSITION_DURATION}>
          <SceneUnitDigit />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={transitionTiming} />
        <TransitionSeries.Sequence durationInFrames={philosophy + TRANSITION_DURATION}>
          <ScenePhilosophy />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={transitionTiming} />
        <TransitionSeries.Sequence durationInFrames={closing + TRANSITION_DURATION}>
          <SceneClosing />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
