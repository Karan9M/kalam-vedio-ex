import type { VideoScriptManifest } from "./types";

// cueFrames are computed from transcript timestamps (public/manual/advait_tts_audio.txt)
// All frame values are relative to the scene's own start (useCurrentFrame() = 0 at scene start)

export const addSubManifest: VideoScriptManifest = {
  videoId: "AddSub",
  introSubtitle: "UPSC CSAT — Addition and Subtraction",
  outroSubtitle: "Practice mental math daily",
  scenes: [
    // ── Scene 1: Intro + Definitions (0s → 36.059s = 1082 frames) ───────────
    {
      id: "as-intro",
      label: "Addition & Subtraction",
      title: "जोड़ और घटाव",
      accentColor: "blue",
      cueFrames: {
        titleIn: 0,
        // detailIn = 4.925s × 30 = 148 — "जोड़ का मतलब है 2 या 2 से ज़्यादा..."
        detailIn: 148,
        // formulaIn = 28.837s × 30 = 865 — "CSAT में इन दोनों का यूज हर जगह..."
        formulaIn: 865,
        ruleBoxIn: 1020,
      },
      narration: [
        {
          id: "asintro-1",
          cue: "titleIn",
          text: "नमस्ते! आज हम बात करेंगे Addition और Subtraction की — मतलब जोड़ और घटाव।",
          visualIntent: "Topic intro with overview keywords.",
          visual: {
            kind: "keyword-cloud",
            words: ["जोड़ (Addition)", "घटाव (Subtraction)", "CSAT Foundation", "Mental Math"],
          },
        },
        {
          id: "asintro-2",
          cue: "detailIn",
          text: "जोड़ = दो numbers मिलाना। 3 + 4 = 7 सेब। घटाव = बड़ी quantity से हटाना। 10 − 4 = 6 रुपये।",
          visualIntent: "Side-by-side definition with real example for each.",
          visual: {
            kind: "comparison",
            left: "Addition  +\n3 + 4 = 7 🍎\nदो quantities\nको मिलाना",
            right: "Subtraction  −\n10 − 4 = 6 ₹\nBadi quantity\nमें से हटाना",
          },
        },
        {
          id: "asintro-3",
          cue: "formulaIn",
          text: "CSAT में इन दोनों का use हर जगह होता है — Percentage में, Ratio में, और Data Interpretation में भी।",
          visualIntent: "CSAT application areas shown as keyword cloud.",
          visual: {
            kind: "keyword-cloud",
            words: ["Percentage", "Ratio & Proportion", "Data Interpretation", "हर Topic में"],
          },
        },
      ],
      takeaway: "Addition + Subtraction = Foundation of every CSAT topic.",
    },

    // ── Scene 2: Addition Rounding Trick (36.059s → 51.027s = 449 frames) ──
    {
      id: "as-add-trick",
      label: "Addition Trick",
      title: "Round → Calculate → Adjust",
      accentColor: "green",
      cueFrames: {
        titleIn: 0,
        visualIn: 18,
        ruleBoxIn: 400,
      },
      narration: [
        {
          id: "asadd-1",
          cue: "visualIn",
          text: "बड़े numbers जोड़ने हों तो पहले Round करो। 198 + 303 → 200 + 300 = 500, फिर −2 + 3 = 501।",
          visualIntent: "Step-by-step breakdown of the rounding technique.",
          visual: {
            kind: "steps",
            items: [
              "Problem: 198 + 303 = ?",
              "Step 1 — Round:  200 + 300 = 500",
              "Step 2 — Adjust: −2 (198→200) + 3 (303→300)",
              "Step 3 — Answer: 500 + 1 = 501 ✓",
              "Done in under 5 seconds!",
            ],
          },
        },
      ],
      takeaway: "Round → add → adjust. No pen needed.",
    },

    // ── Scene 3: Subtraction Trick + Conclusion (51.027s → 75.634s = 738 frames) ──
    {
      id: "as-sub-trick",
      label: "Subtraction Trick",
      title: "Same Trick — Subtraction",
      accentColor: "red",
      cueFrames: {
        titleIn: 0,
        visualIn: 18,
        // exampleIn = (70.906 − 51.027) × 30 = 19.879 × 30 = 596 frames
        // "Speed और Accuracy दोनों के लिए..."
        exampleIn: 596,
        ruleBoxIn: 690,
      },
      narration: [
        {
          id: "assub-1",
          cue: "visualIn",
          text: "यही approach घटाव में भी। 502 − 198: Round to 502 − 200 = 302, फिर +2 वापस जोड़ो = 304।",
          visualIntent: "Same rounding technique applied to subtraction.",
          visual: {
            kind: "steps",
            items: [
              "Problem: 502 − 198 = ?",
              "Step 1 — Round:  502 − 200 = 302",
              "Step 2 — Adjust: +2 (we subtracted 2 extra)",
              "Step 3 — Answer: 302 + 2 = 304 ✓",
            ],
          },
        },
        {
          id: "assub-2",
          cue: "exampleIn",
          text: "Speed और Accuracy दोनों के लिए यह mental math की habit बनाना ज़रूरी है।",
          visualIntent: "Closing message on building the habit.",
          visual: {
            kind: "formula",
            lhs: "Speed  +  Accuracy",
            rhs: "Mental Math Habit",
            note: "Practice this daily — it pays off in CSAT",
          },
        },
      ],
      takeaway: "Same trick works for subtraction. Round, then adjust back.",
    },
  ],
};
