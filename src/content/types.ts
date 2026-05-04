export type CueName =
  | "sceneIn"
  | "titleIn"
  | "detailIn"
  | "formulaIn"
  | "exampleIn"
  | "comparisonIn"
  | "visualIn"
  | "ruleBoxIn"
  | "summaryIn";

export type SceneCueFrames = Partial<Record<CueName, number>>;

export type VisualSpec =
  | { kind: "equation"; parts: string[]; highlightIndex?: number }
  | { kind: "fraction-list"; items: Array<{ fraction: string; percent: string; decimal?: string }> }
  | { kind: "ratio-bars"; a: number; b: number; labelA?: string; labelB?: string }
  | { kind: "bar-chart"; bars: Array<{ label: string; value: number; color?: string }>; average?: number }
  | { kind: "formula"; lhs: string; rhs: string; note?: string }
  | { kind: "comparison"; left: string; right: string; note?: string }
  | { kind: "steps"; items: string[] }
  | { kind: "big-number"; value: string; sub?: string }
  | { kind: "keyword-cloud"; words: string[] };

export type NarrationSegment = {
  id: string;
  cue: CueName;
  text: string;
  visualIntent: string;
  visual?: VisualSpec;
};

export type ScriptedScene = {
  id: string;
  label: string;
  title: string;
  accentColor: "blue" | "green" | "yellow" | "red";
  audioFile?: string;
  cueFrames: SceneCueFrames;
  narration: NarrationSegment[];
  takeaway: string;
};

export type VideoScriptManifest = {
  videoId: string;
  introSubtitle: string;
  outroSubtitle: string;
  scenes: ScriptedScene[];
};
