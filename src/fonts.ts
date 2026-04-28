import { loadFont as loadInter } from "@remotion/google-fonts/Inter";
import { loadFont as loadCaveat } from "@remotion/google-fonts/Caveat";
import { loadFont as loadNotoSansDevanagari } from "@remotion/google-fonts/NotoSansDevanagari";

const { fontFamily: interFamily } = loadInter("normal", {
  weights: ["400", "700"],
  subsets: ["latin"],
});

const { fontFamily: caveatFamily } = loadCaveat("normal", {
  weights: ["400", "700"],
  subsets: ["latin"],
});

const { fontFamily: devanagariFamily } = loadNotoSansDevanagari("normal", {
  weights: ["400", "700"],
  subsets: ["devanagari"],
});

export const FONTS = {
  body: interFamily,
  handwritten: caveatFamily,
  devanagari: devanagariFamily,
} as const;
