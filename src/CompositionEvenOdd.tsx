import { Audio, staticFile } from "remotion";
import { AbsoluteFill, CalculateMetadataFunction, Sequence } from "remotion";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { SceneBrand } from "./scenes/SceneBrand";
import { Slide01Title }     from "./scenes/EvenOdd/Slide01Title";
import { Slide02Basics }    from "./scenes/EvenOdd/Slide02Basics";
import { Slide03ZeroNeg }   from "./scenes/EvenOdd/Slide03ZeroNeg";
import { Slide04LastDigit } from "./scenes/EvenOdd/Slide04LastDigit";
import { Slide05AddSub }    from "./scenes/EvenOdd/Slide05AddSub";
import { Slide06LongExpr }  from "./scenes/EvenOdd/Slide06LongExpr";
import { Slide07Multiply }  from "./scenes/EvenOdd/Slide07Multiply";
import { Slide08Powers }    from "./scenes/EvenOdd/Slide08Powers";
import { Slide09Primes }    from "./scenes/EvenOdd/Slide09Primes";
import { Slide10Questions } from "./scenes/EvenOdd/Slide10Questions";
import { Slide11Tricks }    from "./scenes/EvenOdd/Slide11Tricks";
import { Slide12Recap }     from "./scenes/EvenOdd/Slide12Recap";

// Section start/end seconds from Assets/Manual/EO-manual.txt SRT timestamps
// S1:  0.031 → 20.517  = 615f    S2:  20.517 → 52.765  = 967f
// S3:  52.765 → 93.907 = 1234f   S4:  93.907 → 122.813 = 867f
// S5:  122.813 → 174.316 = 1545f  S6:  174.316 → 240.112 = 1974f
// S7:  240.112 → 298.162 = 1742f  S8:  298.162 → 341.530 = 1301f
// S9:  341.530 → 414.447 = 2188f  S10: 414.447 → 493.152 = 2361f
// S11: 493.152 → 520.000 = 805f   S12: 520.000 → 548.352 = 851f

const TRANSITION = 12;
const BRAND_INTRO = 75;
const BRAND_OUTRO = 90;

const timing = linearTiming({ durationInFrames: TRANSITION });

const BASE_DURATIONS = [615, 967, 1234, 867, 1545, 1974, 1742, 1301, 2188, 2361, 805, 851] as const;

type Props = { sceneDurations: number[] };

export const calculateEvenOddMetadata: CalculateMetadataFunction<Props> = async () => {
  const sceneDurations = BASE_DURATIONS.map((d) => d + TRANSITION);
  const contentFrames =
    sceneDurations.reduce((a, b) => a + b, 0) - (sceneDurations.length - 1) * TRANSITION;
  return {
    durationInFrames: BRAND_INTRO + contentFrames + BRAND_OUTRO,
    props: { sceneDurations },
  };
};

const SLIDES = [
  Slide01Title, Slide02Basics, Slide03ZeroNeg, Slide04LastDigit,
  Slide05AddSub, Slide06LongExpr, Slide07Multiply, Slide08Powers,
  Slide09Primes, Slide10Questions, Slide11Tricks, Slide12Recap,
];

export const EvenOddComposition: React.FC<Props> = ({ sceneDurations }) => {
  const durations =
    sceneDurations?.length === 12
      ? sceneDurations
      : BASE_DURATIONS.map((d) => d + TRANSITION);

  const contentFrames =
    durations.reduce((a, b) => a + b, 0) - (durations.length - 1) * TRANSITION;

  return (
    <AbsoluteFill style={{ backgroundColor: "#FAFAF7" }}>
      {/* Audio after brand intro */}
      <Sequence from={BRAND_INTRO} durationInFrames={contentFrames}>
        <Audio src={staticFile("EO-Audio.mp3")} />
      </Sequence>

      <TransitionSeries>
        {/* Brand intro */}
        <TransitionSeries.Sequence durationInFrames={BRAND_INTRO + TRANSITION}>
          <SceneBrand mode="intro" introSubtitle="UPSC CSAT — Even & Odd Numbers" />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={timing} />

        {/* Content slides */}
        {SLIDES.map((SlideComp, i) => (
          <>
            <TransitionSeries.Sequence
              key={`eo-slide-${i}`}
              durationInFrames={durations[i]}
              premountFor={TRANSITION * 2}
            >
              <SlideComp />
            </TransitionSeries.Sequence>
            <TransitionSeries.Transition
              key={`eo-t-${i}`}
              presentation={fade()}
              timing={timing}
            />
          </>
        ))}

        {/* Brand outro */}
        <TransitionSeries.Sequence durationInFrames={BRAND_OUTRO}>
          <SceneBrand mode="outro" introSubtitle="UPSC CSAT — Even & Odd Numbers" />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
