import { Audio, staticFile } from "remotion";
import { AbsoluteFill, CalculateMetadataFunction, Sequence } from "remotion";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { SceneBrand } from "./scenes/SceneBrand";
import { Slide01Efficiency }    from "./scenes/TimeWork/Slide01Efficiency";
import { Slide02CombinedWork }  from "./scenes/TimeWork/Slide02CombinedWork";
import { Slide03Shortcut }      from "./scenes/TimeWork/Slide03Shortcut";
import { Slide04LCMMethod }     from "./scenes/TimeWork/Slide04LCMMethod";
import { Slide05Abandonment }   from "./scenes/TimeWork/Slide05Abandonment";
import { Slide06Alternating }   from "./scenes/TimeWork/Slide06Alternating";
import { Slide07Pipes }         from "./scenes/TimeWork/Slide07Pipes";
import { Slide08Wages }         from "./scenes/TimeWork/Slide08Wages";
import { Slide09Mistakes }      from "./scenes/TimeWork/Slide09Mistakes";
import { Slide10Question }      from "./scenes/TimeWork/Slide10Question";
import { Slide11Recap }         from "./scenes/TimeWork/Slide11Recap";

// Section durations from Assets/Manual/EW-manual.txt SRT timestamps (x30fps)
// S1:  0s    -> 49.5s  = 1530f   S2:  51.2s  -> 98.6s  = 1420f
// S3:  98.6s -> 151.2s = 1580f   S4:  151.2s -> 214.8s = 1910f
// S5:  214.8s-> 274.9s = 1805f   S6:  274.9s -> 335.3s = 1815f
// S7:  335.3s-> 413.9s = 2355f   S8:  413.9s -> 457.0s = 1295f
// S9:  457.0s-> 502.7s = 1370f   S10: 502.7s -> 573.7s = 2130f
// S11: 573.7s-> 646.7s = 2190f

const TRANSITION  = 12;
const BRAND_INTRO = 75;
const BRAND_OUTRO = 90;

const timing = linearTiming({ durationInFrames: TRANSITION });

const BASE_DURATIONS = [1530, 1420, 1580, 1910, 1805, 1815, 2355, 1295, 1370, 2130, 2190] as const;

type Props = { sceneDurations: number[] };

export const calculateEWMetadata: CalculateMetadataFunction<Props> = async () => {
  const sceneDurations = BASE_DURATIONS.map((d) => d + TRANSITION);
  const contentFrames =
    sceneDurations.reduce((a, b) => a + b, 0) - (sceneDurations.length - 1) * TRANSITION;
  return {
    durationInFrames: BRAND_INTRO + contentFrames + BRAND_OUTRO,
    props: { sceneDurations },
  };
};

const SLIDES = [
  Slide01Efficiency, Slide02CombinedWork, Slide03Shortcut, Slide04LCMMethod,
  Slide05Abandonment, Slide06Alternating, Slide07Pipes, Slide08Wages,
  Slide09Mistakes, Slide10Question, Slide11Recap,
];

export const EWComposition: React.FC<Props> = ({ sceneDurations }) => {
  const durations =
    sceneDurations?.length === 11
      ? sceneDurations
      : BASE_DURATIONS.map((d) => d + TRANSITION);

  const contentFrames =
    durations.reduce((a, b) => a + b, 0) - (durations.length - 1) * TRANSITION;

  return (
    <AbsoluteFill style={{ backgroundColor: "#FAFAF7" }}>
      <Sequence from={BRAND_INTRO} durationInFrames={contentFrames}>
        <Audio src={staticFile("EW-FInal.mp3")} />
      </Sequence>

      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={BRAND_INTRO + TRANSITION}>
          <SceneBrand mode="intro" introSubtitle="UPSC CSAT - Time and Work" />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={timing} />

        {SLIDES.map((SlideComp, i) => (
          <>
            <TransitionSeries.Sequence
              key={`ew-slide-${i}`}
              durationInFrames={durations[i]}
              premountFor={TRANSITION * 2}
            >
              <SlideComp />
            </TransitionSeries.Sequence>
            <TransitionSeries.Transition
              key={`ew-t-${i}`}
              presentation={fade()}
              timing={timing}
            />
          </>
        ))}

        <TransitionSeries.Sequence durationInFrames={BRAND_OUTRO}>
          <SceneBrand mode="outro" introSubtitle="UPSC CSAT - Time and Work" />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
