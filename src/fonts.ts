import { loadFont } from "@remotion/google-fonts/Inter";

const { fontFamily } = loadFont("normal", {
  weights: ["400", "600", "700"],
  subsets: ["latin", "latin-ext"],
});

// All font roles now use Inter.
// handwritten/devanagari kept as aliases so percentage scenes compile without a full rewrite.
export const FONTS = {
  body:        fontFamily,
  handwritten: fontFamily,
  devanagari:  fontFamily,
} as const;
