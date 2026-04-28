import "./index.css";
import "./fonts"; // load fonts before any rendering
import { Composition } from "remotion";
import { MyComposition, calculateMetadata } from "./Composition";
import { FPS, SCENE_FALLBACK_FRAMES, TRANSITION_DURATION } from "./constants";
import {
  PERCENTAGE_AUDIO_FILE,
  PERCENTAGE_PLACEHOLDER_DURATION,
} from "./constantsPercentages";
import { PercentagesAveragesComposition } from "./CompositionPercentagesAverages";
import { getAudioDuration } from "./utils/getAudioDuration";
import { staticFile } from "remotion";

const PLACEHOLDER_DURATION =
  SCENE_FALLBACK_FRAMES.reduce((a, b) => a + b, 0) +
  (SCENE_FALLBACK_FRAMES.length - 1) * TRANSITION_DURATION;

const calculatePercentageMetadata = async () => {
  const durationInSeconds = await getAudioDuration(
    staticFile(PERCENTAGE_AUDIO_FILE),
  );
  return {
    durationInFrames: Math.ceil(durationInSeconds * FPS),
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
