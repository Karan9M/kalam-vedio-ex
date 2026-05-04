import { SCENE_AUDIO_FILES } from "../constants";
import type { VideoScriptManifest } from "./types";

export const numbersManifest: VideoScriptManifest = {
  videoId: "CsatNumbers",
  introSubtitle: "UPSC CSAT — Numbers & Simplification",
  outroSubtitle: "Subscribe for complete CSAT coverage",
  scenes: [
    {
      id: "intro",
      label: "Numbers · Welcome",
      title: "नमस्ते!",
      accentColor: "yellow",
      audioFile: SCENE_AUDIO_FILES[0],
      cueFrames: { sceneIn: 0, titleIn: 0, detailIn: 30, summaryIn: 50 },
      narration: [
        { id: "intro-1", cue: "titleIn", text: "नमस्ते, आज हम CSAT numbers and simplification को smart तरीके से समझेंगे।", visualIntent: "Warm branded welcome with one dominant line." },
        { id: "intro-2", cue: "detailIn", text: "Focus calculation पर नहीं, logic और decoding पर रहेगा।", visualIntent: "Support line sets the learning promise." },
      ],
      takeaway: "This lesson is about logic-first simplification.",
    },
    {
      id: "topic",
      label: "UPSC CSAT · GS Paper 2",
      title: "Numbers & Simplification",
      accentColor: "blue",
      audioFile: SCENE_AUDIO_FILES[1],
      cueFrames: { sceneIn: 0, titleIn: 0, detailIn: 36, ruleBoxIn: 60 },
      narration: [
        { id: "topic-1", cue: "titleIn", text: "यह topic CSAT arithmetic foundation का part है।", visualIntent: "Large title lands first." },
        { id: "topic-2", cue: "detailIn", text: "यहीं से speed और accuracy दोनों build होते हैं।", visualIntent: "Secondary line reinforces importance." },
      ],
      takeaway: "Numbers is the foundation for speed in CSAT.",
    },
    {
      id: "hook",
      label: "Numbers · The Challenge",
      title: "Decode complexity",
      accentColor: "red",
      audioFile: SCENE_AUDIO_FILES[2],
      cueFrames: { sceneIn: 0, titleIn: 0, formulaIn: 12, ruleBoxIn: 48 },
      narration: [
        { id: "hook-1", cue: "formulaIn", text: "Expression complex दिखती है, लेकिन simplification का काम उसे decode करना है।", visualIntent: "Show one dense expression, then reframe the task." },
        { id: "hook-2", cue: "ruleBoxIn", text: "UPSC calculation नहीं, approach test करता है।", visualIntent: "Takeaway box reframes the mindset." },
      ],
      takeaway: "Simplification means decoding the pattern, not brute force solving.",
    },
    {
      id: "vbodmas",
      label: "Numbers · VBODMAS",
      title: "VBODMAS",
      accentColor: "blue",
      audioFile: SCENE_AUDIO_FILES[3],
      cueFrames: { sceneIn: 0, titleIn: 0, detailIn: 20, exampleIn: 60, ruleBoxIn: 150 },
      narration: [
        { id: "vbodmas-1", cue: "detailIn", text: "Rule order याद रखना enough नहीं है, उसका implication समझना जरूरी है।", visualIntent: "Letters reveal one by one." },
        { id: "vbodmas-2", cue: "exampleIn", text: "सबसे critical point है कि Of, division से पहले solve होता है।", visualIntent: "Highlight O in the sequence." },
      ],
      takeaway: "Of solves before division, and that changes many answers.",
    },
    {
      id: "of-trap",
      label: "Numbers · The 'Of' Trap",
      title: "1/2 of 18 ÷ 3",
      accentColor: "yellow",
      audioFile: SCENE_AUDIO_FILES[4],
      cueFrames: { sceneIn: 0, titleIn: 0, comparisonIn: 18, ruleBoxIn: 72 },
      narration: [
        { id: "oftrap-1", cue: "comparisonIn", text: "अगर आप division पहले करोगे, तो reasoning टूट जाएगी।", visualIntent: "Wrong and correct columns appear in sequence." },
        { id: "oftrap-2", cue: "ruleBoxIn", text: "Of हमेशा division से पहले solve होगा।", visualIntent: "Rule box lands after comparison." },
      ],
      takeaway: "Order of operations must be shown visually as a contrast.",
    },
    {
      id: "unit-digit",
      label: "Numbers · Unit Digit Method",
      title: "7⁹⁵ − 3⁵⁸",
      accentColor: "green",
      audioFile: SCENE_AUDIO_FILES[5],
      cueFrames: { sceneIn: 0, titleIn: 0, visualIn: 20, detailIn: 48, ruleBoxIn: 84 },
      narration: [
        { id: "unit-1", cue: "visualIn", text: "Whole power solve करने की जरूरत नहीं, सिर्फ cyclicity देखनी है।", visualIntent: "Cycle cards appear around the concept of periodicity." },
        { id: "unit-2", cue: "detailIn", text: "95 mod 4 निकालते ही answer का direction clear हो जाता है।", visualIntent: "Single calculation line explains the shortcut." },
      ],
      takeaway: "Unit digit questions are about cycles, not raw powers.",
    },
    {
      id: "philosophy",
      label: "CSAT · The Philosophy",
      title: "Logic × Speed = Mastery",
      accentColor: "blue",
      audioFile: SCENE_AUDIO_FILES[6],
      cueFrames: { sceneIn: 0, titleIn: 10, detailIn: 36, ruleBoxIn: 64 },
      narration: [
        { id: "phil-1", cue: "titleIn", text: "CSAT में mastery तब बनती है जब logic और speed साथ आते हैं।", visualIntent: "Equation-style layout reinforces the thought." },
      ],
      takeaway: "CSAT rewards pattern recognition under time pressure.",
    },
    {
      id: "closing",
      label: "Numbers · Start Solving",
      title: "चलिए शुरू करते हैं!",
      accentColor: "yellow",
      audioFile: SCENE_AUDIO_FILES[7],
      cueFrames: { sceneIn: 0, titleIn: 0, summaryIn: 24 },
      narration: [
        { id: "closing-1", cue: "titleIn", text: "अब concepts clear हैं, तो questions solve करना शुरू करते हैं।", visualIntent: "Large closing line with confident pacing." },
      ],
      takeaway: "Close with energy, not clutter.",
    },
  ],
};
