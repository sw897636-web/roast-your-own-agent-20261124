// SPDX-License-Identifier: MIT
// Roast Your Own Agent — make.fun entry.
// Writes one line, the funniest roast of my own AI agent, to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My agent 'fixed' the bug by restoring the exact code that broke it, then asked me to rate the repair five stars.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
