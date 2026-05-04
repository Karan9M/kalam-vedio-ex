import { FPS } from "./constants";

export const PERCENTAGE_TRANSITION_DURATION = 12;
export const PERCENTAGE_BRAND_INTRO_FRAMES = 75;
export const PERCENTAGE_BRAND_OUTRO_FRAMES = 90;

export const PERCENTAGE_SCENE_AUDIO_FILES = [
  "audio-percentages/scene-p-intro.mp3",
  "audio-percentages/scene-p-title.mp3",
  "audio-percentages/scene-p-percent-fractions.mp3",
  "audio-percentages/scene-p-successive-change.mp3",
  "audio-percentages/scene-p-average-basics.mp3",
  "audio-percentages/scene-p-logical-balancing.mp3",
  "audio-percentages/scene-p-speed-tricks.mp3",
  "audio-percentages/scene-p-base-value.mp3",
  "audio-percentages/scene-p-conclusion.mp3",
] as const;

export const PERCENTAGE_SCENE_FALLBACK_FRAMES =
  PERCENTAGE_SCENE_AUDIO_FILES.map(() => FPS * 10);

export const PERCENTAGE_PLACEHOLDER_DURATION =
  PERCENTAGE_BRAND_INTRO_FRAMES +
  PERCENTAGE_SCENE_FALLBACK_FRAMES.reduce((sum, frames) => sum + frames, 0) +
  (PERCENTAGE_SCENE_FALLBACK_FRAMES.length - 1) * PERCENTAGE_TRANSITION_DURATION +
  PERCENTAGE_BRAND_OUTRO_FRAMES;
