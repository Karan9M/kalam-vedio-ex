// One file controls the look of every scene.
// Change here → all videos update consistently.

export const D = {
  // Background
  bg: "#0F1419",

  // Text hierarchy
  textPrimary:   "#FFFFFF",
  textSecondary: "rgba(255,255,255,0.55)",
  textLabel:     "rgba(255,255,255,0.30)",

  // Accent colors — use sparingly, one per screen
  blue:   "#58C4DD",
  green:  "#83C167",
  yellow: "#FFC857",
  red:    "#FC6255",

  // Typography — Inter only
  font: "Inter, sans-serif",

  // Type scale
  sz: {
    label:    28,
    heading: 120,
    sub:      52,
    body:     44,
    rule:     40,
    card:     48,
  },

  // Layout
  pad:    120,
  gap:     32,
  cardR:   16,

  // Accent bar at top of every scene
  accentHeight: 4,
} as const;
