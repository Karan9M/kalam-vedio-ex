export const AS_TRANSITION_DURATION = 12;

// Master audio for the full Addition & Subtraction lesson
export const AS_MASTER_AUDIO = "advait_tts_audio.mp3";

// Exact scene start times (seconds) extracted from transcript
// Source: public/manual/advait_tts_audio.txt
// Scene 1: 0:00.031 — "नमस्ते! आज हम बात करेंगे..."
// Scene 2: 0:36.059 — "एक सिंपल ट्विक याद रखें"
// Scene 3: 0:51.027 — "यही approach घटाव में भी"
export const AS_SCENE_START_SECONDS = [0.0, 36.059, 51.027] as const;

// Fallback frame counts per scene (exact values computed from 75.634s audio at 30fps)
// Scene 1: 36.059×30 = 1082 | Scene 2: 14.968×30 = 449 | Scene 3: 24.607×30 = 738
export const AS_FALLBACK_FRAMES = [1082, 449, 738] as const;

// Placeholder total for Remotion Studio registration
// = BRAND_INTRO(75) + sum(FALLBACK) + 1×TRANSITION + BRAND_OUTRO(90)
export const AS_PLACEHOLDER_DURATION =
  75 +
  (AS_FALLBACK_FRAMES as readonly number[]).reduce((a, b) => a + b, 0) +
  AS_TRANSITION_DURATION +
  90;
