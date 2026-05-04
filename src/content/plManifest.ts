import type { VideoScriptManifest } from "./types";

// All cueFrames are relative to the scene's own start (useCurrentFrame() = 0)
// Derived from public/manual/PL-Final.txt (SRT) timestamps × 30 FPS

export const plManifest: VideoScriptManifest = {
  videoId: "ProfitLoss",
  introSubtitle: "UPSC CSAT — Profit and Loss",
  outroSubtitle: "Practice formulas with real examples daily",

  scenes: [
    // ── Scene 1: CP, SP, Profit & Loss Basics (0s → 55.9s = 1676f) ──────────
    {
      id: "pl-intro",
      label: "Profit & Loss — Basics",
      title: "CP, SP और Profit/Loss",
      accentColor: "blue",
      cueFrames: {
        sceneIn:      0,
        comparisonIn: 743,   // 0:24.787 — SP definition
        visualIn:     1014,  // 0:33.832 — "SP > CP = Profit"
        ruleBoxIn:    1400,
      },
      narration: [
        {
          id: "plintro-1",
          cue: "sceneIn",
          text: "आज हम बात करेंगे Profit और Loss की — हमारी daily life का हिस्सा।",
          visualIntent: "Topic overview with key terms",
          visual: {
            kind: "keyword-cloud",
            words: ["CP — Cost Price", "SP — Selling Price", "Profit (लाभ)", "Loss (हानि)", "Daily Life Math"],
          },
        },
        {
          id: "plintro-2",
          cue: "comparisonIn",
          text: "CP = जो price खरीदने पर चुकाते हैं। SP = जो price बेचने पर मिलती है।",
          visualIntent: "CP vs SP definition side by side",
          visual: {
            kind: "comparison",
            left: "CP\nCost Price\nखरीदने की कीमत\n(Dealer pays this)",
            right: "SP\nSelling Price\nबेचने की कीमत\n(Buyer pays this)",
          },
        },
        {
          id: "plintro-3",
          cue: "visualIn",
          text: "SP > CP तो Profit। SP < CP तो Loss। घड़ी: CP=₹500, SP=₹600 → Profit=₹100।",
          visualIntent: "Profit vs Loss with watch example",
          visual: {
            kind: "comparison",
            left: "SP > CP → PROFIT\n₹600 > ₹500\nProfit = ₹100 ✓",
            right: "SP < CP → LOSS\n₹400 < ₹500\nLoss = ₹100 ✗",
            note: "Always compare SP with CP",
          },
        },
      ],
      takeaway: "Profit/Loss = SP − CP. Base हमेशा CP होती है।",
    },

    // ── Scene 2: Profit% & Loss% Formulas (55.9s → 90.5s = 1037f) ──────────
    {
      id: "pl-pct-formula",
      label: "Profit% और Loss%",
      title: "Formula: Profit% और Loss%",
      accentColor: "yellow",
      cueFrames: {
        sceneIn:      0,
        formulaIn:    139,   // 1:00.545 — Profit% formula
        comparisonIn: 506,   // 1:12.779 — "CP से divide, SP से नहीं"
        exampleIn:    731,   // 1:20.288 — example calculation
        ruleBoxIn:    900,
      },
      narration: [
        {
          id: "plpct-1",
          cue: "sceneIn",
          text: "CSAT में सिर्फ Profit/Loss नहीं — Profit% और Loss% पूछते हैं।",
          visualIntent: "Formula intro",
          visual: {
            kind: "keyword-cloud",
            words: ["Profit%", "Loss%", "CP से Divide करो", "× 100"],
          },
        },
        {
          id: "plpct-2",
          cue: "formulaIn",
          text: "Profit% = Profit ÷ CP × 100। Loss% = Loss ÷ CP × 100।",
          visualIntent: "The two formulas shown clearly",
          visual: {
            kind: "steps",
            items: [
              "Profit%  =  Profit ÷ CP  × 100",
              "Loss%    =  Loss ÷ CP    × 100",
              "",
              "👆 दोनों में CP नीचे आता है",
            ],
          },
        },
        {
          id: "plpct-3",
          cue: "comparisonIn",
          text: "ध्यान से — CP से divide करते हैं। SP से नहीं। यह सबसे common गलती है।",
          visualIntent: "CP correct, SP wrong side by side",
          visual: {
            kind: "comparison",
            left: "÷ CP  ✓\nहमेशा यही\n(Cost Price)\nCORRECT",
            right: "÷ SP  ✗\nकभी नहीं\n(Selling Price)\nWRONG",
            note: "Exam में pressure में यही slip होती है",
          },
        },
        {
          id: "plpct-4",
          cue: "exampleIn",
          text: "Profit = ₹100, CP = ₹500। Profit% = 100÷500×100 = 20%। Simple।",
          visualIntent: "Step by step example",
          visual: {
            kind: "equation",
            parts: ["Profit = ₹100", "CP = ₹500", "Profit% = 100/500 × 100", "= 20% ✓"],
          },
        },
      ],
      takeaway: "Profit% और Loss% — हमेशा CP से divide। SP से कभी नहीं।",
    },

    // ── Scene 3: SP ↔ CP Conversion Formulas (90.5s → 159.8s = 2080f) ──────
    {
      id: "pl-sp-cp-formulas",
      label: "SP और CP Formulas",
      title: "SP निकालो / CP निकालो",
      accentColor: "green",
      cueFrames: {
        sceneIn:   0,
        exampleIn: 569,   // 1:49.448 — "CP=400, 25% profit" example
        formulaIn: 1044,  // 2:05.294 — "अब उल्टा — CP निकालो"
        summaryIn: 1469,  // 2:19.452 — "SP=600, 20%" CP example
        ruleBoxIn: 1800,
      },
      narration: [
        {
          id: "plspcp-1",
          cue: "sceneIn",
          text: "CP और Profit% दिया हो तो SP निकालें। SP = CP × (100+P%) ÷ 100।",
          visualIntent: "SP formula for profit and loss",
          visual: {
            kind: "steps",
            items: [
              "SP = CP × (100 + Profit%) ÷ 100",
              "SP = CP × (100 − Loss%)  ÷ 100",
              "",
              "100 + P% → profit wala",
              "100 − L% → loss wala",
            ],
          },
        },
        {
          id: "plspcp-2",
          cue: "exampleIn",
          text: "CP = ₹400, 25% profit चाहिए। SP = 400 × 125÷100 = ₹500।",
          visualIntent: "SP calculation step by step",
          visual: {
            kind: "equation",
            parts: ["CP = ₹400", "25% Profit", "SP = 400 × 125/100", "SP = ₹500 ✓"],
          },
        },
        {
          id: "plspcp-3",
          cue: "formulaIn",
          text: "अब उल्टा — SP दिया है, Profit% दिया है। CP कैसे निकालें?",
          visualIntent: "CP from SP formula",
          visual: {
            kind: "formula",
            lhs: "CP",
            rhs: "SP × 100 ÷ (100 + Profit%)",
            note: "Loss हो तो: SP × 100 ÷ (100 − Loss%)",
          },
        },
        {
          id: "plspcp-4",
          cue: "summaryIn",
          text: "SP = ₹600, Profit 20%। CP = 600 × 100÷120 = ₹500।",
          visualIntent: "Reverse CP calculation example",
          visual: {
            kind: "equation",
            parts: ["SP = ₹600", "20% Profit", "CP = 600 × 100/120", "CP = ₹500 ✓"],
          },
        },
      ],
      takeaway: "SP चाहिए: CP×(100±%)÷100 | CP चाहिए: SP×100÷(100±%)",
    },

    // ── Scene 4: Marked Price & Discount (159.8s → 231.9s = 2163f) ──────────
    {
      id: "pl-marked-price",
      label: "Marked Price & Discount",
      title: "MP, Discount और Tricky Question",
      accentColor: "yellow",
      cueFrames: {
        sceneIn:   0,
        exampleIn: 661,   // 3:05.437 — shirt example
        visualIn:  1187,  // 3:22.058 — CSAT tricky question
        ruleBoxIn: 1900,
      },
      narration: [
        {
          id: "plmp-1",
          cue: "sceneIn",
          text: "दुकान का price tag = Marked Price (MP)। Discount हमेशा MP पर दिया जाता है।",
          visualIntent: "MP, Discount, SP relationship",
          visual: {
            kind: "steps",
            items: [
              "MP  = Marked Price (price tag)",
              "Discount = MP पर छूट",
              "SP = MP − Discount",
              "Discount% = Discount ÷ MP × 100",
            ],
          },
        },
        {
          id: "plmp-2",
          cue: "exampleIn",
          text: "Shirt MP=₹1000, 20% discount। Discount=₹200, SP=₹800।",
          visualIntent: "Discount calculation on shirt",
          visual: {
            kind: "equation",
            parts: ["MP = ₹1000", "20% Discount = ₹200", "SP = 1000 − 200", "SP = ₹800 ✓"],
          },
        },
        {
          id: "plmp-3",
          cue: "visualIn",
          text: "CSAT trap: CP=₹800, MP=₹1000, 20% discount। Profit? Zero! CP=SP=₹800।",
          visualIntent: "The trick question where discount ≠ loss",
          visual: {
            kind: "comparison",
            left: "SP = ₹800\nCP = ₹800\nProfit = ₹0\n(Break Even!)",
            right: "❌ Discount देखकर\nलoss मत सोचो!\n✓ CP vs SP\ncompare करो",
            note: "Discount MP पर है, loss CP से measure होता है",
          },
        },
      ],
      takeaway: "Discount MP पर। Profit/Loss CP से। MP से compare मत करो।",
    },

    // ── Scene 5: Successive Discounts (231.9s → 292.3s = 1811f) ────────────
    {
      id: "pl-successive",
      label: "Successive Discounts",
      title: "20% + 10% ≠ 30%",
      accentColor: "red",
      cueFrames: {
        sceneIn:   0,
        visualIn:  291,   // 4:03.605 — "गलत, सही तरीका यह है"
        formulaIn: 1298,  // 4:35.161 — shortcut formula
        ruleBoxIn: 1500,
      },
      narration: [
        {
          id: "plsucc-1",
          cue: "sceneIn",
          text: "पहले 20% discount, फिर 10% discount। कुल 30% होगा? गलत!",
          visualIntent: "Wrong assumption vs correct result",
          visual: {
            kind: "comparison",
            left: "❌ गलत\n20% + 10%\n= 30%\n(Students की mistake)",
            right: "✓ सही\n20% + 10% − 2%\n= 28%\n(Actual result)",
            note: "Successive discounts कभी add नहीं होते",
          },
        },
        {
          id: "plsucc-2",
          cue: "visualIn",
          text: "MP=₹1000। 20% off → ₹800। फिर 10% off → ₹720। Effective = 28%।",
          visualIntent: "Step by step successive discount calculation",
          visual: {
            kind: "steps",
            items: [
              "MP = ₹1000",
              "Step 1 — 20% off:  1000 − 200 = ₹800",
              "Step 2 — 10% off:  800 − 80   = ₹720",
              "Effective = (1000−720)/1000 × 100",
              "= 280/1000 × 100 = 28% (not 30%)",
            ],
          },
        },
        {
          id: "plsucc-3",
          cue: "formulaIn",
          text: "Shortcut: a+b−ab/100 = 20+10−200/100 = 30−2 = 28%।",
          visualIntent: "The shortcut formula",
          visual: {
            kind: "formula",
            lhs: "Effective Discount%",
            rhs: "a + b − (a×b)/100",
            note: "20 + 10 − (20×10)/100 = 28%",
          },
        },
      ],
      takeaway: "Successive discounts add नहीं होते। Formula: a+b−ab/100",
    },

    // ── Scene 6: Same SP Trap (292.3s → 351.5s = 1778f) ────────────────────
    {
      id: "pl-same-sp",
      label: "Same SP — Profit & Loss",
      title: "Same SP पर हमेशा Loss",
      accentColor: "red",
      cueFrames: {
        sceneIn:   0,
        visualIn:  573,   // 5:11.358 — "यह बिल्कुल गलत है"
        formulaIn: 1050,  // 5:27.305 — loss% formula
        ruleBoxIn: 1500,
      },
      narration: [
        {
          id: "plsamesp-1",
          cue: "sceneIn",
          text: "दो items — दोनों SP=₹300। एक पर 20% profit, दूसरे पर 20% loss। Overall?",
          visualIntent: "The two items with their CPs",
          visual: {
            kind: "comparison",
            left: "Item A\nSP = ₹300\n20% Profit\nCP = ₹250\n(less invested)",
            right: "Item B\nSP = ₹300\n20% Loss\nCP = ₹375\n(more invested)",
            note: "CP अलग-अलग होता है — यही trap है",
          },
        },
        {
          id: "plsamesp-2",
          cue: "visualIn",
          text: "Cancel out नहीं होगा! Loss वाले item में ज़्यादा पैसे लगे। हमेशा loss होता है।",
          visualIntent: "Why it's always a loss",
          visual: {
            kind: "steps",
            items: [
              "Total CP = 250 + 375 = ₹625",
              "Total SP = 300 + 300 = ₹600",
              "Net Loss = 625 − 600 = ₹25",
              "Loss% = 25/625 × 100 = 4%",
              "→ Same SP, same % = ALWAYS LOSS",
            ],
          },
        },
        {
          id: "plsamesp-3",
          cue: "formulaIn",
          text: "Formula: Overall Loss% = (Common%)² ÷ 100 = 20²÷100 = 4% loss।",
          visualIntent: "The shortcut formula",
          visual: {
            kind: "formula",
            lhs: "Overall Loss%",
            rhs: "(Common%)² ÷ 100",
            note: "(20)² ÷ 100 = 400/100 = 4% Loss",
          },
        },
      ],
      takeaway: "Same SP, same % profit+loss → हमेशा Loss = (%)² ÷ 100",
    },

    // ── Scene 7: Dishonest Dealer (351.5s → 407.8s = 1687f) ─────────────────
    {
      id: "pl-dishonest",
      label: "Dishonest Dealer",
      title: "1kg की जगह 900g",
      accentColor: "yellow",
      cueFrames: {
        sceneIn:   0,
        formulaIn: 1506,  // 6:41.757 — formula
        ruleBoxIn: 1580,
      },
      narration: [
        {
          id: "pldish-1",
          cue: "sceneIn",
          text: "Dealer 1kg का price लेता है लेकिन 900g देता है। Actual Profit%?",
          visualIntent: "Step by step calculation of the cheat",
          visual: {
            kind: "steps",
            items: [
              "Price लिया: 1000g का",
              "दिया:       900g (actual)",
              "Profit (saved) = 1000 − 900 = 100g",
              "CP (actual cost) = 900g",
              "Profit% = 100/900 × 100 = 11.11%",
            ],
          },
        },
        {
          id: "pldish-2",
          cue: "formulaIn",
          text: "Formula: (True weight − False weight) ÷ False weight × 100 = 11.11%",
          visualIntent: "The formula with denominator explained",
          visual: {
            kind: "formula",
            lhs: "Profit%",
            rhs: "(True − False) ÷ False × 100",
            note: "Denominator = actual दिया गया weight (False)",
          },
        },
      ],
      takeaway: "Dishonest dealer: (True−False)÷False×100. Denominator = दिया गया weight।",
    },

    // ── Scene 8: Price Change & Consumption (407.8s → 469.1s = 1839f) ───────
    {
      id: "pl-price-change",
      label: "Price Change & Consumption",
      title: "खर्चा same रखना है?",
      accentColor: "green",
      cueFrames: {
        sceneIn:   0,
        exampleIn: 598,   // 7:07.694 — petrol 25% cheap example
        visualIn:  932,   // 7:18.815 — महंगा formula
        ruleBoxIn: 1650,
      },
      narration: [
        {
          id: "plpc-1",
          cue: "sceneIn",
          text: "Price सस्ता/महंगा हो — expense same रखने के लिए consumption adjust करो।",
          visualIntent: "Two formulas for cheap vs expensive",
          visual: {
            kind: "comparison",
            left: "Price x% सस्ता\nConsumption बढ़ाओ:\nx/(100−x) × 100",
            right: "Price x% महंगा\nConsumption घटाओ:\nx/(100+x) × 100",
            note: "सस्ता → minus | महंगा → plus",
          },
        },
        {
          id: "plpc-2",
          cue: "exampleIn",
          text: "Petrol 25% सस्ता। Consumption बढ़ाओ = 25÷75 × 100 = 33.33%।",
          visualIntent: "Cheap petrol example",
          visual: {
            kind: "equation",
            parts: ["Petrol 25% सस्ता", "Increase = 25/(100−25) × 100", "= 25/75 × 100", "= 33.33% ज़्यादा खरीदो ✓"],
          },
        },
        {
          id: "plpc-3",
          cue: "visualIn",
          text: "Petrol 25% महंगा। Consumption घटाओ = 25÷125 × 100 = 20%।",
          visualIntent: "Expensive petrol example",
          visual: {
            kind: "equation",
            parts: ["Petrol 25% महंगा", "Reduce = 25/(100+25) × 100", "= 25/125 × 100", "= 20% कम खरीदो ✓"],
          },
        },
      ],
      takeaway: "सस्ता: x/(100−x). महंगा: x/(100+x). Both × 100.",
    },

    // ── Scene 9: Multiple Items + CSAT Question (469.1s → 591s = 3657f) ─────
    {
      id: "pl-multi-items",
      label: "Multiple Items — CSAT Approach",
      title: "Total CP vs Total SP",
      accentColor: "blue",
      cueFrames: {
        sceneIn:      0,
        visualIn:     260,   // 7:52.193 — "10 items @₹50"
        comparisonIn: 1604,  // 8:42.565 — "CSAT style question"
        exampleIn:    2140,  // 9:00.419 — setting up equations
        summaryIn:    2574,  // 9:17.547 — solving for CP
        ruleBoxIn:    3200,
      },
      narration: [
        {
          id: "plmulti-1",
          cue: "sceneIn",
          text: "Multiple items में एक ही approach: Total CP निकालो, Total SP निकालो, compare करो।",
          visualIntent: "The approach keyword overview",
          visual: {
            kind: "keyword-cloud",
            words: ["Total CP", "Total SP", "Compare करो", "Profit%", "Simple Approach"],
          },
        },
        {
          id: "plmulti-2",
          cue: "visualIn",
          text: "10 items @₹50, 12 items बेचे @₹60। Total CP=₹500, SP=₹720। Profit=44%।",
          visualIntent: "Complete calculation walkthrough",
          visual: {
            kind: "steps",
            items: [
              "Total CP  = 10 × ₹50  = ₹500",
              "Total SP  = 12 × ₹60  = ₹720",
              "Profit     = 720 − 500 = ₹220",
              "Profit%   = 220/500 × 100 = 44%",
            ],
          },
        },
        {
          id: "plmulti-3",
          cue: "comparisonIn",
          text: "अब एक live CSAT style question। CP को variable मानकर equation बनाओ।",
          visualIntent: "CSAT variable problem intro",
          visual: {
            kind: "keyword-cloud",
            words: ["CSAT Variable Problem", "CP = x मानो", "Equation बनाओ", "Systematically solve"],
          },
        },
        {
          id: "plmulti-4",
          cue: "exampleIn",
          text: "20% profit। CP 20% कम हो, SP ₹10 कम → 40% profit। CP निकालो।",
          visualIntent: "Setting up the equations",
          visual: {
            kind: "steps",
            items: [
              "Original:  SP = CP × 120/100 = 1.2 CP",
              "New CP:    0.8 CP",
              "New SP:    1.2 CP − ₹10",
              "New SP:    New CP × 140/100",
              "→ 1.2CP − 10 = 0.8CP × 1.4",
            ],
          },
        },
        {
          id: "plmulti-5",
          cue: "summaryIn",
          text: "1.2CP − 10 = 1.12CP। 0.08CP = 10। CP = ₹125।",
          visualIntent: "Solving the equation",
          visual: {
            kind: "equation",
            parts: ["1.2CP − 10 = 1.12CP", "0.08CP = 10", "CP = 10/0.08", "CP = ₹125 ✓"],
          },
        },
      ],
      takeaway: "Multiple items: Total CP vs SP. Variables: CP = x रखो, equation solve करो।",
    },

    // ── Scene 10: Partnership (591s → 663.8s = 2184f) ───────────────────────
    {
      id: "pl-partnership",
      label: "Partnership & Profit Sharing",
      title: "Investment Ratio = Profit Ratio",
      accentColor: "green",
      cueFrames: {
        sceneIn:      0,
        visualIn:     468,   // 10:06.569 — profit split calculation
        comparisonIn: 1155,  // 10:29.452 — time-weighted version
        formulaIn:    1444,  // 10:39.087 — "investment × time"
        ruleBoxIn:    2000,
      },
      narration: [
        {
          id: "plpart-1",
          cue: "sceneIn",
          text: "A=₹3000, B=₹5000 invest किए। Profit ₹1600 ratio में बंटेगा।",
          visualIntent: "Investment ratio bars",
          visual: {
            kind: "ratio-bars",
            a: 3,
            b: 5,
            labelA: "A: ₹3000",
            labelB: "B: ₹5000",
          },
        },
        {
          id: "plpart-2",
          cue: "visualIn",
          text: "Ratio = 3:5। Total parts = 8। 1 part = ₹200। A=₹600, B=₹1000।",
          visualIntent: "Step by step profit division",
          visual: {
            kind: "steps",
            items: [
              "Ratio = 3000:5000 = 3:5",
              "Total parts = 3+5 = 8",
              "1 part = ₹1600 ÷ 8 = ₹200",
              "A's share = 3 × ₹200 = ₹600",
              "B's share = 5 × ₹200 = ₹1000",
            ],
          },
        },
        {
          id: "plpart-3",
          cue: "comparisonIn",
          text: "Time अलग हो तो: A=₹4000 × 6 months, B=₹6000 × 4 months।",
          visualIntent: "Time weighted investment",
          visual: {
            kind: "comparison",
            left: "A\n₹4000 × 6 months\n= 24,000\n(effective investment)",
            right: "B\n₹6000 × 4 months\n= 24,000\n(effective investment)",
            note: "Effective investment बराबर → Profit 1:1",
          },
        },
        {
          id: "plpart-4",
          cue: "formulaIn",
          text: "Effective ratio = 24000:24000 = 1:1। Profit equally बंटेगा।",
          visualIntent: "Equal split result",
          visual: {
            kind: "big-number",
            value: "1 : 1",
            sub: "Profit equally बंटेगा",
          },
        },
      ],
      takeaway: "Partnership: Investment × Time का ratio लो। Equal effective = equal profit।",
    },

    // ── Scene 11: Breakeven Point (663.8s → 720.8s = 1712f) ─────────────────
    {
      id: "pl-breakeven",
      label: "Breakeven Point",
      title: "20 Items Waste → Per Item 50%?",
      accentColor: "yellow",
      cueFrames: {
        sceneIn:   0,
        exampleIn: 608,   // 11:26.033 — required SP calculation
        visualIn:  1318,  // 11:47.701 — "50% per item"
        ruleBoxIn: 1550,
      },
      narration: [
        {
          id: "plbe-1",
          cue: "sceneIn",
          text: "100 items @₹10 = CP ₹1000। 20 items खराब। 80 items से 20% profit चाहिए।",
          visualIntent: "Problem setup",
          visual: {
            kind: "steps",
            items: [
              "Total CP = 100 × ₹10 = ₹1000",
              "Target:   20% profit → SP = ₹1200",
              "Items available: 100 − 20 = 80",
              "SP per item = ₹1200 ÷ 80 = ₹15",
            ],
          },
        },
        {
          id: "plbe-2",
          cue: "exampleIn",
          text: "Required Total SP = ₹1200। 80 items से। SP per item = ₹1200÷80 = ₹15।",
          visualIntent: "The calculation",
          visual: {
            kind: "equation",
            parts: ["Required SP = 1000 × 120/100", "= ₹1200", "SP per item = 1200 ÷ 80", "= ₹15 (50% profit per item)"],
          },
        },
        {
          id: "plbe-3",
          cue: "visualIn",
          text: "Overall 20% profit target था। Per item 50% रखना पड़ा क्योंकि 20 items waste हुए।",
          visualIntent: "The insight — overall vs per item",
          visual: {
            kind: "comparison",
            left: "Overall Target\n20% Profit\non ₹1000\n= SP ₹1200",
            right: "Per Item Needed\n50% Profit\n₹10 → ₹15\n(20 items wasted!)",
            note: "Waste हो तो per-item % बढ़ाना पड़ता है",
          },
        },
      ],
      takeaway: "Total required SP fix करो। Remaining items से उसे पूरा करो। Per-item % बढ़ेगा।",
    },

    // ── Scene 12: Summary (720.8s → 793.4s = 2176f) ─────────────────────────
    {
      id: "pl-summary",
      label: "Complete Summary",
      title: "सभी Formulas एक नज़र में",
      accentColor: "blue",
      cueFrames: {
        sceneIn:   0,
        visualIn:  600,   // 12:20.843 — "successive discounts"
        summaryIn: 1334,  // 12:45.295 — "price change"
        ruleBoxIn: 1900,
      },
      narration: [
        {
          id: "plsum-1",
          cue: "sceneIn",
          text: "Profit/Loss हमेशा CP से। SP से नहीं।",
          visualIntent: "Basic formulas recap",
          visual: {
            kind: "steps",
            items: [
              "Profit%  = Profit ÷ CP × 100",
              "Loss%    = Loss ÷ CP × 100",
              "SP       = CP × (100 ± %) ÷ 100",
              "CP       = SP × 100 ÷ (100 ± %)",
            ],
          },
        },
        {
          id: "plsum-2",
          cue: "visualIn",
          text: "Successive discounts: a+b−ab/100। Same SP trap: Loss=(%)²÷100।",
          visualIntent: "Advanced formulas recap",
          visual: {
            kind: "steps",
            items: [
              "Successive Disc%  = a+b − ab/100",
              "Same SP Trap:      Loss = (%)² ÷ 100",
              "Dishonest Dealer:  (True−False) ÷ False × 100",
              "MP, Discount:      Compare CP vs SP only",
            ],
          },
        },
        {
          id: "plsum-3",
          cue: "summaryIn",
          text: "Logic समझो। Formula automatically याद रहेगा।",
          visualIntent: "Final formulas + closing thought",
          visual: {
            kind: "steps",
            items: [
              "Price सस्ता:   x/(100−x) × 100",
              "Price महंगा:   x/(100+x) × 100",
              "Partnership:  Investment × Time ratio",
              "Multiple items: Total CP vs Total SP",
            ],
          },
        },
      ],
      takeaway: "Logic समझो, formula automatically याद रहेगा — rote learning की ज़रूरत नहीं।",
    },
  ],
};
