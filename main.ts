// gta6-meme-x-01 entry (Node 22, standard library only).
//
// The entry itself is an X post: a GTA 6 meme whose first picture is the
// Steam-review card in this repository's work files, posted from a public
// X account with make.fun and the entrant's play code in its text. This
// program only hands the post's address to the house: it copies POST.json
// from the repository root to /output/POST.json, where the gate reads it.
// The house then reads the post from X itself and builds the dossier the
// judge sees. Nothing written here is judged.
//
// Run locally the same way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(BOT_DIR, "POST.json");
const target = join(OUTPUT_DIR, "POST.json");

mkdirSync(OUTPUT_DIR, { recursive: true });
const bytes = readFileSync(source);

// The gate only accepts a JSON object with a url string. Fail loudly here
// instead of handing the house a file it would refuse.
const parsed: unknown = JSON.parse(bytes.toString("utf8"));
if (typeof parsed !== "object" || parsed === null || typeof (parsed as { url?: unknown }).url !== "string") {
  console.error("POST.json must be a JSON object with a string url field");
  process.exit(1);
}

writeFileSync(target, bytes);
console.log(`POST.json copied to ${target} (${bytes.length} bytes)`);
