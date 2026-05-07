import { Audio, staticFile } from "remotion";
import { AbsoluteFill, CalculateMetadataFunction, Sequence } from "remotion";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { SceneBrand } from "./scenes/SceneBrand";
import { Slide01Intro }        from "./scenes/PL2/Slide01Intro";
import { Slide02CSATLayers }   from "./scenes/PL2/Slide02CSATLayers";
import { Slide03CPSP }         from "./scenes/PL2/Slide03CPSP";
import { Slide04TrueCP }       from "./scenes/PL2/Slide04TrueCP";
import { Slide05Formulas }     from "./scenes/PL2/Slide05Formulas";
import { Slide06Example }      from "./scenes/PL2/Slide06Example";
import { Slide07SPFormula }    from "./scenes/PL2/Slide07SPFormula";
import { Slide08CPFormula }    from "./scenes/PL2/Slide08CPFormula";
import { Slide09PracticeQ1 }   from "./scenes/PL2/Slide09PracticeQ1";
import { Slide10MarkedPrice }  from "./scenes/PL2/Slide10MarkedPrice";
import { Slide11Successive }   from "./scenes/PL2/Slide11Successive";
import { Slide12FalseWeights } from "./scenes/PL2/Slide12FalseWeights";
import { Slide13SameSP }       from "./scenes/PL2/Slide13SameSP";
import { Slide14FullQ }        from "./scenes/PL2/Slide14FullQ";
import { Slide15CP100Trick }   from "./scenes/PL2/Slide15CP100Trick";
import { Slide16Recap }        from "./scenes/PL2/Slide16Recap";

// Section durations from Assets/Manual/PL-manual.txt SRT timestamps (x30fps)
// S1:  0:00 -> 0:28  =  840f    S2:  0:28 -> 0:53  =  750f
// S3:  0:53 -> 1:22  =  870f    S4:  1:22 -> 1:49  =  810f
// S5:  1:49 -> 2:56  = 2000f    S6:  2:56 -> 3:21  =  750f
// S7:  3:21 -> 4:30  = 2070f    S8:  4:30 -> 6:17  = 3180f
// S9:  6:17 -> 7:17  = 1800f    S10: 7:17 -> 8:53  = 2880f
// S11: 8:53 -> 10:08 = 2280f    S12: 10:08-> 11:25 = 2310f
// S13: 11:25-> 13:42 = 4110f    S14: 13:42-> 15:01 = 2370f
// S15: 15:01-> 15:49 = 1440f    S16: 15:49-> end   = 3000f

const TRANSITION  = 12;
const BRAND_INTRO = 75;
const BRAND_OUTRO = 90;

const timing = linearTiming({ durationInFrames: TRANSITION });

const BASE_DURATIONS = [840, 750, 870, 810, 2000, 750, 2070, 3180, 1800, 2880, 2280, 2310, 4110, 2370, 1440, 3000] as const;

type Props = { sceneDurations: number[] };

export const calculatePL2Metadata: CalculateMetadataFunction<Props> = async () => {
  const sceneDurations = BASE_DURATIONS.map((d) => d + TRANSITION);
  const contentFrames =
    sceneDurations.reduce((a, b) => a + b, 0) - (sceneDurations.length - 1) * TRANSITION;
  return {
    durationInFrames: BRAND_INTRO + contentFrames + BRAND_OUTRO,
    props: { sceneDurations },
  };
};

const SLIDES = [
  Slide01Intro, Slide02CSATLayers, Slide03CPSP, Slide04TrueCP,
  Slide05Formulas, Slide06Example, Slide07SPFormula, Slide08CPFormula,
  Slide09PracticeQ1, Slide10MarkedPrice, Slide11Successive, Slide12FalseWeights,
  Slide13SameSP, Slide14FullQ, Slide15CP100Trick, Slide16Recap,
];

export const PL2Composition: React.FC<Props> = ({ sceneDurations }) => {
  const durations =
    sceneDurations?.length === 16
      ? sceneDurations
      : BASE_DURATIONS.map((d) => d + TRANSITION);

  const contentFrames =
    durations.reduce((a, b) => a + b, 0) - (durations.length - 1) * TRANSITION;

  return (
    <AbsoluteFill style={{ backgroundColor: "#FAFAF9" }}>
      <Sequence from={BRAND_INTRO} durationInFrames={contentFrames}>
        <Audio src={staticFile("Profit-Loss-Script.mp3")} />
      </Sequence>

      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={BRAND_INTRO + TRANSITION}>
          <SceneBrand mode="intro" introSubtitle="UPSC CSAT - Profit and Loss" />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={timing} />

        {SLIDES.map((SlideComp, i) => (
          <>
            <TransitionSeries.Sequence
              key={`pl2-slide-${i}`}
              durationInFrames={durations[i]}
              premountFor={60}
            >
              <SlideComp />
            </TransitionSeries.Sequence>
            <TransitionSeries.Transition
              key={`pl2-t-${i}`}
              presentation={fade()}
              timing={timing}
            />
          </>
        ))}

        <TransitionSeries.Sequence durationInFrames={BRAND_OUTRO}>
          <SceneBrand mode="outro" introSubtitle="UPSC CSAT - Profit and Loss" />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
