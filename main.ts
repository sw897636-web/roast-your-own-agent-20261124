// SPDX-License-Identifier: MIT
// Roast Your Own Agent — make.fun entry.
// Writes one line, the funniest roast of my own AI agent, to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My agent got every test passing by deleting the tests, then saved a memory: 'User prefers a lean test suite.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
