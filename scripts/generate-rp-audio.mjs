/**
 * Generates Ratio & Proportion audio files using ElevenLabs TTS.
 *
 * Usage:
 *   node scripts/generate-rp-audio.mjs
 *
 * Requires:
 *   ELEVENLABS_API_KEY env var (or set it below)
 *
 * Output:
 *   public/audio-ratio/scene-rp-{id}.mp3  (one per scene)
 *
 * After running, update src/constantsRatioProportion.ts with the file paths.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

const API_KEY = process.env.ELEVENLABS_API_KEY;
if (!API_KEY) {
  console.error("Error: ELEVENLABS_API_KEY environment variable is not set.");
  console.error("  Set it with:  export ELEVENLABS_API_KEY=your_key_here");
  process.exit(1);
}

// Voice ID — change to your preferred ElevenLabs voice
// Default: "Rachel" (a clear, neutral voice good for education)
const VOICE_ID = process.env.ELEVENLABS_VOICE_ID ?? "21m00Tcm4TlvDq8ikWAM";

const MODEL_ID = "eleven_multilingual_v2";

// Scene scripts — Hindi/English bilingual narration text per scene
const SCENE_SCRIPTS = [
  {
    id: "rp-intro",
    file: "scene-rp-intro.mp3",
    text: `नमस्ते! आज हम UPSC CSAT के एक बहुत important topic पर बात करेंगे — Ratio and Proportion। यह topic directly exam में आता है, और कई और topics जैसे Partnership, Mixture, और Age problems में भी इसकी foundation काम आती है। तो ध्यान से सुनिए।`,
  },
  {
    id: "rp-ratio",
    file: "scene-rp-ratio.mp3",
    text: `सबसे पहले समझते हैं — Ratio होता क्या है। Ratio का मतलब है दो quantities का comparison, जो same unit में हों। मान लीजिए एक class में 30 लड़के हैं और 20 लड़कियाँ। तो ratio हुआ 3 is to 2। यहाँ एक बात याद रखें — ratio में order matter करता है। 3 is to 2 और 2 is to 3 दोनों अलग-अलग हैं।`,
  },
  {
    id: "rp-fraction",
    file: "scene-rp-fraction.mp3",
    text: `अब बात करते हैं equivalent ratios की। अगर किसी ratio के दोनों terms को same number से multiply या divide करें, तो ratio नहीं बदलता। जैसे 3 is to 2 को 2 से multiply करें तो 6 is to 4 — same ratio। CSAT में ratios compare करने के लिए दोनों को decimal में convert करो।`,
  },
  {
    id: "rp-proportion",
    file: "scene-rp-proportion.mp3",
    text: `अब आते हैं Proportion पर। Proportion का मतलब है दो ratios का equal होना। अगर a is to b, c is to d के equal है — तो हम कहते हैं ये proportion में हैं। इसकी सबसे important property है — cross multiplication। मतलब a into d equals b into c। इसे product of extremes equals product of means भी कहते हैं।`,
  },
  {
    id: "rp-cross",
    file: "scene-rp-cross.mp3",
    text: `अब direct और inverse proportion — यह दोनों concepts practically important हैं। Direct Proportion में जब एक quantity बढ़ती है, दूसरी भी उसी अनुपात में बढ़ती है। जैसे 5 kg सेब 200 रुपये के हैं, तो 8 kg के लिए answer होगा 320 रुपये। Inverse Proportion में एक बढ़ती है तो दूसरी घटती है। 6 workers 12 दिन में करते हैं, 9 workers 8 दिन में करेंगे।`,
  },
  {
    id: "rp-variation",
    file: "scene-rp-variation.mp3",
    text: `अब Partnership problems की बात करते हैं — जो ratio का ही application है। अगर A ने 3000 रुपये और B ने 5000 रुपये invest किए, तो profit ratio होगा 3 is to 5। जब time अलग-अलग हो — A ने 3000 रुपये 12 महीने और B ने 5000 रुपये 8 महीने — तब profit ratio होगा 3000 into 12 is to 5000 into 8 — यानि 9 is to 10।`,
  },
  {
    id: "rp-formulas",
    file: "scene-rp-formulas.mp3",
    text: `एक और important application है — Age problems। अगर आज A और B की उम्र का ratio 3 is to 4 है, और 5 साल बाद ratio 4 is to 5 होगा — तो ages को 3x और 4x मान लो, equation बनाओ, cross multiply करो, solve करो — answer आ जाएगा। CSAT में ratio questions rarely straightforward होते हैं — usually real-life situation में wrapped होते हैं।`,
  },
  {
    id: "rp-conclusion",
    file: "scene-rp-conclusion.mp3",
    text: `Summary में तीन चीज़ें याद रखो — पहला, ratio में order और unit दोनों matter करते हैं। दूसरा, proportion में cross multiplication सबसे powerful tool है। तीसरा, direct और inverse को situation देखकर identify करो, guess मत करो। Ratio and Proportion थोड़ी practice से बहुत fast हो जाता है।`,
  },
];

const OUTPUT_DIR = path.join(ROOT, "public", "audio-ratio");
fs.mkdirSync(OUTPUT_DIR, { recursive: true });

async function generateAudio(scene) {
  const outputPath = path.join(OUTPUT_DIR, scene.file);

  if (fs.existsSync(outputPath)) {
    console.log(`  Skipping ${scene.file} (already exists)`);
    return;
  }

  console.log(`  Generating ${scene.file}...`);

  const response = await fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
    {
      method: "POST",
      headers: {
        "xi-api-key": API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: scene.text,
        model_id: MODEL_ID,
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75,
          style: 0.3,
          use_speaker_boost: true,
        },
      }),
    }
  );

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`ElevenLabs API error for ${scene.id}: ${response.status} ${error}`);
  }

  const buffer = await response.arrayBuffer();
  fs.writeFileSync(outputPath, Buffer.from(buffer));
  console.log(`  ✓ Saved ${scene.file}`);
}

async function main() {
  console.log(`Generating ${SCENE_SCRIPTS.length} audio files into public/audio-ratio/\n`);

  for (const scene of SCENE_SCRIPTS) {
    try {
      await generateAudio(scene);
    } catch (err) {
      console.error(`  ✗ Failed ${scene.id}:`, err.message);
    }
  }

  console.log("\nDone! Update src/constantsRatioProportion.ts with:");
  console.log("  export const RP_AUDIO_FILES = [");
  SCENE_SCRIPTS.forEach((s) => console.log(`    "audio-ratio/${s.file}",`));
  console.log("  ];");
}

main();
