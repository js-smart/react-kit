# React Kit — Claude Code

@../AGENTS.md

**Custom Skills:** See [`skills/`](skills/) (e.g. [`react-doctor`](skills/react-doctor/)) and [`.agents/skills/`](../.agents/skills/) for workflow scripts and instructions.

`AGENTS.md` is the single source of truth for domain, stack, and conventions. Do not duplicate long-form project context here. The rules below apply only to Claude Code.

## Orchestration

- **Think on Opus or Fable.** Use `opus` or `fable` for planning, architecture, debugging, and any task that needs deeper reasoning. Do not use Sonnet as the lead thinking model.
- **Default the lead to `opus` at Extra (`xhigh`) effort.** This is the best cost-per-quality point for most of a session and is the effort tier recommended for coding and agentic work.
- **Escalate the lead to `fable`, do not fall back to it.** Fable is the more capable model and costs 2× per token ($10/$50 per MTok vs Opus at $5/$25). Escalate deliberately when a problem resists Opus — subtle stateful reasoning, security and auth flows, long-horizon agentic runs — not as the routine default. Raising effort on Opus does not reach Fable's ceiling; they are independent axes.
- **Execute on Sonnet.** Spawn coding and implementation subagents with `model: sonnet` at low or medium effort. Upgrade a stuck subagent to `opus` first, and only to `fable` if Opus also stalls.
- **Parallelize independent coding work.** Split work into units with no overlapping files or shared state, then launch those agents in the same turn. Run sequentially only when a step depends on another step's output.
- **Fan out up to 16 concurrent agents.** Launch as many parallel agents as the work can usefully occupy, capped at 16. Do not pad with idle agents. Do not exceed 16.
