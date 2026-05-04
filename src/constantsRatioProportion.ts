export const RP_TRANSITION_DURATION = 12;

// Single master audio file covering the entire Ratio & Proportion + STD script
export const RP_MASTER_AUDIO =
  "ElevenLabs_2026-04-28T11_59_46_Chinmay – Raw & Real Training Voice_pvc_sp85_s50_sb75_se0_b_m2.mp3";

// Word counts per scene — used to distribute total audio duration proportionally
// Scenes: Intro, Ratio, DirectInverse, Parts, Combine, STD, AvgSpeed, Relative, Changing, Conclusion
export const RP_WORD_COUNTS = [180, 220, 120, 280, 160, 380, 250, 300, 360, 420] as const;

// Fallback frame counts per scene (Remotion Studio preview when audio is absent)
export const RP_FALLBACK_FRAMES = [180, 210, 120, 270, 150, 360, 240, 290, 350, 400] as const;

// Placeholder duration for Remotion Studio before audio is probed
// = BRAND_INTRO(75) + sum(FALLBACK_FRAMES) + 1×TRANSITION + BRAND_OUTRO(90)
export const RP_PLACEHOLDER_DURATION =
  75 +
  (RP_FALLBACK_FRAMES as readonly number[]).reduce((a, b) => a + b, 0) +
  RP_TRANSITION_DURATION +
  90;
