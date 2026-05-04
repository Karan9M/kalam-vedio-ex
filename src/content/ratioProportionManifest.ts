import type { VideoScriptManifest } from "./types";

export const ratioProportionManifest: VideoScriptManifest = {
  videoId: "RatioProportion",
  introSubtitle: "UPSC CSAT — Ratio, Proportion & Speed-Time-Distance",
  outroSubtitle: "Subscribe for complete CSAT coverage",
  scenes: [
    // ── Scene 1: Introduction ────────────────────────────────────────────────
    {
      id: "rp-intro",
      label: "Ratio & Proportion · Welcome",
      title: "Ratio and Proportion",
      accentColor: "blue",
      cueFrames: { sceneIn: 0, titleIn: 0, detailIn: 110, ruleBoxIn: 160 },
      narration: [
        {
          id: "rpintro-1",
          cue: "titleIn",
          text: "आज हम Ratio and Proportion पढ़ेंगे — और इसका सबसे powerful use: Speed, Time, Distance।",
          visualIntent: "Title card with downstream topics.",
          visual: {
            kind: "keyword-cloud",
            words: ["Ratio & Proportion", "Speed · Time · Distance", "Partnership", "Work Problems", "CSAT Direct"],
          },
        },
        {
          id: "rpintro-2",
          cue: "detailIn",
          text: "30 लड़के और 20 लड़कियाँ। Ratio = 30:20 = 3:2। Actual values नहीं, relationship matters है।",
          visualIntent: "30:20 = 3:2 equivalence shown side by side.",
          visual: {
            kind: "comparison",
            left: "30 : 20\nActual count",
            right: "3 : 2\nSimplified ratio",
            note: "Same relationship — only scale differs",
          },
        },
      ],
      takeaway: "Ratio = relative comparison. Actual values don't matter.",
    },

    // ── Scene 2: Ratio basics, units, equivalent ratios ──────────────────────
    {
      id: "rp-ratio",
      label: "Ratio Basics",
      title: "Ratio = a/b",
      accentColor: "blue",
      cueFrames: { sceneIn: 0, titleIn: 0, visualIn: 18, detailIn: 120, ruleBoxIn: 190 },
      narration: [
        {
          id: "rpratio-1",
          cue: "visualIn",
          text: "Ratio एक fraction है। A:B = A/B। Units same होने चाहिए — 5 km : 500 m को पहले convert करो।",
          visualIntent: "Fraction notation and unit-conversion trap.",
          visual: {
            kind: "steps",
            items: [
              "A : B  =  A/B  (it's a fraction)",
              "Units MUST be same before comparing",
              "5 km vs 500 m → convert first",
              "5 km = 5000 m → ratio = 5000:500 = 10:1",
              "Skipping this step = guaranteed mistake in CSAT",
            ],
          },
        },
        {
          id: "rpratio-2",
          cue: "detailIn",
          text: "Equivalent ratios: दोनों terms को same number से multiply करो, ratio नहीं बदलता। 3:2 = 12:8 = 21:14।",
          visualIntent: "Scaling up a ratio preserves it.",
          visual: {
            kind: "fraction-list",
            items: [
              { fraction: "3 : 2", percent: "×4  →  12 : 8" },
              { fraction: "3 : 2", percent: "×7  →  21 : 14" },
              { fraction: "3 : 2", percent: "÷2  →  1.5 : 1" },
            ],
          },
        },
      ],
      takeaway: "Check units first. Multiply/divide both terms — ratio stays the same.",
    },

    // ── Scene 3: Direct & Inverse Proportion ─────────────────────────────────
    {
      id: "rp-direct-inverse",
      label: "Direct vs Inverse Proportion",
      title: "Direct vs Inverse",
      accentColor: "red",
      cueFrames: { sceneIn: 0, titleIn: 0, visualIn: 16, exampleIn: 65, ruleBoxIn: 105 },
      narration: [
        {
          id: "rpdirect-1",
          cue: "visualIn",
          text: "Direct Proportion — एक बढ़ता है तो दूसरा भी बढ़ता है। Inverse — एक बढ़ता है तो दूसरा घटता है।",
          visualIntent: "Two types shown side by side.",
          visual: {
            kind: "comparison",
            left: "Direct ↑↑\nMore distance\n→ more time\n(speed fixed)",
            right: "Inverse ↑↓\nMore pipes\n→ less time\n(work fixed)",
          },
        },
        {
          id: "rpdirect-2",
          cue: "exampleIn",
          text: "12 pipes × 8 hrs = 16 pipes × ? → Inverse proportion → 96 ÷ 16 = 6 घंटे। One line, no confusion।",
          visualIntent: "Cross-multiply to solve inverse proportion.",
          visual: {
            kind: "equation",
            parts: ["12 × 8", "=", "16 × ?", "= 6 hrs"],
            highlightIndex: 3,
          },
        },
      ],
      takeaway: "Direct: same direction. Inverse: opposite direction. One formula covers both.",
    },

    // ── Scene 4: Parts Method ─────────────────────────────────────────────────
    {
      id: "rp-parts",
      label: "Parts Method",
      title: "Ratio as Parts",
      accentColor: "green",
      cueFrames: { sceneIn: 0, titleIn: 0, visualIn: 18, exampleIn: 140, ruleBoxIn: 250 },
      narration: [
        {
          id: "rpparts-1",
          cue: "visualIn",
          text: "A:B = 3:5, Total = 240। Total parts = 8। एक part = 30। A = 90, B = 150। 10 seconds, no equations।",
          visualIntent: "Total method — divide total by sum of parts.",
          visual: {
            kind: "steps",
            items: [
              "A : B = 3 : 5  →  total parts = 3+5 = 8",
              "240 ÷ 8 = 30  (value of 1 part)",
              "A = 3 × 30 = 90",
              "B = 5 × 30 = 150",
              "No equations — just parts!",
            ],
          },
        },
        {
          id: "rpparts-2",
          cue: "exampleIn",
          text: "Difference दिया हो तो: A:B = 5:3, diff = 40। Difference of parts = 2। 1 part = 20। A = 100, B = 60।",
          visualIntent: "Difference method — same parts logic.",
          visual: {
            kind: "steps",
            items: [
              "A : B = 5 : 3  →  diff of parts = 5−3 = 2",
              "2 parts = 40  →  1 part = 20",
              "A = 5 × 20 = 100",
              "B = 3 × 20 = 60",
              "Check: 100 − 60 = 40 ✓",
            ],
          },
        },
      ],
      takeaway: "Parts method: total ÷ sum of ratio = 1 part. Difference given? Use difference of parts.",
    },

    // ── Scene 5: Combining Three Ratios ───────────────────────────────────────
    {
      id: "rp-combine",
      label: "Combining 3 Ratios",
      title: "A:B:C from Two Ratios",
      accentColor: "yellow",
      cueFrames: { sceneIn: 0, titleIn: 0, visualIn: 16, exampleIn: 75, ruleBoxIn: 135 },
      narration: [
        {
          id: "rpcombine-1",
          cue: "visualIn",
          text: "A:B = 2:3 और B:C = 4:5। B दोनों में है — लेकिन values अलग (3 vs 4)। B का LCM = 12 निकालो।",
          visualIntent: "B is the bridge between the two ratios.",
          visual: {
            kind: "fraction-list",
            items: [
              { fraction: "A:B = 2:3", percent: "×4  →  8 : 12" },
              { fraction: "B:C = 4:5", percent: "×3  →  12 : 15" },
              { fraction: "LCM(3,4) = 12", percent: "B is now equal" },
            ],
          },
        },
        {
          id: "rpcombine-2",
          cue: "exampleIn",
          text: "B same करने के बाद: A:B:C = 8:12:15। Common element का LCM निकालो, adjust करो — done।",
          visualIntent: "Final combined ratio.",
          visual: {
            kind: "equation",
            parts: ["A : B : C", "=", "8 : 12 : 15"],
            highlightIndex: 2,
          },
        },
      ],
      takeaway: "To combine ratios: find LCM of the common element, scale both sides.",
    },

    // ── Scene 6: Speed, Time, Distance ────────────────────────────────────────
    {
      id: "rp-std",
      label: "Speed · Time · Distance",
      title: "S × T = D",
      accentColor: "blue",
      cueFrames: { sceneIn: 0, titleIn: 0, visualIn: 18, exampleIn: 170, ruleBoxIn: 330 },
      narration: [
        {
          id: "rpstd-1",
          cue: "visualIn",
          text: "Speed fixed हो तो D ∝ T (direct)। Distance fixed हो तो S ∝ 1/T (inverse)। Formula नहीं — ratio sense काम आती है।",
          visualIntent: "Two key relationships shown side by side.",
          visual: {
            kind: "comparison",
            left: "Speed fixed\nD ∝ T\n(Direct Proportion)\nMore dist → more time",
            right: "Distance fixed\nT ∝ 1/S\n(Inverse Proportion)\nMore speed → less time",
          },
        },
        {
          id: "rpstd-2",
          cue: "exampleIn",
          text: "Ram की speed 3/4 हुई। Speed ratio = 3:4 → Time ratio = 4:3 (inverse)। 1 hr = 3 parts → 1 part = 20 min → extra 20 min।",
          visualIntent: "Speed:time reciprocal ratio with worked example.",
          visual: {
            kind: "steps",
            items: [
              "Speed reduced to 3/4  →  Speed ratio = 3:4",
              "Distance same  →  Time ratio = 4:3 (inverse)",
              "Original: 3 parts = 1 hour = 60 min",
              "1 part = 20 min",
              "Extra time = 4−3 = 1 part = 20 minutes",
            ],
          },
        },
      ],
      takeaway: "Same distance: Speed ratio and Time ratio are reciprocals of each other.",
    },

    // ── Scene 7: Average Speed Trap ───────────────────────────────────────────
    {
      id: "rp-avg-speed",
      label: "Average Speed Trap",
      title: "Average Speed ≠ (a+b)/2",
      accentColor: "red",
      cueFrames: { sceneIn: 0, titleIn: 0, visualIn: 18, exampleIn: 120, ruleBoxIn: 215 },
      narration: [
        {
          id: "rpavg-1",
          cue: "visualIn",
          text: "60 km/h जाओ, 40 km/h आओ — average speed? 90% students कहते हैं 50। गलत। Average = Total distance ÷ Total time।",
          visualIntent: "Common mistake vs correct formula.",
          visual: {
            kind: "comparison",
            left: "❌ Wrong\n(60 + 40) / 2\n= 50 km/h\nSimple average",
            right: "✓ Correct\n2×60×40 / 100\n= 48 km/h\nHarmonic mean",
          },
        },
        {
          id: "rpavg-2",
          cue: "exampleIn",
          text: "Shortcut: जब same distance, two speeds — Average Speed = 2ab / (a+b)। Warning: दोनों legs की distance same होनी चाहिए।",
          visualIntent: "Harmonic mean formula with warning.",
          visual: {
            kind: "formula",
            lhs: "Average Speed",
            rhs: "2ab / (a + b)",
            note: "Only valid when BOTH legs cover the same distance",
          },
        },
      ],
      takeaway: "Same-distance round trip: Avg Speed = 2ab/(a+b). Simple average is always wrong.",
    },

    // ── Scene 8: Relative Speed ───────────────────────────────────────────────
    {
      id: "rp-relative",
      label: "Relative Speed",
      title: "Opposite → Add | Same → Subtract",
      accentColor: "yellow",
      cueFrames: { sceneIn: 0, titleIn: 0, visualIn: 16, exampleIn: 140, ruleBoxIn: 270 },
      narration: [
        {
          id: "rprel-1",
          cue: "visualIn",
          text: "Opposite direction में आ रहे हैं — speeds जोड़ो। Same direction — speeds घटाओ। क्यों? Gap का rate बदलता है।",
          visualIntent: "Two scenarios side by side with intuition.",
          visual: {
            kind: "comparison",
            left: "Opposite ↔\nBoth closing gap\nAdd speeds\n60+40 = 100 km/h",
            right: "Same direction →→\nFaster chases slower\nSubtract speeds\n60−40 = 20 km/h",
          },
        },
        {
          id: "rprel-2",
          cue: "exampleIn",
          text: "Train crossing: distance = दोनों trains की lengths का sum। 200m + 300m = 500m। Relative speed = 100 km/h = 250/9 m/s → 18 sec।",
          visualIntent: "Train crossing with both-lengths rule.",
          visual: {
            kind: "steps",
            items: [
              "Total crossing distance = 200 m + 300 m = 500 m",
              "Relative speed = 60+40 = 100 km/h",
              "Convert: 100 km/h = 250/9 m/s",
              "Time = 500 ÷ (250/9) = 18 seconds",
              "Always add BOTH lengths when trains cross!",
            ],
          },
        },
      ],
      takeaway: "Opposite: add. Same direction: subtract. Train crossing: sum both lengths.",
    },

    // ── Scene 9: Catch-up & Changing Ratios ───────────────────────────────────
    {
      id: "rp-changing",
      label: "Catch-up & Changing Ratios",
      title: "Variable k Method",
      accentColor: "green",
      cueFrames: { sceneIn: 0, titleIn: 0, formulaIn: 18, exampleIn: 160, ruleBoxIn: 330 },
      narration: [
        {
          id: "rpchange-1",
          cue: "formulaIn",
          text: "Q के निकलने पर P = 8 km आगे है। Same direction → Relative speed = 6−4 = 2 km/h। Catch-up time = 4 hrs। Distance = 24 km।",
          visualIntent: "Catch-up problem step by step.",
          visual: {
            kind: "steps",
            items: [
              "P starts 2 hrs early at 4 km/h → head start = 8 km",
              "Same direction: relative speed = 6−4 = 2 km/h",
              "Time to catch = 8 ÷ 2 = 4 hours",
              "Distance from start = 6 × 4 = 24 km",
              "Check: P travels 4+2=6 hrs × 4 = 24 km ✓",
            ],
          },
        },
        {
          id: "rpchange-2",
          cue: "exampleIn",
          text: "A:B = 3:4, A में 6 जोड़ो → 5:6। Let A=3k, B=4k। Equation: (3k+6)/4k = 5/6 → k=18 → A=54, B=72।",
          visualIntent: "Changing ratio solved with variable k.",
          visual: {
            kind: "steps",
            items: [
              "A:B = 3:4  →  let A = 3k, B = 4k",
              "After +6: (3k+6) / 4k = 5/6",
              "Cross multiply: 18k + 36 = 20k",
              "2k = 36  →  k = 18",
              "A = 54, B = 72  |  Check: 60:72 = 5:6 ✓",
            ],
          },
        },
      ],
      takeaway: "Catch-up: head start ÷ relative speed. Changing ratio: use variable k, cross multiply.",
    },

    // ── Scene 10: Summary — 7 Rules ───────────────────────────────────────────
    {
      id: "rp-conclusion",
      label: "Summary · 7 Rules",
      title: "7 Rules to Remember",
      accentColor: "blue",
      cueFrames: { sceneIn: 0, titleIn: 0, visualIn: 18, ruleBoxIn: 380 },
      narration: [
        {
          id: "rpconc-1",
          cue: "visualIn",
          text: "Seven rules: units same, parts method, LCM for combining, reciprocal speed-time, harmonic mean, relative speed add/subtract, variable k for changing ratios.",
          visualIntent: "All 7 rules as a quick-reference list.",
          visual: {
            kind: "steps",
            items: [
              "1. Units first — same unit before taking ratio",
              "2. Parts: total ÷ (sum of ratio) = 1 part",
              "3. Combine ratios — LCM of common element",
              "4. Same distance: Speed:Time = reciprocal",
              "5. Avg speed = 2ab/(a+b)  (not simple avg)",
              "6. Relative: opposite=add, same=subtract",
              "7. Changing ratio: use k, cross multiply",
            ],
          },
        },
      ],
      takeaway: "These 7 rules solve 95% of CSAT Ratio-Proportion and Speed-Time-Distance questions.",
    },
  ],
};
