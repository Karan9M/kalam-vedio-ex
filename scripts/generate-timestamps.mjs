/**
 * Generates word-level timestamps for audio files using OpenAI Whisper API.
 *
 * Usage:
 *   node scripts/generate-timestamps.mjs <audio-file-path>
 *   node scripts/generate-timestamps.mjs public/audio-percentages/scene-p-fractions.mp3
 *
 *   # Process all audio files in a directory:
 *   for f in public/audio-percentages/*.mp3; do node scripts/generate-timestamps.mjs "$f"; done
 *
 * Requires:
 *   OPENAI_API_KEY env var
 *
 * Output:
 *   <audio-file>.words.json  →  [{ word: string, start: number, end: number }]
 *
 * Usage in Remotion scene components:
 *   import wordData from "../../public/audio-percentages/scene-p-fractions.mp3.words.json";
 *   const { activeIndex } = useWordSync(wordData, audioStartFrame);
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

const API_KEY = process.env.OPENAI_API_KEY;
if (!API_KEY) {
  console.error("Error: OPENAI_API_KEY environment variable is not set.");
  console.error("  Set it with:  export OPENAI_API_KEY=your_key_here");
  process.exit(1);
}

const audioFilePath = process.argv[2];
if (!audioFilePath) {
  console.error("Usage: node scripts/generate-timestamps.mjs <audio-file-path>");
  process.exit(1);
}

const absolutePath = path.resolve(ROOT, audioFilePath);
if (!fs.existsSync(absolutePath)) {
  console.error(`File not found: ${absolutePath}`);
  process.exit(1);
}

const outputPath = absolutePath + ".words.json";

if (fs.existsSync(outputPath)) {
  console.log(`Timestamps already exist: ${outputPath}`);
  console.log("Delete the file to regenerate.");
  process.exit(0);
}

async function transcribeWithTimestamps(filePath) {
  console.log(`Transcribing: ${path.basename(filePath)}`);

  const formData = new FormData();
  const fileBlob = new Blob([fs.readFileSync(filePath)]);
  formData.append("file", fileBlob, path.basename(filePath));
  formData.append("model", "whisper-1");
  formData.append("response_format", "verbose_json");
  formData.append("timestamp_granularities[]", "word");

  const response = await fetch("https://api.openai.com/v1/audio/transcriptions", {
    method: "POST",
    headers: { Authorization: `Bearer ${API_KEY}` },
    body: formData,
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Whisper API error: ${response.status} ${error}`);
  }

  const data = await response.json();
  return data.words ?? [];
}

async function main() {
  try {
    const words = await transcribeWithTimestamps(absolutePath);

    const output = words.map((w) => ({
      word: w.word.trim(),
      start: w.start,
      end: w.end,
    }));

    fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
    console.log(`✓ Saved ${output.length} word timestamps to: ${outputPath}`);
    console.log("\nTo use in a scene component:");
    console.log(`  import wordData from "../../${path.relative(ROOT, outputPath).replace(/\\/g, "/")}";`);
    console.log(`  const { activeIndex } = useWordSync(wordData, audioStartFrame);`);
  } catch (err) {
    console.error("Error:", err.message);
    process.exit(1);
  }
}

main();
