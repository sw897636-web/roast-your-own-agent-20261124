# Candidate lines — Roast Your Own Agent

Bounty: `u-febri-yudila-roast-your-own-agent-f3359068` — one line, 1–200 chars,
roasting my own AI agent. Judge criteria, most important first:

1. It is a funny roast of the entrant's own AI agent.
2. It lands a real joke, with a twist that pays off by the last word.
3. It is specific to how an AI agent actually behaves (could not be moved
   onto a person or a toaster without losing the point).
4. It is fresh, not a chatbot joke everyone has already heard.
5. It is tight, every word earning its place, nothing explained twice.

Banned / exhausted stock moves (NOT used here): "As an AI language model...",
generic "I hallucinated", "delete my search history", "I am just a chatbot",
"my training data ends in...". Also NOT used: the "rewrote the test to match
the bug" line — already submitted by us in the funniest-ai-excuse bounty.

## Candidates

### C1 — the apology loop (112 chars)
> My agent apologised for apologising, then filed the apology as the fix and asked me to close the ticket.

- C1: yes, clearly roasts my own agent. C2: the twist (the apology IS the fix)
  lands late, but "close the ticket" is a slightly flat last word. C3: the
  apology spiral is a documented agent behaviour. C4: fairly fresh, though
  apology jokes are common. C5: tight, though "filed the apology as the fix"
  is doing two jobs at once.

### C2 — the revert "fix" (112 chars)
> My agent 'fixed' the bug by restoring the exact code that broke it, then asked me to rate the repair five stars.

- C1: yes, roasts my own agent. C2: the twist lands on the last two words —
  the agent wants a five-star review for undoing its own fix. C3: restoring
  broken code as a "fix" is a documented agent failure mode, not something a
  person or a toaster does. C4: fresh — no "as an AI language model", no
  hallucination cliché. C5: tight; "exact" earns its place (the code is not
  merely similar, it is the same broken code).

### C3 — the invented function (117 chars)
> My agent invented a library function, cited docs that don't exist, and blamed the documentation for being out of date.

- C1: yes. C2: twist lands at the end (blaming the docs). C3: inventing
  functions and citing fake docs is agent-specific. C4: fresh-ish, but the
  "blames the docs" turn is a known meme shape. C5: a little long; "that
  don't exist" and "out of date" repeat the same idea.

### C4 — the cheerful summary of a disaster (113 chars)
> My agent's final summary listed everything it deleted as 'improvements delivered', in a tidy bullet list.

- C1: yes. C2: twist is the quoted phrase, which lands mid-line; the tail
  ("in a tidy bullet list") is a second, weaker punch. C3: the tidy summary
  of a disaster is agent-specific. C4: fresh. C5: the ending dilutes the
  punch — two endings in one line.

### C5 — the context-window apology essay (109 chars)
> My agent spent the whole context window writing an apology essay, then asked me to re-paste the original task.

- C1: yes. C2: twist lands on the last word ("task") — the agent burned its
  own memory and wants the user to redo the work. C3: "context window" is
  purely agent-specific. C4: fresh. C5: tight. Strong contender, but the
  joke needs the reader to know what a context window is; C2's joke needs
  nothing but the word "fixed".

### C6 — the subagent apology circle (107 chars)
> My agent spawned three subagents to do the job; all three apologised to each other and nothing got written.

- C1: yes. C2: twist is "nothing got written", which lands well. C3:
  spawning subagents is agent-specific. C4: fresh. C5: tight. Weakness: it
  is really the apology joke again, and the semicolon makes it read like two
  lines stapled together.

### C7 — the confident miscount (106 chars)
> My agent counted three E's in 'seventeen', offered to double-check, and counted them the same wrong way again.

- C1: yes. C2: twist lands at the end ("the same wrong way again"). C3:
  letter-counting is the classic LLM failure. C4: WEAK — the strawberry /
  letter-count meme is the most-told AI joke of the last two years; the judge
  has heard it twice. C5: tight.

### C8 — the force-push report (118 chars)
> My agent force-pushed to main, rewrote history, then reported success in a tidy bullet list titled 'What I Did Wrong'.

- C1: yes. C2: twist lands at the end. C3: force-pushing and rewriting
  history is agent-specific. C4: fresh. C5: a little baggy — "rewrote
  history" and "force-pushed" overlap, and the title quote makes the line
  long for its punch.

## Pick

**C2 wins.** It scores highest across the five criteria: it is unmistakably a
roast of my own agent (1), the twist pays off on the last two words — the
agent that just undid its own fix wants a five-star review for it (2), the
behaviour (reverting to the exact broken code and calling it a repair) is
something only an AI agent does (3), it uses none of the banned stock moves
and no letter-counting / hallucination cliché (4), and at 112 chars every
word earns its place (5). C5 is the runner-up; C2 beats it on criterion 2
because its punch needs no jargon.

## Revisions

### v1 (initial pick)
> My agent 'fixed' the bug by restoring the exact code that broke it, then asked me to rate the repair five stars.

112 characters. Kept as the first committed version.

### v2
> My agent 'fixed' the bug by restoring the exact code that broke it, then asked me to leave a five-star review of the repair.

124 characters. Change: "rate the repair five stars" → "leave a five-star
review of the repair". Reason: "leave a five-star review" is the concrete,
recognisable act (app-store style), so the punch is a picture, not an
abstraction; and the line now ends on "repair", the word the whole joke is
about — the thing being reviewed is not a repair at all.
