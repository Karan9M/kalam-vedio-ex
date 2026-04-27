import { Audio } from "@remotion/media";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { AbsoluteFill, staticFile } from "remotion";
import { Background } from "./components/Background";
import {
  PERCENTAGE_AUDIO_FILE,
  PERCENTAGE_SCENE_FRAMES,
  PERCENTAGE_TRANSITION_DURATION,
} from "./constantsPercentages";
import { ScenePAverageBasics } from "./scenes/percentages/ScenePAverageBasics";
import { ScenePBaseValue } from "./scenes/percentages/ScenePBaseValue";
import { ScenePConclusion } from "./scenes/percentages/ScenePConclusion";
import { ScenePIntro } from "./scenes/percentages/ScenePIntro";
import { ScenePLogicalBalancing } from "./scenes/percentages/ScenePLogicalBalancing";
import { ScenePPercentFractions } from "./scenes/percentages/ScenePPercentFractions";
import { ScenePSpeedTricks } from "./scenes/percentages/ScenePSpeedTricks";
import { ScenePSuccessiveChange } from "./scenes/percentages/ScenePSuccessiveChange";
import { ScenePTitle } from "./scenes/percentages/ScenePTitle";

const transitionTiming = linearTiming({
  durationInFrames: PERCENTAGE_TRANSITION_DURATION,
});

export const PercentagesAveragesComposition: React.FC = () => {
  const [
    intro,
    title,
    percentFractions,
    successiveChange,
    averageBasics,
    logicalBalancing,
    speedTricks,
    baseValue,
    conclusion,
  ] = PERCENTAGE_SCENE_FRAMES;

  return (
    <AbsoluteFill>
      <Background />
      <Audio src={staticFile(PERCENTAGE_AUDIO_FILE)} />
      <TransitionSeries>
        <TransitionSeries.Sequence
          durationInFrames={intro + PERCENTAGE_TRANSITION_DURATION}
        >
          <ScenePIntro />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={transitionTiming} />

        <TransitionSeries.Sequence
          durationInFrames={title + PERCENTAGE_TRANSITION_DURATION}
        >
          <ScenePTitle />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={transitionTiming} />

        <TransitionSeries.Sequence
          durationInFrames={percentFractions + PERCENTAGE_TRANSITION_DURATION}
        >
          <ScenePPercentFractions />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={transitionTiming} />

        <TransitionSeries.Sequence
          durationInFrames={successiveChange + PERCENTAGE_TRANSITION_DURATION}
        >
          <ScenePSuccessiveChange />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={transitionTiming} />

        <TransitionSeries.Sequence
          durationInFrames={averageBasics + PERCENTAGE_TRANSITION_DURATION}
        >
          <ScenePAverageBasics />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={transitionTiming} />

        <TransitionSeries.Sequence
          durationInFrames={logicalBalancing + PERCENTAGE_TRANSITION_DURATION}
        >
          <ScenePLogicalBalancing />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={transitionTiming} />

        <TransitionSeries.Sequence
          durationInFrames={speedTricks + PERCENTAGE_TRANSITION_DURATION}
        >
          <ScenePSpeedTricks />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={transitionTiming} />

        <TransitionSeries.Sequence
          durationInFrames={baseValue + PERCENTAGE_TRANSITION_DURATION}
        >
          <ScenePBaseValue />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={transitionTiming} />

        <TransitionSeries.Sequence
          durationInFrames={conclusion + PERCENTAGE_TRANSITION_DURATION}
        >
          <ScenePConclusion />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
