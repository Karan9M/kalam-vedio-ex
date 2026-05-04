export const PL_MASTER_AUDIO = "PL-Final.mp3";
export const PL_TRANSITION_DURATION = 12;

// Exact scene-start seconds from public/manual/PL-Final.txt (SRT transcript)
export const PL_SCENE_START_SECONDS = [
  0.031,    // Scene 1:  CP/SP basics
  55.904,   // Scene 2:  Profit% / Loss% formula
  90.464,   // Scene 3:  SP ↔ CP conversion formulas
  159.787,  // Scene 4:  Marked Price & Discount
  231.893,  // Scene 5:  Successive Discounts
  292.272,  // Scene 6:  Same-SP Trap
  351.547,  // Scene 7:  Dishonest Dealer
  407.765,  // Scene 8:  Price Change & Consumption
  469.072,  // Scene 9:  Multiple Items + CSAT Variable Problem
  590.960,  // Scene 10: Partnership & Profit Sharing
  663.758,  // Scene 11: Breakeven Point
  720.830,  // Scene 12: Summary
] as const;

// Audio ends at 13:13.363 = 793.363s (last SRT line)
export const PL_AUDIO_END_SECONDS = 793.363;

// Raw fallback frames (no transition added) — derived from scene durations × FPS
export const PL_FALLBACK_FRAMES = [
  1676,  // 55.9s
  1037,  // 34.6s
  2080,  // 69.3s
  2163,  // 72.1s
  1811,  // 60.4s
  1778,  // 59.3s
  1687,  // 56.2s
  1839,  // 61.3s
  3657,  // 121.9s (long — covers multiple items + CSAT question)
  2184,  // 72.8s
  1712,  // 57.1s
  2176,  // 72.5s
] as const;

const rawSum = (PL_FALLBACK_FRAMES as readonly number[]).reduce((a, b) => a + b, 0);
export const PL_PLACEHOLDER_DURATION =
  75 + rawSum + PL_TRANSITION_DURATION + 90;
