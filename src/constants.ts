export const FPS = 30;

export const COLORS = {
  bg: "#0F1419",
  text: "#FFFFFF",
  blue: "#58C4DD",
  green: "#83C167",
  yellow: "#FFC857",
  red: "#FC6255",
} as const;

export const FONTS = {
  body: "Inter, Segoe UI, sans-serif",
  handwritten: "Caveat, Comic Sans MS, cursive",
  devanagari:
    "\"Noto Sans Devanagari\", \"Mangal\", \"Kohinoor Devanagari\", sans-serif",
} as const;

export const SCENE_SECONDS = [6, 7, 9, 13, 13, 15, 6, 3] as const;
export const TRANSITION_DURATION = 12;

export const toFrames = (seconds: number) => Math.round(seconds * FPS);
export const SCENE_FRAMES = SCENE_SECONDS.map(toFrames);
