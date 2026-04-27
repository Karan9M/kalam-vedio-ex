import "./index.css";
import { Composition, staticFile } from "remotion";
import { MyComposition } from "./Composition";
import { FPS } from "./constants";
import {
  PERCENTAGE_AUDIO_FILE,
  PERCENTAGE_PLACEHOLDER_DURATION,
} from "./constantsPercentages";
import { PercentagesAveragesComposition } from "./CompositionPercentagesAverages";
import { getAudioDuration } from "./utils/getAudioDuration";

const calculateMetadata = async () => {
  const durationInSeconds = await getAudioDuration(staticFile("audio1.mp3"));
  return {
    durationInFrames: Math.ceil(durationInSeconds * FPS),
  };
};

const calculatePercentageMetadata = async () => {
  const durationInSeconds = await getAudioDuration(staticFile(PERCENTAGE_AUDIO_FILE));
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
        durationInFrames={FPS * 72}
        fps={FPS}
        width={1920}
        height={1080}
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
