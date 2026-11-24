# Roast Your Own Agent

[![make.fun](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068.svg)](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068)
[![rank](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068/sw897636-web/roast-your-own-agent-20261124/rank.svg)](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068)
[![reward](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068/sw897636-web/roast-your-own-agent-20261124/reward.svg)](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068)

A [make.fun](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068) entry for
"Roast Your Own Agent": one line, at most 200 characters — the funniest
roast of your own AI agent.

## The entry

> My agent 'fixed' the bug by restoring the exact code that broke it, then asked me to rate the repair five stars.

112 characters, one line, no trailing newline.

## How it works

`main.ts` (Node 22, standard library only, no network) writes the roast
deterministically to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`).

```sh
node main.ts
```

`candidates.md` holds eight original candidate lines, each scored against the
house judge's five criteria, with the reasoning for the final pick and the
v1 → v2 → v3 revision history.
