import "./index.css";
import "./fonts"; // load fonts before any rendering
import { Composition, staticFile } from "remotion";
import { MyComposition, calculateMetadata } from "./Composition";
import { FPS, SCENE_FALLBACK_FRAMES, TRANSITION_DURATION } from "./constants";
import {
  PERCENTAGE_AUDIO_FILE,
  PERCENTAGE_BRAND_INTRO_FRAMES,
  PERCENTAGE_BRAND_OUTRO_FRAMES,
  PERCENTAGE_PLACEHOLDER_DURATION,
} from "./constantsPercentages";
import { PercentagesAveragesComposition } from "./CompositionPercentagesAverages";
import { getAudioDuration } from "./utils/getAudioDuration";

const BRAND_INTRO_FRAMES = 75;
const BRAND_OUTRO_FRAMES = 90;

const PLACEHOLDER_DURATION =
  BRAND_INTRO_FRAMES +
  SCENE_FALLBACK_FRAMES.reduce((a, b) => a + b, 0) +
  (SCENE_FALLBACK_FRAMES.length - 1) * TRANSITION_DURATION +
  BRAND_OUTRO_FRAMES;

const calculatePercentageMetadata = async () => {
  const durationInSeconds = await getAudioDuration(
    staticFile(PERCENTAGE_AUDIO_FILE),
  );
  return {
    durationInFrames:
      Math.ceil(durationInSeconds * FPS) +
      PERCENTAGE_BRAND_INTRO_FRAMES +
      PERCENTAGE_BRAND_OUTRO_FRAMES,
  };
};

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
        calculateMetadata={calculatePercentageMetadata}
      />
    </>
  );
};
