import { Audio } from "@remotion/media";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { AbsoluteFill, CalculateMetadataFunction, Sequence, staticFile } from "remotion";
import { FPS } from "./constants";
import { getAudioDuration } from "./utils/getAudioDuration";
import { SceneBrand } from "./scenes/SceneBrand";
import { ScenePLIntro }        from "./scenes/profitLoss/ScenePLIntro";
import { ScenePLPctFormula }   from "./scenes/profitLoss/ScenePLPctFormula";
import { ScenePLSpCpFormulas } from "./scenes/profitLoss/ScenePLSpCpFormulas";
import { ScenePLMarkedPrice }  from "./scenes/profitLoss/ScenePLMarkedPrice";
import { ScenePLSuccessive }   from "./scenes/profitLoss/ScenePLSuccessive";
import { ScenePLSameSP }       from "./scenes/profitLoss/ScenePLSameSP";
import { ScenePLDishonest }    from "./scenes/profitLoss/ScenePLDishonest";
import { ScenePLPriceChange }  from "./scenes/profitLoss/ScenePLPriceChange";
import { ScenePLMultiItems }   from "./scenes/profitLoss/ScenePLMultiItems";
import { ScenePLPartnership }  from "./scenes/profitLoss/ScenePLPartnership";
import { ScenePLBreakeven }    from "./scenes/profitLoss/ScenePLBreakeven";
import { ScenePLSummary }      from "./scenes/profitLoss/ScenePLSummary";
import { D } from "./design";
import { plManifest } from "./content/plManifest";
import {
  PL_FALLBACK_FRAMES,
  PL_MASTER_AUDIO,
  PL_SCENE_START_SECONDS,
  PL_TRANSITION_DURATION,
  PL_AUDIO_END_SECONDS,
} from "./constantsPL";

const BRAND_INTRO_FRAMES = 75;
const BRAND_OUTRO_FRAMES = 90;
const timing = linearTiming({ durationInFrames: PL_TRANSITION_DURATION });

type Props = { sceneDurations: number[] };

export const calculatePLMetadata: CalculateMetadataFunction<Props> = async () => {
  let sceneDurations: number[];

  try {
    const totalSecs = await getAudioDuration(staticFile(PL_MASTER_AUDIO));
    const starts = Array.from(PL_SCENE_START_SECONDS);

    sceneDurations = starts.map((start, i) => {
      const end = starts[i + 1] ?? Math.max(totalSecs, PL_AUDIO_END_SECONDS);
      return Math.round((end - start) * FPS) + PL_TRANSITION_DURATION;
    });
  } catch {
    sceneDurations = Array.from(PL_FALLBACK_FRAMES).map(
      (f) => f + PL_TRANSITION_DURATION,
    );
  }

  const contentFrames =
    sceneDurations.reduce((a, b) => a + b, 0) -
    (sceneDurations.length - 1) * PL_TRANSITION_DURATION;

  return {
    durationInFrames: BRAND_INTRO_FRAMES + contentFrames + BRAND_OUTRO_FRAMES,
    props: { sceneDurations },
  };
};

export const PLComposition: React.FC<Props> = ({ sceneDurations }) => {
  const durations =
    sceneDurations?.length === 12
      ? sceneDurations
      : Array.from(PL_FALLBACK_FRAMES).map((f) => f + PL_TRANSITION_DURATION);

  const contentFrames =
    durations.reduce((a, b) => a + b, 0) -
    (durations.length - 1) * PL_TRANSITION_DURATION;

  const contentScenes = [
    { dur: durations[0],  node: <ScenePLIntro /> },
    { dur: durations[1],  node: <ScenePLPctFormula /> },
    { dur: durations[2],  node: <ScenePLSpCpFormulas /> },
    { dur: durations[3],  node: <ScenePLMarkedPrice /> },
    { dur: durations[4],  node: <ScenePLSuccessive /> },
    { dur: durations[5],  node: <ScenePLSameSP /> },
    { dur: durations[6],  node: <ScenePLDishonest /> },
    { dur: durations[7],  node: <ScenePLPriceChange /> },
    { dur: durations[8],  node: <ScenePLMultiItems /> },
    { dur: durations[9],  node: <ScenePLPartnership /> },
    { dur: durations[10], node: <ScenePLBreakeven /> },
    { dur: durations[11], node: <ScenePLSummary /> },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: D.bg }}>
      <Sequence from={BRAND_INTRO_FRAMES} durationInFrames={contentFrames}>
        <Audio src={staticFile(PL_MASTER_AUDIO)} />
      </Sequence>

      <TransitionSeries>
        <TransitionSeries.Sequence
          durationInFrames={BRAND_INTRO_FRAMES + PL_TRANSITION_DURATION}
        >
          <SceneBrand
            mode="intro"
            brandName="SuperKalam"
            introSubtitle={plManifest.introSubtitle}
            outroSubtitle={plManifest.outroSubtitle}
          />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={timing} />

        {contentScenes.map((scene, i) => (
          <>
            <TransitionSeries.Sequence
              key={`pl-scene-${i}`}
              durationInFrames={scene.dur}
              premountFor={PL_TRANSITION_DURATION * 2}
            >
              {scene.node}
            </TransitionSeries.Sequence>
            <TransitionSeries.Transition
              key={`pl-t-${i}`}
              presentation={fade()}
              timing={timing}
            />
          </>
        ))}

        <TransitionSeries.Sequence durationInFrames={BRAND_OUTRO_FRAMES}>
          <SceneBrand
            mode="outro"
            brandName="SuperKalam"
            introSubtitle={plManifest.introSubtitle}
            outroSubtitle={plManifest.outroSubtitle}
          />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
