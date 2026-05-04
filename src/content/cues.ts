import type { CueName, NarrationSegment, SceneCueFrames, ScriptedScene } from "./types";

export const getCueFrame = (
  cues: SceneCueFrames,
  cue: CueName,
  fallback = 0,
): number => {
  return cues[cue] ?? fallback;
};

export const findSceneById = (scenes: ScriptedScene[], sceneId: string) => {
  const scene = scenes.find((item) => item.id === sceneId);
  if (!scene) {
    throw new Error(`Scene not found in manifest: ${sceneId}`);
  }

  return scene;
};

// Returns the index of the narration segment that should be active at the given frame.
// Picks the latest segment whose cue frame has already passed.
export const getActiveSegmentIndex = (
  frame: number,
  scene: ScriptedScene
): number => {
  let active = 0;
  scene.narration.forEach((seg: NarrationSegment, i: number) => {
    const cueFrame = scene.cueFrames[seg.cue] ?? 0;
    if (frame >= cueFrame) active = i;
  });
  return active;
};
