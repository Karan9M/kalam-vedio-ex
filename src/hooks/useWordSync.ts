import { useCurrentFrame } from "remotion";

export type WordEntry = { word: string; start: number; end: number };

type Result = {
  activeIndex: number;
  words: WordEntry[];
};

export const useWordSync = (
  words: WordEntry[],
  audioStartFrame: number,
  fps = 30
): Result => {
  const frame = useCurrentFrame();
  const seconds = (frame - audioStartFrame) / fps;

  if (!words || words.length === 0) return { activeIndex: -1, words: [] };

  let activeIndex = -1;
  for (let i = 0; i < words.length; i++) {
    if (words[i].start <= seconds) activeIndex = i;
    else break;
  }

  return { activeIndex, words };
};
