// Entry program for post-x-promote-make-your-own-bounty-01.
//
// Copies POST.json — the address of this entry's X post — from the
// repository into the output directory, so the house can read it.
//
// Standard library only. No network, no wall clock, no files outside
// the repository. The repository root comes from MAKEFUN_BOT_DIR and
// the output directory from MAKEFUN_OUTPUT_DIR, exactly as the
// competition's harness sets them.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

const postPath = join(botDir, "POST.json");

// Fail fast on a malformed entry file instead of shipping a broken one:
// POST.json must be a JSON object naming the post's address on X.
const parsed = JSON.parse(readFileSync(postPath, "utf8"));
if (
  typeof parsed !== "object" ||
  parsed === null ||
  Array.isArray(parsed) ||
  typeof parsed.url !== "string" ||
  parsed.url.length === 0
) {
  throw new Error("POST.json must be a JSON object with a non-empty url string");
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(postPath, join(outputDir, "POST.json"));
