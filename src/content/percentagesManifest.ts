import { PERCENTAGE_SCENE_AUDIO_FILES } from "../constantsPercentages";
import { D } from "../design";
import type { VideoScriptManifest } from "./types";

export const percentagesManifest: VideoScriptManifest = {
  videoId: "CsatPercentagesAverages",
  introSubtitle: "UPSC CSAT — Percentages & Averages",
  outroSubtitle: "Subscribe for complete CSAT coverage",
  scenes: [
    {
      id: "p-intro",
      label: "Percentages · Welcome",
      title: "नमस्ते!",
      accentColor: "yellow",
      audioFile: PERCENTAGE_SCENE_AUDIO_FILES[0],
      cueFrames: { sceneIn: 0, titleIn: 0, detailIn: 28, summaryIn: 48 },
      narration: [
        {
          id: "pintro-1",
          cue: "titleIn",
          text: "आज हम percentages और averages को exam-oriented तरीके से समझेंगे।",
          visualIntent: "Opening line welcomes and frames the lesson.",
          visual: {
            kind: "keyword-cloud",
            words: ["Percentages", "Averages", "UPSC CSAT", "Exam Ready"],
          },
        },
        {
          id: "pintro-2",
          cue: "detailIn",
          text: "Goal है shortcuts नहीं, बल्कि clear mental models।",
          visualIntent: "Sub-line promises conceptual clarity.",
          visual: {
            kind: "steps",
            items: ["Clear mental models", "Exam-speed calculation", "No rote shortcuts"],
          },
        },
      ],
      takeaway: "Set expectation: conceptual understanding with exam speed.",
    },
    {
      id: "p-title",
      label: "CSAT · Percentages & Averages",
      title: "Percentages + Averages",
      accentColor: "blue",
      audioFile: PERCENTAGE_SCENE_AUDIO_FILES[1],
      cueFrames: { sceneIn: 0, titleIn: 0, ruleBoxIn: 28 },
      narration: [
        {
          id: "ptitle-1",
          cue: "titleIn",
          text: "ये दोनों topics arithmetic core बनाते हैं।",
          visualIntent: "Topic title lands cleanly.",
          visual: {
            kind: "big-number",
            value: "25–30%",
            sub: "of CSAT Arithmetic questions",
          },
        },
      ],
      takeaway: "Arithmetic core for CSAT problem solving.",
    },
    {
      id: "p-fractions",
      label: "Percentages · Think in Fractions",
      title: "Percentage = Per Hundred",
      accentColor: "yellow",
      audioFile: PERCENTAGE_SCENE_AUDIO_FILES[2],
      cueFrames: { sceneIn: 0, titleIn: 0, detailIn: 14, exampleIn: 28, ruleBoxIn: 62 },
      narration: [
        {
          id: "pfractions-1",
          cue: "detailIn",
          text: "Percentage को fraction में convert करोगे, तो calculation instantly आसान हो जाएगी।",
          visualIntent: "List of high-frequency conversions appears one by one.",
          visual: {
            kind: "fraction-list",
            items: [
              { fraction: "1/10", percent: "10%" },
              { fraction: "1/8", percent: "12.5%" },
              { fraction: "1/4", percent: "25%" },
              { fraction: "1/3", percent: "33.33%" },
              { fraction: "1/5", percent: "20%" },
            ],
          },
        },
        {
          id: "pfractions-2",
          cue: "ruleBoxIn",
          text: "10 percent, 12 point 5 percent, 33 point 33 percent — इन्हें fraction की तरह सोचो।",
          visualIntent: "Takeaway reinforces spoken-friendly phrasing.",
          visual: {
            kind: "fraction-list",
            items: [
              { fraction: "1/10", percent: "10%" },
              { fraction: "1/8", percent: "12.5%" },
              { fraction: "1/4", percent: "25%" },
              { fraction: "1/3", percent: "33.33%" },
              { fraction: "1/5", percent: "20%" },
            ],
          },
        },
      ],
      takeaway: "Think in fractions before numbers get messy.",
    },
    {
      id: "p-successive-change",
      label: "Percentages · Successive Change",
      title: "+10% then -10% ≠ 0%",
      accentColor: "red",
      audioFile: PERCENTAGE_SCENE_AUDIO_FILES[3],
      cueFrames: { sceneIn: 0, titleIn: 0, formulaIn: 18, exampleIn: 34, ruleBoxIn: 48 },
      narration: [
        {
          id: "psucc-1",
          cue: "formulaIn",
          text: "Successive percentage change में base हर बार बदलता है।",
          visualIntent: "Formula line appears after main statement.",
          visual: {
            kind: "formula",
            lhs: "Net change",
            rhs: "a + b + (a×b)/100",
            note: "a and b are the two % changes",
          },
        },
        {
          id: "psucc-2",
          cue: "exampleIn",
          text: "इसलिए plus 10 percent और minus 10 percent का net effect minus 1 percent होता है।",
          visualIntent: "Worked example lands after formula.",
          visual: {
            kind: "equation",
            parts: ["+10%", "then", "−10%", "=", "−1%"],
            highlightIndex: 4,
          },
        },
      ],
      takeaway: "Equal increase and decrease do not cancel out.",
    },
    {
      id: "p-average-basics",
      label: "Averages · Balance Point",
      title: "Averages = Balance Point",
      accentColor: "blue",
      audioFile: PERCENTAGE_SCENE_AUDIO_FILES[4],
      cueFrames: { sceneIn: 0, titleIn: 0, detailIn: 20, visualIn: 34, ruleBoxIn: 56 },
      narration: [
        {
          id: "pavg-1",
          cue: "detailIn",
          text: "Average सिर्फ formula नहीं, एक balance point है।",
          visualIntent: "Definition line lands before chart animation.",
          visual: {
            kind: "formula",
            lhs: "Average",
            rhs: "Sum ÷ Count",
            note: "Every value pulls the balance toward itself",
          },
        },
        {
          id: "pavg-2",
          cue: "visualIn",
          text: "Values ऊपर-नीचे हों, average उन्हें center पर balance करता है।",
          visualIntent: "Bar visual converges toward a central guide.",
          visual: {
            kind: "bar-chart",
            bars: [
              { label: "A", value: 200, color: D.red },
              { label: "B", value: 280, color: D.yellow },
              { label: "C", value: 360, color: D.green },
            ],
            average: 280,
          },
        },
      ],
      takeaway: "Average is a balancing idea, not just division.",
    },
    {
      id: "p-logical-balancing",
      label: "Averages · Logical Balancing",
      title: "Class avg = 50, new student = 60",
      accentColor: "yellow",
      audioFile: PERCENTAGE_SCENE_AUDIO_FILES[5],
      cueFrames: { sceneIn: 0, titleIn: 0, detailIn: 18, exampleIn: 34, ruleBoxIn: 48 },
      narration: [
        {
          id: "plogical-1",
          cue: "detailIn",
          text: "अगर नया student average से 10 ज्यादा है, तो वही extra पूरी class में distribute होगा।",
          visualIntent: "Problem statement then balancing expression.",
          visual: {
            kind: "steps",
            items: [
              "Class average = 50, n students",
              "New student scores 60 (+10 from avg)",
              "Extra 10 spreads across n+1 students",
              "New avg = 50 + 10/(n+1)",
            ],
          },
        },
      ],
      takeaway: "Think in deviations instead of recomputing totals.",
    },
    {
      id: "p-speed-tricks",
      label: "Averages · Speed Trick",
      title: "Average Speed Trick",
      accentColor: "green",
      audioFile: PERCENTAGE_SCENE_AUDIO_FILES[6],
      cueFrames: { sceneIn: 0, titleIn: 0, formulaIn: 18, ruleBoxIn: 36 },
      narration: [
        {
          id: "pspeed-1",
          cue: "formulaIn",
          text: "Equal distance cases में average speed simple mean नहीं होता, harmonic form होता है।",
          visualIntent: "Formula highlighted as hero element.",
          visual: {
            kind: "formula",
            lhs: "Avg Speed",
            rhs: "2xy / (x + y)",
            note: "x and y are speeds for equal distances",
          },
        },
      ],
      takeaway: "Use 2xy / (x+y) for equal-distance travel.",
    },
    {
      id: "p-base-value",
      label: "Percentages · Base Value",
      title: "Base Value Matters",
      accentColor: "red",
      audioFile: PERCENTAGE_SCENE_AUDIO_FILES[7],
      cueFrames: { sceneIn: 0, titleIn: 0, detailIn: 18, exampleIn: 34, ruleBoxIn: 50 },
      narration: [
        {
          id: "pbase-1",
          cue: "detailIn",
          text: "A, B से 25 percent अधिक हो सकता है, लेकिन B, A से 25 percent कम नहीं होगा।",
          visualIntent: "Contrast statement appears in two lines.",
          visual: {
            kind: "comparison",
            left: "A = 125\n(B is base = 100)\nA is 25% more than B",
            right: "B = 80\n(A is base = 100)\nB is 20% less than A",
            note: "Base changes → percentage changes",
          },
        },
        {
          id: "pbase-2",
          cue: "exampleIn",
          text: "अगर B 100 है, तो A 125 होगा, इसलिए B, A से 20 percent कम है।",
          visualIntent: "Concrete numeric proof grounds the idea.",
          visual: {
            kind: "equation",
            parts: ["B = 100", "→", "A = 125", "→", "B/A = 80%"],
            highlightIndex: 4,
          },
        },
      ],
      takeaway: "Always identify the reference base before solving.",
    },
    {
      id: "p-conclusion",
      label: "Percentages · Mindset",
      title: "Smart observer bano",
      accentColor: "blue",
      audioFile: PERCENTAGE_SCENE_AUDIO_FILES[8],
      cueFrames: { sceneIn: 0, titleIn: 0, summaryIn: 24 },
      narration: [
        {
          id: "pconc-1",
          cue: "titleIn",
          text: "Formula machine नहीं, smart observer बनो।",
          visualIntent: "Big closing statement with one support line.",
          visual: {
            kind: "keyword-cloud",
            words: ["Pattern Recognition", "Base Awareness", "Fraction Thinking", "Speed + Logic"],
          },
        },
      ],
      takeaway: "Pattern recognition is the real speed multiplier.",
    },
  ],
};
