import { Audio } from "@remotion/media";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { AbsoluteFill, CalculateMetadataFunction, Sequence, staticFile } from "remotion";
import { FPS } from "./constants";
import { getAudioDuration } from "./utils/getAudioDuration";
import { SceneBrand } from "./scenes/SceneBrand";
import { SceneRPIntro }      from "./scenes/ratioAndProportion/SceneRPIntro";
import { SceneRPRatio }      from "./scenes/ratioAndProportion/SceneRPRatio";
import { SceneRPFraction }   from "./scenes/ratioAndProportion/SceneRPFraction";
import { SceneRPProportion } from "./scenes/ratioAndProportion/SceneRPProportion";
import { SceneRPCross }      from "./scenes/ratioAndProportion/SceneRPCross";
import { SceneRPSTD }        from "./scenes/ratioAndProportion/SceneRPSTD";
import { SceneRPVariation }  from "./scenes/ratioAndProportion/SceneRPVariation";
import { SceneRPRelative }   from "./scenes/ratioAndProportion/SceneRPRelative";
import { SceneRPFormulas }   from "./scenes/ratioAndProportion/SceneRPFormulas";
import { SceneRPConclusion } from "./scenes/ratioAndProportion/SceneRPConclusion";
import { D } from "./design";
import { ratioProportionManifest } from "./content/ratioProportionManifest";
import {
  RP_FALLBACK_FRAMES,
  RP_MASTER_AUDIO,
  RP_TRANSITION_DURATION,
  RP_WORD_COUNTS,
} from "./constantsRatioProportion";

const BRAND_INTRO_FRAMES = 75;
const BRAND_OUTRO_FRAMES = 90;
const timing = linearTiming({ durationInFrames: RP_TRANSITION_DURATION });

type Props = { sceneDurations: number[] };

export const calculateRPMetadata: CalculateMetadataFunction<Props> = async () => {
  let sceneDurations: number[];

  try {
    const totalSecs = await getAudioDuration(staticFile(RP_MASTER_AUDIO));
    const totalFrames = Math.ceil(totalSecs * FPS);
    const totalWords = (RP_WORD_COUNTS as readonly number[]).reduce((a, b) => a + b, 0);

    sceneDurations = Array.from(RP_WORD_COUNTS).map(
      (wc) => Math.round((wc / totalWords) * totalFrames) + RP_TRANSITION_DURATION,
    );
  } catch {
    sceneDurations = Array.from(RP_FALLBACK_FRAMES).map(
      (f) => f + RP_TRANSITION_DURATION,
    );
  }

  const contentFrames =
    sceneDurations.reduce((a, b) => a + b, 0) -
    (sceneDurations.length - 1) * RP_TRANSITION_DURATION;

  return {
    durationInFrames: BRAND_INTRO_FRAMES + contentFrames + BRAND_OUTRO_FRAMES,
    props: { sceneDurations },
  };
};

export const RatioProportionComposition: React.FC<Props> = ({ sceneDurations }) => {
  const durations = sceneDurations?.length === 10
    ? sceneDurations
    : Array.from(RP_FALLBACK_FRAMES).map((f) => f + RP_TRANSITION_DURATION);

  const contentFrames =
    durations.reduce((a, b) => a + b, 0) -
    (durations.length - 1) * RP_TRANSITION_DURATION;

  const contentScenes = [
    { dur: durations[0], node: <SceneRPIntro /> },
    { dur: durations[1], node: <SceneRPRatio /> },
    { dur: durations[2], node: <SceneRPFraction /> },
    { dur: durations[3], node: <SceneRPProportion /> },
    { dur: durations[4], node: <SceneRPCross /> },
    { dur: durations[5], node: <SceneRPSTD /> },
    { dur: durations[6], node: <SceneRPVariation /> },
    { dur: durations[7], node: <SceneRPRelative /> },
    { dur: durations[8], node: <SceneRPFormulas /> },
    { dur: durations[9], node: <SceneRPConclusion /> },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: D.bg }}>
      {/* Master audio: starts after brand intro, spans all content scenes */}
      <Sequence from={BRAND_INTRO_FRAMES} durationInFrames={contentFrames}>
        <Audio src={staticFile(RP_MASTER_AUDIO)} />
      </Sequence>

      <TransitionSeries>
        <TransitionSeries.Sequence
          durationInFrames={BRAND_INTRO_FRAMES + RP_TRANSITION_DURATION}
        >
          <SceneBrand
            mode="intro"
            brandName="SuperKalam"
            introSubtitle={ratioProportionManifest.introSubtitle}
            outroSubtitle={ratioProportionManifest.outroSubtitle}
          />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={timing} />

        {contentScenes.map((scene, i) => (
          <>
            <TransitionSeries.Sequence
              key={`rp-scene-${i}`}
              durationInFrames={scene.dur}
              premountFor={RP_TRANSITION_DURATION * 2}
            >
              {scene.node}
            </TransitionSeries.Sequence>
            <TransitionSeries.Transition
              key={`rp-t-${i}`}
              presentation={fade()}
              timing={timing}
            />
          </>
        ))}

        <TransitionSeries.Sequence durationInFrames={BRAND_OUTRO_FRAMES}>
          <SceneBrand
            mode="outro"
            brandName="SuperKalam"
            introSubtitle={ratioProportionManifest.introSubtitle}
            outroSubtitle={ratioProportionManifest.outroSubtitle}
          />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
