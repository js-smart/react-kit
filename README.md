# React Kit

Reusable React/TypeScript UI components and utilities published as [`@js-smart/react-kit`](https://www.npmjs.com/package/@js-smart/react-kit).

## Requirements

- Node.js 20+
- [pnpm](https://pnpm.io/)

## Setup

```bash
pnpm install
```

## Commands

| Script            | Description                                        |
| ----------------- | -------------------------------------------------- |
| `pnpm start`      | Run the demo app (HTTPS at https://localhost:3007) |
| `pnpm start:docs` | Run the Docusaurus docs site (port 3008)           |
| `pnpm build`      | Build the library to `dist/react-kit/`             |
| `pnpm build:demo` | Build the demo app                                 |
| `pnpm build:docs` | Build the docs site                                |
| `pnpm test`       | Run library unit tests                             |
| `pnpm lint`       | Lint with Oxlint                                   |
| `pnpm format`     | Format with Oxfmt                                  |

## Workspace

| Package               | Path                   | Role                     |
| --------------------- | ---------------------- | ------------------------ |
| `@js-smart/react-kit` | `react-kit/`           | Published library        |
| `react-kit-demo`      | `apps/react-kit-demo/` | Component showcase       |
| `docs`                | `apps/docs/`           | Docusaurus documentation |

Root package name: `react-kit-monorepo` (private orchestration only).
