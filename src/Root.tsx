import "./index.css";
import "./fonts"; // load fonts before any rendering
import { Composition } from "remotion";
import { MyComposition, calculateMetadata } from "./Composition";
import {
  calculateGenericTemplateMetadata,
  GenericExplainerTemplate,
} from "./GenericExplainerTemplate";
import { FPS, SCENE_FALLBACK_FRAMES, TRANSITION_DURATION } from "./constants";
import {
  PERCENTAGE_SCENE_FALLBACK_FRAMES,
  PERCENTAGE_PLACEHOLDER_DURATION,
} from "./constantsPercentages";
import {
  calculatePercentagesMetadata,
  PercentagesAveragesComposition,
} from "./CompositionPercentagesAverages";
import {
  calculateRPMetadata,
  RatioProportionComposition,
} from "./CompositionRatioProportion";
import {
  RP_FALLBACK_FRAMES,
  RP_PLACEHOLDER_DURATION,
} from "./constantsRatioProportion";
import {
  calculateASMetadata,
  AddSubComposition,
} from "./CompositionAddSub";
import {
  AS_FALLBACK_FRAMES,
  AS_PLACEHOLDER_DURATION,
} from "./constantsAddSub";
import {
  calculatePLMetadata,
  PLComposition,
} from "./CompositionPL";
import {
  PL_FALLBACK_FRAMES,
  PL_PLACEHOLDER_DURATION,
} from "./constantsPL";
import { defaultExplainerRequest } from "./tooling/defaultExplainerRequest";
import {
  calculatePLAdvancedMetadata,
  PLAdvancedComposition,
} from "./CompositionPLAdvanced";
import {
  calculateEvenOddMetadata,
  EvenOddComposition,
} from "./CompositionEvenOdd";
import {
  calculateEWMetadata,
  EWComposition,
} from "./CompositionEW";

const BRAND_INTRO_FRAMES = 75;
const BRAND_OUTRO_FRAMES = 90;

const PLACEHOLDER_DURATION =
  BRAND_INTRO_FRAMES +
  SCENE_FALLBACK_FRAMES.reduce((a, b) => a + b, 0) +
  (SCENE_FALLBACK_FRAMES.length - 1) * TRANSITION_DURATION +
  BRAND_OUTRO_FRAMES;

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="CsatNumbers"
        component={MyComposition}
        durationInFrames={PLACEHOLDER_DURATION}
        fps={FPS}
        width={1920}
        height={1080}
        defaultProps={{ sceneDurations: SCENE_FALLBACK_FRAMES }}
        calculateMetadata={calculateMetadata}
      />
      <Composition
        id="CsatPercentagesAverages"
        component={PercentagesAveragesComposition}
        durationInFrames={PERCENTAGE_PLACEHOLDER_DURATION}
        fps={FPS}
        width={1920}
        height={1080}
        defaultProps={{ sceneDurations: PERCENTAGE_SCENE_FALLBACK_FRAMES }}
        calculateMetadata={calculatePercentagesMetadata}
      />
      <Composition
        id="GenericExplainerTemplate"
        component={GenericExplainerTemplate}
        durationInFrames={180}
        fps={FPS}
        width={1920}
        height={1080}
        defaultProps={{ request: defaultExplainerRequest, sceneDurations: [] }}
        calculateMetadata={calculateGenericTemplateMetadata}
      />
      <Composition
        id="RatioProportion"
        component={RatioProportionComposition}
        durationInFrames={RP_PLACEHOLDER_DURATION}
        fps={FPS}
        width={1920}
        height={1080}
        defaultProps={{ sceneDurations: Array.from(RP_FALLBACK_FRAMES) }}
        calculateMetadata={calculateRPMetadata}
      />
      <Composition
        id="AdditionSubtraction"
        component={AddSubComposition}
        durationInFrames={AS_PLACEHOLDER_DURATION}
        fps={FPS}
        width={1920}
        height={1080}
        defaultProps={{ sceneDurations: Array.from(AS_FALLBACK_FRAMES) }}
        calculateMetadata={calculateASMetadata}
      />
      <Composition
        id="ProfitLossWhiteboard"
        component={PLAdvancedComposition}
        durationInFrames={75 + 559 + 1501 + 1216 + 12 + 90}
        fps={FPS}
        width={1920}
        height={1080}
        defaultProps={{ sceneDurations: [559 + 12, 1501 + 12, 1216 + 12] }}
        calculateMetadata={calculatePLAdvancedMetadata}
      />
      <Composition
        id="ProfitLoss"
        component={PLComposition}
        durationInFrames={PL_PLACEHOLDER_DURATION}
        fps={FPS}
        width={1920}
        height={1080}
        defaultProps={{ sceneDurations: Array.from(PL_FALLBACK_FRAMES) }}
        calculateMetadata={calculatePLMetadata}
      />
      <Composition
        id="EvenOdd"
        component={EvenOddComposition}
        durationInFrames={75 + 615 + 967 + 1234 + 867 + 1545 + 1974 + 1742 + 1301 + 2188 + 2361 + 805 + 851 + 12 + 90}
        fps={FPS}
        width={1920}
        height={1080}
        defaultProps={{ sceneDurations: [615,967,1234,867,1545,1974,1742,1301,2188,2361,805,851].map((d) => d + 12) }}
        calculateMetadata={calculateEvenOddMetadata}
      />
      <Composition
        id="TimeAndWork"
        component={EWComposition}
        durationInFrames={75 + 1530 + 1420 + 1580 + 1910 + 1805 + 1815 + 2355 + 1295 + 1370 + 2130 + 2190 + 12 + 90}
        fps={FPS}
        width={1920}
        height={1080}
        defaultProps={{ sceneDurations: [1530, 1420, 1580, 1910, 1805, 1815, 2355, 1295, 1370, 2130, 2190].map((d) => d + 12) }}
        calculateMetadata={calculateEWMetadata}
      />
    </>
  );
};
