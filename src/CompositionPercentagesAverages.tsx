import { Audio } from "@remotion/media";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { AbsoluteFill, Sequence, staticFile } from "remotion";
import {
  PERCENTAGE_AUDIO_FILE,
  PERCENTAGE_SCENE_FRAMES,
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

const BRAND_INTRO_FRAMES = 75;
const BRAND_OUTRO_FRAMES = 90;

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

  const contentScenes = [
    { dur: intro + PERCENTAGE_TRANSITION_DURATION, node: <ScenePIntro /> },
    { dur: title + PERCENTAGE_TRANSITION_DURATION, node: <ScenePTitle /> },
    {
      dur: percentFractions + PERCENTAGE_TRANSITION_DURATION,
      node: <ScenePPercentFractions />,
    },
    {
      dur: successiveChange + PERCENTAGE_TRANSITION_DURATION,
      node: <ScenePSuccessiveChange />,
    },
    { dur: averageBasics + PERCENTAGE_TRANSITION_DURATION, node: <ScenePAverageBasics /> },
    {
      dur: logicalBalancing + PERCENTAGE_TRANSITION_DURATION,
      node: <ScenePLogicalBalancing />,
    },
    { dur: speedTricks + PERCENTAGE_TRANSITION_DURATION, node: <ScenePSpeedTricks /> },
    { dur: baseValue + PERCENTAGE_TRANSITION_DURATION, node: <ScenePBaseValue /> },
    { dur: conclusion + PERCENTAGE_TRANSITION_DURATION, node: <ScenePConclusion /> },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: D.bg }}>
      <Sequence from={BRAND_INTRO_FRAMES}>
        <Audio src={staticFile(PERCENTAGE_AUDIO_FILE)} />
      </Sequence>
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={BRAND_INTRO_FRAMES + PERCENTAGE_TRANSITION_DURATION}>
          <SceneBrand
            mode="intro"
            introSubtitle="UPSC CSAT — Percentages & Averages"
            outroSubtitle="Subscribe for complete CSAT coverage"
          />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={transitionTiming} />
        {contentScenes.map((scene, i) => (
          <>
            <TransitionSeries.Sequence key={`p-scene-${i}`} durationInFrames={scene.dur}>
              {scene.node}
            </TransitionSeries.Sequence>
            <TransitionSeries.Transition
              key={`p-transition-${i}`}
              presentation={fade()}
              timing={transitionTiming}
            />
          </>
        ))}
        <TransitionSeries.Sequence durationInFrames={BRAND_OUTRO_FRAMES}>
          <SceneBrand
            mode="outro"
            introSubtitle="UPSC CSAT — Percentages & Averages"
            outroSubtitle="Subscribe for complete CSAT coverage"
          />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
