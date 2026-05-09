/**
 * Generates Urdu voiceover MP3s for each scene using ElevenLabs.
 *
 * Usage:
 *   ELEVENLABS_API_KEY=your_key node --strip-types generate-voiceover.ts
 *
 * Optional env vars:
 *   ELEVENLABS_VOICE_ID  — override the default voice (default: Adam, which
 *                          supports eleven_multilingual_v2 and Urdu)
 *
 * After running, re-open Remotion Studio — calculateMetadata will pick up the
 * audio files and adjust scene durations automatically.
 */

import { writeFileSync, mkdirSync } from "fs";
import { SCENES } from "./src/voiceover-config.js";

// Adam voice supports eleven_multilingual_v2 and handles Urdu well.
// Browse voices at https://elevenlabs.io/voice-library and swap in any voice ID.
const VOICE_ID = process.env.ELEVENLABS_VOICE_ID ?? "pNInz6obpgDQGcFmaJgB";
const OUT_DIR = "public/voiceover";

async function main() {
  const API_KEY = process.env.ELEVENLABS_API_KEY;
  if (!API_KEY) {
    throw new Error("ELEVENLABS_API_KEY is not set");
  }

  mkdirSync(OUT_DIR, { recursive: true });

  for (const scene of SCENES) {
    process.stdout.write(`Generating ${scene.id}…  `);

    const res = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
      {
        method: "POST",
        headers: {
          "xi-api-key": API_KEY,
          "Content-Type": "application/json",
          Accept: "audio/mpeg",
        },
        body: JSON.stringify({
          text: scene.urduText,
          model_id: "eleven_multilingual_v2",
          voice_settings: {
            stability: 0.55,
            similarity_boost: 0.80,
            style: 0.40,
            use_speaker_boost: true,
          },
        }),
      }
    );

    if (!res.ok) {
      const body = await res.text();
      throw new Error(`ElevenLabs error ${res.status}: ${body}`);
    }

    const mp3 = Buffer.from(await res.arrayBuffer());
    const outPath = `${OUT_DIR}/${scene.id}.mp3`;
    writeFileSync(outPath, mp3);
    console.log(`✓  ${outPath}`);
  }

  console.log("\nAll voiceovers generated. Open Remotion Studio to preview.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
