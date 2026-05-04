import { D } from "../design";
import type { ExplainerVideoRequest } from "./renderContract";

export const defaultExplainerRequest: ExplainerVideoRequest = {
  templateId: "generic-explainer",
  compositionId: "GenericExplainerTemplate",
  topic: "CSAT Demo Explainer",
  masterAudioFile: "audio1.mp3",
  outputFileName: "generic-explainer-demo",
  branding: {
    brandName: "SuperKalam",
    logoPath: "brand/logo.jpg",
    introSubtitle: "UPSC CSAT — Generic Explainer Demo",
    outroSubtitle: "Downloadable video output after render",
  },
  theme: {
    background: D.bg,
    textPrimary: D.textPrimary,
    textSecondary: D.textSecondary,
    accentPrimary: D.blue,
    accentSecondary: D.yellow,
    accentDanger: D.red,
    fontFamily: D.font,
  },
  scenes: [
    {
      id: "demo-title",
      kind: "title",
      label: "Demo · Title",
      title: "Generic Explainer Template",
      accentColor: "blue",
      narration: [
        {
          id: "demo-title-1",
          cue: "titleIn",
          text: "This is the reusable explainer template foundation.",
          visualIntent: "Large title first.",
        },
      ],
      takeaway: "Templates should be driven by structured props, not hardcoded copy.",
      cueFrames: { titleIn: 0, ruleBoxIn: 28 },
    },
    {
      id: "demo-formula",
      kind: "formula",
      label: "Demo · Formula",
      title: "Formula Scene",
      accentColor: "green",
      formula: "Avg Speed = 2xy / (x + y)",
      subheading: "A generic formula layout can be reused across topics.",
      narration: [
        {
          id: "demo-formula-1",
          cue: "formulaIn",
          text: "Formula scenes need clear pacing and one takeaway.",
          visualIntent: "Formula appears as hero element.",
        },
      ],
      takeaway: "Reusable formula scenes reduce per-video custom work.",
      cueFrames: { titleIn: 0, formulaIn: 18, ruleBoxIn: 36 },
    },
  ],
};
