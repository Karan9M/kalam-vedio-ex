import { FPS, toFrames } from "./constants";

export const PERCENTAGE_AUDIO_FILE = "ratan_tts_audio_percentage.mp3";
export const PERCENTAGE_TRANSITION_DURATION = 12;

export const PERCENTAGE_SCENE_SECONDS = [8, 10, 16, 20, 16, 16, 14, 14, 8] as const;
export const PERCENTAGE_SCENE_FRAMES = PERCENTAGE_SCENE_SECONDS.map(toFrames);

export const PERCENTAGE_PLACEHOLDER_DURATION =
  FPS * PERCENTAGE_SCENE_SECONDS.reduce((sum, sec) => sum + sec, 0);
