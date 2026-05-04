import { D } from "../design";
import type { ExplainerScene, ExplainerVideoRequest } from "./renderContract";

const splitSections = (scriptText: string) => {
  return scriptText
    .split(/\n\s*\n+/)
    .map((part) => part.trim())
    .filter(Boolean);
};

const inferSceneKind = (index: number, total: number, content: string): ExplainerScene["kind"] => {
  if (index === 0) return "title";
  if (index === total - 1) return "conclusion";
  if (/=|\+|−|-|\d+%|\//.test(content)) return "formula";
  return "concept";
};

const sentenceTakeaway = (body: string) => {
  const sentences = body
    .split(/(?<=[.!?।])\s+/)
    .map((value) => value.trim())
    .filter(Boolean);
  return sentences[sentences.length - 1] ?? body;
};

export const buildScenesFromScript = (scriptText: string): ExplainerScene[] => {
  const sections = splitSections(scriptText);

  return sections.map((section, index) => {
    const lines = section.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
    const title = lines[0] ?? `Scene ${index + 1}`;
    const body = lines.slice(1).join(" ") || title;
    const kind = inferSceneKind(index, sections.length, section);
    const accentCycle: ExplainerScene["accentColor"][] = ["blue", "yellow", "green", "red"];
    const accentColor = accentCycle[index % accentCycle.length];

    return {
      id: `scene-${index + 1}`,
      kind,
      label: `Lesson · ${index + 1}`,
      title,
      accentColor,
      narration: [
        {
          id: `scene-${index + 1}-narration`,
          cue: kind === "formula" ? "formulaIn" : "titleIn",
          text: body,
          visualIntent: `Explain ${title} with one clear visual beat.`,
        },
      ],
      takeaway: sentenceTakeaway(body),
      subheading: kind !== "title" && kind !== "conclusion" ? body : undefined,
      formula: kind === "formula" ? title : undefined,
      cueFrames: { titleIn: 0, detailIn: 18, ruleBoxIn: 40 },
    };
  });
};

export const buildThemeFromPreset = (preset: string): ExplainerVideoRequest["theme"] => {
  switch (preset) {
    case "warm":
      return {
        background: D.bg,
        textPrimary: D.textPrimary,
        textSecondary: D.textSecondary,
        accentPrimary: D.yellow,
        accentSecondary: D.red,
        accentDanger: D.red,
        fontFamily: D.font,
      };
    case "green":
      return {
        background: D.bg,
        textPrimary: D.textPrimary,
        textSecondary: D.textSecondary,
        accentPrimary: D.green,
        accentSecondary: D.blue,
        accentDanger: D.red,
        fontFamily: D.font,
      };
    default:
      return {
        background: D.bg,
        textPrimary: D.textPrimary,
        textSecondary: D.textSecondary,
        accentPrimary: D.blue,
        accentSecondary: D.yellow,
        accentDanger: D.red,
        fontFamily: D.font,
      };
  }
};

export const buildExplainerRequest = (params: {
  topic: string;
  templateId: string;
  compositionId: string;
  outputFileName: string;
  brandName: string;
  introSubtitle: string;
  outroSubtitle: string;
  logoPath: string;
  masterAudioFile: string;
  scriptText: string;
  themePreset: string;
}): ExplainerVideoRequest => {
  return {
    templateId: params.templateId,
    compositionId: params.compositionId,
    topic: params.topic,
    outputFileName: params.outputFileName,
    masterAudioFile: params.masterAudioFile,
    branding: {
      brandName: params.brandName,
      logoPath: params.logoPath,
      introSubtitle: params.introSubtitle,
      outroSubtitle: params.outroSubtitle,
    },
    theme: buildThemeFromPreset(params.themePreset),
    scenes: buildScenesFromScript(params.scriptText),
  };
};
