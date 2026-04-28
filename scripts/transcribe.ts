// Run with: node --strip-types scripts/transcribe.ts
//
// Generates public/captions/<scene>.json for each scene in public/audio/.
// These JSONs are loaded by CaptionOverlay for word-highlight captions.
// Downloads Whisper.cpp (~1.5 GB) once into whisper.cpp/ and reuses it.

import path from "path";
import fs from "fs";
import {
  downloadWhisperModel,
  installWhisperCpp,
  transcribe,
  toCaptions,
} from "@remotion/install-whisper-cpp";
import { execSync } from "child_process";

const SCENE_NAMES = [
  "scene-intro",
  "scene-topic",
  "scene-hook",
  "scene-vbodmas",
  "scene-oftrap",
  "scene-unitdigit",
  "scene-philosophy",
  "scene-closing",
];

const whisperDir = path.join(process.cwd(), "whisper.cpp");
const publicDir = path.join(process.cwd(), "public");

async function main() {
  console.log("Installing Whisper.cpp...");
  await installWhisperCpp({ to: whisperDir, version: "1.5.5" });

  console.log("Downloading medium model...");
  await downloadWhisperModel({ model: "medium", folder: whisperDir });

  fs.mkdirSync(path.join(publicDir, "captions"), { recursive: true });

  for (const scene of SCENE_NAMES) {
    const mp3Path = path.join(publicDir, "audio", `${scene}.mp3`);
    const wavPath = path.join(publicDir, "audio", `${scene}.wav`);
    const captionsPath = path.join(publicDir, "captions", `${scene}.json`);

    if (!fs.existsSync(mp3Path)) {
      console.warn(`Skipping ${scene} — MP3 not found at ${mp3Path}`);
      continue;
    }

    console.log(`Converting ${scene}.mp3 to 16 kHz WAV...`);
    execSync(`npx remotion ffmpeg -i "${mp3Path}" -ar 16000 "${wavPath}" -y`);

    console.log(`Transcribing ${scene}...`);
    const whisperOutput = await transcribe({
      model: "medium",
      whisperPath: whisperDir,
      whisperCppVersion: "1.5.5",
      inputPath: wavPath,
      tokenLevelTimestamps: true,
    });

    const { captions } = toCaptions({ whisperCppOutput: whisperOutput });

    fs.writeFileSync(captionsPath, JSON.stringify(captions, null, 2));
    console.log(`✓ Saved ${captionsPath}`);
  }

  console.log("Done! All captions generated.");
}

main().catch(console.error);
