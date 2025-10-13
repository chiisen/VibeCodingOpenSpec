<!-- OPENSPEC:START -->
# OpenSpec Instructions

These instructions are for AI assistants working in this project.

Always open `@/openspec/AGENTS.md` when the request:
- Mentions planning or proposals (words like proposal, spec, change, plan)
- Introduces new capabilities, breaking changes, architecture shifts, or big performance/security work
- Sounds ambiguous and you need the authoritative spec before coding

Use `@/openspec/AGENTS.md` to learn:
- How to create and apply change proposals
- Spec format and conventions
- Project structure and guidelines

Keep this managed block so 'openspec update' can refresh the instructions.

<!-- OPENSPEC:END -->

## Project Mission
- Consolidate the official OpenSpec messaging from `https://github.com/Fission-AI/OpenSpec` into a single-page informational site hosted in this repo.
- Spotlight how OpenSpec enables spec-driven collaboration between humans and AI assistants, focusing on "Why", "How it works", onboarding, and examples.
- Serve Traditional Chinese as the primary language while surfacing short English callouts for important terminology (例如 Spec-driven development、Change Proposal)。

## Canonical References
- Primary source: upstream `README.md`, especially the Why, Workflow, Getting Started, CLI commands, and Example sections.
- Supplement with upstream docs under `docs/` and any assets already mirrored in `images/` when visuals are needed.
- Reuse existing repo artefacts first (`images/OpenSpec.png`) before pulling new assets; document any newly added assets in `openspec/changes/`.

## Page Blueprint
1. **Hero / Value Proposition** - include the OpenSpec tagline, key badges, and a primary call-to-action (`npm install -g @fission-ai/openspec`).
2. **Why OpenSpec** - highlight pain points it solves plus key outcomes (alignment, audit trail, change tracking).
3. **Workflow Overview** - visualize or describe the four-stage loop (Draft -> Review -> Implement -> Archive).
4. **Getting Started** - outline prerequisites (Node.js >= 20.19), install steps, and tool-specific onboarding.
5. **CLI Quick Reference** - present core commands (`openspec init`, `openspec validate --strict`, `openspec list`, `openspec archive`).
6. **Example Change Folder** - show the folder structure and sample requirement/scenario snippets.
7. **Community & Updates** - link to Discord, X account, and mention `openspec update`.

## Content & Tone Guidelines
- Prefer concise blocks (<= 80 words) with scannable headings; use bilingual labels like `## 為什麼選擇 OpenSpec / Why OpenSpec`.
- Explain terminology before using acronyms. When quoting requirements, keep the SHALL/MUST language from the upstream spec.
- Use inclusive, collaborative tone geared toward developers partnering with AI assistants.
- Ensure call-to-action buttons and links clearly state their purpose（例如：「加入 Discord 社群」）。

## Implementation Guardrails
- Deliver a responsive, accessible static page (semantic HTML, keyboard-friendly navigation, sufficient contrast).
- Keep build tooling lightweight (vanilla HTML/JS or Vite-based pipeline). Avoid introducing heavy frameworks unless justified via proposal.
- Store source in `docs/` if using static assets, and document any build commands in `README.md`.
- Before coding, raise an OpenSpec change proposal detailing planned sections, assets, and interactive elements.

## Collaboration Workflow
- Read `openspec/project.md` before starting new work to stay aligned on scope and stakeholders.
- For content or structural updates, create a change folder under `openspec/changes/` with `proposal.md`, `tasks.md`, and relevant `specs/` deltas.
- Run `openspec validate <change-id> --strict` prior to seeking review or merging changes.
- Record open questions inside the change folder (例如寫在 `design.md`) 以方便利害關係人回覆。
