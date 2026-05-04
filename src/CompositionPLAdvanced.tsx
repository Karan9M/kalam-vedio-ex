import { Audio } from "@remotion/media";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { AbsoluteFill, CalculateMetadataFunction, Sequence } from "remotion";
import { SceneBrand } from "./scenes/SceneBrand";
import plAdvancedAudio from "../Assets/audio/PL-audio.mp3";
import { SlideTitle }    from "./scenes/PLAdvanced/SlideTitle";
import { SlideBasics }   from "./scenes/PLAdvanced/SlideBasics";
import { SlideFormulas } from "./scenes/PLAdvanced/SlideFormulas";

// Exact scene-start seconds from Assets/Manual/script-time.txt
// Slide 1 (title):    0:00.031 → 0:18.661 = 18.630s → 559f
// Slide 2 (basics):   0:18.661 → 1:08.694 = 50.033s → 1501f
// Slide 3 (formulas): 1:08.694 → 1:49.216 = 40.522s → 1216f
const TRANSITION = 12;
const BRAND_INTRO = 75;
const BRAND_OUTRO = 90;

const timing = linearTiming({ durationInFrames: TRANSITION });

type Props = { sceneDurations: number[] };

// Durations from exact SRT timestamps: 18.630s, 50.033s, 40.522s
export const calculatePLAdvancedMetadata: CalculateMetadataFunction<Props> = async () => {
  const sceneDurations = [559 + TRANSITION, 1501 + TRANSITION, 1216 + TRANSITION];
  const contentFrames =
    sceneDurations.reduce((a, b) => a + b, 0) -
    (sceneDurations.length - 1) * TRANSITION;
  return {
    durationInFrames: BRAND_INTRO + contentFrames + BRAND_OUTRO,
    props: { sceneDurations },
  };
};

export const PLAdvancedComposition: React.FC<Props> = ({ sceneDurations }) => {
  const durations =
    sceneDurations?.length === 3
      ? sceneDurations
      : [559 + TRANSITION, 1501 + TRANSITION, 1216 + TRANSITION];

  const contentFrames =
    durations.reduce((a, b) => a + b, 0) -
    (durations.length - 1) * TRANSITION;

  const slides = [
    { dur: durations[0], node: <SlideTitle /> },
    { dur: durations[1], node: <SlideBasics /> },
    { dur: durations[2], node: <SlideFormulas /> },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: "#FAFAF7" }}>
      {/* Audio starts after brand intro */}
      <Sequence from={BRAND_INTRO} durationInFrames={contentFrames}>
        <Audio src={plAdvancedAudio} />
      </Sequence>

      <TransitionSeries>
        {/* Brand intro */}
        <TransitionSeries.Sequence durationInFrames={BRAND_INTRO + TRANSITION}>
          <SceneBrand
            mode="intro"
            introSubtitle="UPSC CSAT — Profit and Loss"
          />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={timing} />

        {/* Content slides */}
        {slides.map((slide, i) => (
          <>
            <TransitionSeries.Sequence
              key={`pla-slide-${i}`}
              durationInFrames={slide.dur}
              premountFor={TRANSITION * 2}
            >
              {slide.node}
            </TransitionSeries.Sequence>
            <TransitionSeries.Transition
              key={`pla-t-${i}`}
              presentation={fade()}
              timing={timing}
            />
          </>
        ))}

        {/* Brand outro */}
        <TransitionSeries.Sequence durationInFrames={BRAND_OUTRO}>
          <SceneBrand
            mode="outro"
            introSubtitle="UPSC CSAT — Profit and Loss"
          />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
