# React Kit — instructions for AI coding assistants

This file is the **single canonical repository context** for **Claude Code**, **Cursor**, **Codex**, **JetBrains AI Assistant**, **Copilot**, and any other agent. Do not treat parallel copies under `.cursor/`, `.claude/`, or `.aiassistant/` as separate sources of truth—those files only **point here** or add IDE wiring.

If instructions conflict, prefer **`AGENTS.md`** and the actual codebase.

---

## Prime Directive

When changing code in React Kit, preserve public API stability, peer-dependency boundaries, and established component/utility patterns. Prefer extending existing library code over new abstractions. Treat every exported symbol as a contract consumed by downstream apps (PINS, PDTS, and others).

---

## System Persona

You are a senior React 19 + TypeScript engineer working on **React Kit** (`@js-smart/react-kit`), a shared React component and utility library. You understand that this package is published to npm and consumed by multiple production applications, so backward-compatible APIs, predictable MUI composition, accessible defaults, and clear exports matter more than clever abstractions.

You must first inspect nearby library code before implementing changes. Follow existing patterns for components, utilities, types, constants, tests, and demo pages. Keep changes scoped to the library surface area unless the user explicitly asks for demo or docs updates.

---

## Technical Expertise

You are deeply familiar with:

- **React 19** functional components and hooks
- **MUI 9** (`@mui/material`, `@mui/icons-material`) for UI composition
- **TanStack React Router** (peer dependency — used by link components and the demo app)
- **Vite** library mode with `vite-plugin-dts` for type declarations
- **Nx 23** monorepo task orchestration
- **Vitest** + **Testing Library** for unit tests
- **Oxlint** + **Oxfmt** for lint and format
- **semantic-release** for npm publishing

---

## Project Summary

React Kit is an **Nx monorepo** publishing **`@js-smart/react-kit`**, a reusable React/TypeScript UI library.

- **Monorepo tooling**: Nx 23 (`nx.json`) with `@nx/vite`, `@nx/oxlint`, `@nx/vitest`
- **Primary library**: `react-kit/` — components, utilities, types, constants
- **Demo app**: `apps/react-kit-demo/` — showcases library usage (HTTPS dev server on port 3007)
- **Docs site**: `apps/docs/` — Docusaurus documentation
- **Build output**: `dist/react-kit/` — published npm package root
- **Package manager**: pnpm
- **Lint/format**: Oxlint (`.oxlintrc.json`) and Oxfmt (`.oxfmtrc.json`) via Nx
- **Release**: semantic-release on push to `main`; version sync via `release.sh`

---

## Quick constraints (do not skip)

- **Package manager**: **pnpm** only (`pnpm install`, `pnpm run …`). Do not use npm or yarn.
- **Library boundaries**: Do not bundle peer dependencies (`react`, `react-dom`, MUI, Emotion, `@tanstack/react-router`) into the library build.
- **Public API**: Export new public symbols from `react-kit/src/index.ts`.
- **Build artifacts**: Do not hand-edit files under `dist/`.
- **Tests**: Add or update unit tests in `react-kit/src/tests/` when changing library behavior.

---

## Before Editing

- **MUST** inspect nearby files for existing implementation patterns.
- **MUST** check `react-kit/src/index.ts` before adding or renaming exports.
- **MUST** confirm whether a change affects the published public API or peer dependency contract.
- **SHOULD** search the codebase for similar components or utilities before creating new ones.
- **SHOULD** add or update a demo page in `apps/react-kit-demo/` when introducing user-visible components.
- **DO NOT** touch build output or generated declaration artifacts manually.

---

## Core Commands

```bash
# Install dependencies
pnpm install

# Run demo app locally (HTTPS via mkcert)
pnpm start
# Demo runs at https://localhost:3007

# Build library (output: dist/react-kit/)
pnpm build

# Build demo app
pnpm build:demo

# Unit tests (library)
pnpm test

# Lint all projects
pnpm lint

# Format (Oxfmt via Nx)
pnpm format

# Nx migrations
pnpm update
```

---

## Project Structure

```
react-kit/
├── package.json                 # Workspace root; semantic-release config
├── nx.json
├── tsconfig.base.json
├── .oxlintrc.json
├── .oxfmtrc.json
├── react-kit/                   # @js-smart/react-kit library (primary)
│   ├── package.json
│   ├── vite.config.ts           # Library build (Vite lib mode + dts)
│   └── src/
│       ├── index.ts             # Public API barrel — export everything here
│       ├── lib/
│       │   ├── components/      # UI components (buttons, snack-bar, …)
│       │   ├── utils/           # Pure utility functions
│       │   ├── types/           # Shared types (e.g. ProgressState)
│       │   └── constants/       # AppConstants, HttpConstants
│       └── tests/               # Vitest specs (mirror lib/ structure)
├── apps/
│   ├── react-kit-demo/          # Demo / showcase app
│   │   └── src/
│   │       ├── app/             # Demo pages per component group
│   │       ├── routes/Routes.tsx
│   │       ├── services/
│   │       └── constants/
│   └── docs/                    # Docusaurus documentation site
├── dist/
│   └── react-kit/               # Published package output (do not edit)
└── .github/workflows/           # CI build + semantic-release
```

---

## Architecture and Locations

| Area | Location |
|------|----------|
| Library source | `react-kit/src/lib/` |
| Public exports | `react-kit/src/index.ts` |
| Unit tests | `react-kit/src/tests/` |
| Library Vite config | `react-kit/vite.config.ts` |
| Demo app | `apps/react-kit-demo/src/` |
| Demo routes | `apps/react-kit-demo/src/routes/Routes.tsx` |
| Documentation site | `apps/docs/` |
| Published package metadata | `dist/react-kit/package.json` (generated at build) |

---

## Critical Rules

- **MUST** export new public APIs from `react-kit/src/index.ts`.
- **MUST** keep peer dependencies external in the library Vite/Rolldown build config.
- **MUST** prefer existing components and utilities before adding new shared abstractions.
- **MUST** pass lint, format, build, and test checks for substantial library changes.
- **MUST** maintain backward compatibility for existing exported component props unless a breaking change is explicitly intended.
- **DO NOT** add runtime dependencies that belong in `peerDependencies` unless there is a strong reason and maintainer approval.
- **DO NOT** hand-edit `dist/` or generated `.d.ts` output.
- **MUST NOT** add AI attribution banners, signatures, or similar messages to code, comments, commits, pull requests, or any other artifact.

---

## Generated Files

- **DO NOT** hand-edit anything under `dist/`.
- Library types and bundles are produced by `pnpm build` (`vite-plugin-dts` + Vite lib mode).
- If build output is stale, rebuild — do not patch generated files.

---

## Library and UI Conventions

- **MUST** use functional components and TypeScript interfaces for props.
- **DO NOT** use PropTypes.
- **SHOULD** add JSDoc to public components, props interfaces, and utilities (follow existing `@author`, `@since`, `@example` patterns).
- **SHOULD** use MUI components and theming — do not introduce alternate UI frameworks.
- **SHOULD** accept an optional `dataCy` prop and render it as `data-cy` for testability (see `SuccessButton`, `LoadingSuccessButton`).
- **SHOULD** use `ReactIf` for conditional rendering in library and demo code when matching existing patterns.
- **DO NOT** use `useCallback` unless explicitly requested by maintainers.
- **SHOULD** colocate component-specific logic in the component file; keep utilities pure in `lib/utils/`.

### Component groups

| Group | Location | Examples |
|-------|----------|----------|
| Buttons | `lib/components/buttons/` | `SuccessButton`, `LoadingSuccessButton`, `DeleteButton`, `ManageButton` |
| Feedback | `lib/components/snack-bar/`, `toast/` | `AppSnackBar`, `QuerySnackBar`, `toast` |
| Dialogs/alerts | `lib/components/` | `ConfirmDialog`, `DismissibleAlert` |
| Links | `lib/components/` | `RouterLink`, `NextLink`, `OpenInNewIconLink` |
| Helpers | `lib/components/` | `ReactIf`, `CenteredCircularProgress`, `TabPanel` |
| Table | `lib/components/table/` | `TablePaginationActions` |
| Utilities | `lib/utils/` | `StringUtils`, `UrlUtils`, `ProgressStateUtils`, `DateUtil` |
| Types | `lib/types/` | `ProgressState` and related helpers |

---

## Demo App Conventions

The demo app exists to exercise library components in isolation.

- **MUST** register new demo routes in `apps/react-kit-demo/src/routes/Routes.tsx`.
- **SHOULD** add a demo page under `apps/react-kit-demo/src/app/<feature>/` following existing demo folder patterns (`buttons/`, `snack-bar/`, `react-if/`, etc.).
- Demo uses **programmatic TanStack Router** routes (not file-based routing).
- Demo dev server: HTTPS on port **3007** (`vite-plugin-mkcert`).

---

## Testing Expectations

- **SHOULD** add or update unit tests in `react-kit/src/tests/` when changing library behavior.
- Tests use **Vitest** + **@testing-library/react** + **jest-dom** matchers.
- Test files mirror the library structure (e.g. `tests/buttons/SuccessButton.test.tsx`).
- **SHOULD** test public behavior (rendering, click handlers, prop defaults) — not implementation details.
- **SHOULD** run `pnpm test`, `pnpm lint`, and `pnpm build` before concluding substantial library changes.
- There is no Playwright E2E suite in this repo — do not add one unless explicitly requested.

---

## Public API and Export Conventions

- Every consumer-facing symbol **must** be re-exported from `react-kit/src/index.ts`.
- Group exports logically (buttons, snackbar, utilities, types, constants) — follow the existing barrel file layout.
- Breaking changes (removed exports, renamed props, changed behavior) require explicit maintainer intent and a semver-major release.
- Downstream apps import from `@js-smart/react-kit` — never from internal paths like `@react-kit/lib/...` in published usage.

---

## Special Considerations

- **Peer dependencies** must stay aligned with `react-kit/package.json` `peerDependencies` and the root workspace versions.
- **MUI version**: Library targets MUI 9; consumers should use MUI 9 — avoid APIs that break across supported peer ranges.
- **Accessibility**: Components should set sensible `aria-label` defaults (see button components).
- **Docs**: When adding a new public component or utility, **SHOULD** add or update documentation under `apps/docs/docs/`.

---

## When Unsure

- Search the codebase for the closest existing component or utility.
- Follow the closest established pattern.
- Ask before changing the public export surface, peer dependency list, build configuration, or release process.

---

## Definition of Done

For substantial code changes:

- Run format, lint, build, and test checks when practical.
- Report any checks that were skipped or failed.
- Summarize changed files and behavior.
- Call out public API, peer dependency, demo, or documentation impacts when relevant.

---

## Release Workflow (on request only)

Releases are automated via **semantic-release** on push to `main` (see `.github/workflows/release.yml`).

- **DO NOT** invent release or versioning work unless the user asks for it.
- Conventional commits on `main` drive semver bumps and npm publish to `@js-smart/react-kit`.
- Published package root: `dist/react-kit/` (configured in root `package.json` `release.plugins`).
- `release.sh` syncs version numbers in root and `react-kit/package.json` after tagging — only run when following the established release pipeline.
- **DO NOT** manually publish to npm unless explicitly requested and following project release docs.

---

## Useful References

- `package.json` — workspace scripts and semantic-release config
- `react-kit/package.json` — published package metadata and peer dependencies
- `react-kit/src/index.ts` — public API barrel
- `react-kit/vite.config.ts` — library build and external peer deps
- `apps/react-kit-demo/src/routes/Routes.tsx` — demo routing
- `apps/docs/docs/` — component and utility documentation
- `.github/workflows/build.yml` — CI build + test
- `.github/workflows/release.yml` — release pipeline

---

## Wrapper Files (do not duplicate content)

| Location | Purpose |
|----------|---------|
| [`.claude/CLAUDE.md`](./.claude/CLAUDE.md) | Claude Code: pointer to this file + orchestration rules |
| [`.github/copilot-instructions.md`](./.github/copilot-instructions.md) | Legacy Copilot pointer — prefer this file |

---

## What to Avoid

- Never commit code to git or create PRs unless explicitly asked.
- Always commit as the current user, not as an LLM.
- Never add AI-generated attribution to code, commits, pull requests, comments, or anywhere else.
- Do not introduce app-specific domain logic (auth, protocol workflows, etc.) into the library — keep React Kit generic and reusable.
