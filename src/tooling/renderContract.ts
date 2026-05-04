import { z } from "zod";

export const AccentColorSchema = z.enum(["blue", "green", "yellow", "red"]);
export const SceneKindSchema = z.enum([
  "title",
  "concept",
  "formula",
  "comparison",
  "process",
  "conclusion",
]);
export const CueNameSchema = z.enum([
  "sceneIn",
  "titleIn",
  "detailIn",
  "formulaIn",
  "exampleIn",
  "comparisonIn",
  "visualIn",
  "ruleBoxIn",
  "summaryIn",
]);

export const ThemeTokensSchema = z.object({
  background: z.string(),
  textPrimary: z.string(),
  textSecondary: z.string(),
  accentPrimary: z.string(),
  accentSecondary: z.string(),
  accentDanger: z.string(),
  fontFamily: z.string(),
});

export const BrandingAssetsSchema = z.object({
  brandName: z.string().min(1),
  logoPath: z.string().min(1),
  introSubtitle: z.string().min(1),
  outroSubtitle: z.string().min(1),
});

export const ScriptSegmentSchema = z.object({
  id: z.string().min(1),
  cue: CueNameSchema,
  text: z.string().min(1),
  visualIntent: z.string().min(1),
});

export const CueFramesSchema = z
  .object({
    sceneIn: z.number().int().nonnegative().optional(),
    titleIn: z.number().int().nonnegative().optional(),
    detailIn: z.number().int().nonnegative().optional(),
    formulaIn: z.number().int().nonnegative().optional(),
    exampleIn: z.number().int().nonnegative().optional(),
    comparisonIn: z.number().int().nonnegative().optional(),
    visualIn: z.number().int().nonnegative().optional(),
    ruleBoxIn: z.number().int().nonnegative().optional(),
    summaryIn: z.number().int().nonnegative().optional(),
  })
  .default({});

export const ComparisonCardSchema = z.object({
  title: z.string().min(1),
  lines: z.array(z.string().min(1)).min(1),
  color: AccentColorSchema.default("blue"),
});

export const ExplainerSceneSchema = z.object({
  id: z.string().min(1),
  kind: SceneKindSchema,
  label: z.string().min(1),
  title: z.string().min(1),
  accentColor: AccentColorSchema.default("blue"),
  audioFile: z.string().optional(),
  narration: z.array(ScriptSegmentSchema).min(1),
  takeaway: z.string().min(1).optional(),
  subheading: z.string().optional(),
  formula: z.string().optional(),
  leftCard: ComparisonCardSchema.optional(),
  rightCard: ComparisonCardSchema.optional(),
  steps: z.array(z.object({
    key: z.string().min(1),
    text: z.string().min(1),
    color: AccentColorSchema.optional(),
  })).optional(),
  cueFrames: CueFramesSchema,
});

export const ExplainerVideoRequestSchema = z.object({
  templateId: z.string().min(1),
  topic: z.string().min(1),
  compositionId: z.string().min(1),
  masterAudioFile: z.string().min(1),
  branding: BrandingAssetsSchema,
  theme: ThemeTokensSchema,
  scenes: z.array(ExplainerSceneSchema).min(1),
  outputFileName: z.string().min(1).default("explainer-video"),
});

export type ThemeTokens = z.infer<typeof ThemeTokensSchema>;
export type BrandingAssets = z.infer<typeof BrandingAssetsSchema>;
export type ScriptSegment = z.infer<typeof ScriptSegmentSchema>;
export type ExplainerScene = z.infer<typeof ExplainerSceneSchema>;
export type ExplainerVideoRequest = z.infer<typeof ExplainerVideoRequestSchema>;

export const validateExplainerRequest = (input: unknown): ExplainerVideoRequest => {
  return ExplainerVideoRequestSchema.parse(input);
};
