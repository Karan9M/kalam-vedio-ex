import { D } from "./design";

export const FPS = 30;

// Re-exported for backward compatibility with percentage scenes.
// New scenes should import D from design.ts directly.
export const COLORS = {
  bg:     D.bg,
  text:   D.textPrimary,
  blue:   D.blue,
  green:  D.green,
  yellow: D.yellow,
  red:    D.red,
} as const;
export const TRANSITION_DURATION = 12;
export const toFrames = (seconds: number) => Math.round(seconds * FPS);

// One audio file per scene — place in public/audio/
// calculateMetadata measures each file and sets exact durations.
export const SCENE_AUDIO_FILES = [
  "audio/scene-intro.mp3",
  "audio/scene-topic.mp3",
  "audio/scene-hook.mp3",
  "audio/scene-vbodmas.mp3",
  "audio/scene-oftrap.mp3",
  "audio/scene-unitdigit.mp3",
  "audio/scene-philosophy.mp3",
  "audio/scene-closing.mp3",
] as const;

// Fallback placeholder durations used in Remotion Studio
// before calculateMetadata runs. Does NOT control actual video duration.
export const SCENE_FALLBACK_FRAMES = SCENE_AUDIO_FILES.map(() => FPS * 8);
