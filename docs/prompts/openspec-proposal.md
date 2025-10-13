---
description: Scaffold a new OpenSpec change and validate strictly.
argument-hint: request or feature description
---

$ARGUMENTS
<!-- OPENSPEC:START -->
**Guardrails (守則)**
- Favor straightforward, minimal implementations first and add complexity only when it is requested or clearly required.
- 優先採用直接且最小可行的實作；僅在被要求或確有必要時才增加複雜性。
- Keep changes tightly scoped to the requested outcome.
- 將變更嚴格侷限於請求的結果範圍內。
- Refer to `openspec/AGENTS.md` (located inside the `openspec/` directory—run `ls openspec` or `openspec update` if you don't see it) if you need additional OpenSpec conventions or clarifications.
- 如需額外的 OpenSpec 慣例或說明，請參考 `openspec/AGENTS.md`（位於 `openspec/` 目錄內 — 若看不到可執行 `ls openspec` 或 `openspec update`）。
- Identify any vague or ambiguous details and ask the necessary follow-up questions before editing files.
- 識別任何模糊或不明確的細節，並在編輯檔案前提出必要的後續問題。

**Steps (步驟)**
1. Review `openspec/project.md`, run `openspec list` and `openspec list --specs`, and inspect related code or docs (e.g., via `rg`/`ls`) to ground the proposal in current behaviour; note any gaps that require clarification.
1. 檢閱 `openspec/project.md`、執行 `openspec list` 與 `openspec list --specs`，並檢視相關程式碼或文件（例如使用 `rg`/`ls`），以使提案符合現有行為；記錄任何需釐清的差距。
2. Choose a unique verb-led `change-id` and scaffold `proposal.md`, `tasks.md`, and `design.md` (when needed) under `openspec/changes/<id>/`.
2. 選擇一個以動詞開頭且唯一的 `change-id`，並在 `openspec/changes/<id>/` 下建立 `proposal.md`、`tasks.md` 與（必要時）`design.md`。
3. Map the change into concrete capabilities or requirements, breaking multi-scope efforts into distinct spec deltas with clear relationships and sequencing.
3. 將變更轉化為具體的功能或需求，並將跨多範疇的工作拆分為獨立的規格增量（spec deltas），同時說明它們之間的關係與執行順序。
4. Capture architectural reasoning in `design.md` when the solution spans multiple systems, introduces new patterns, or demands trade-off discussion before committing to specs.
4. 當解決方案跨多個系統、引入新模式或在確定規格前需討論權衡時，請在 `design.md` 中記錄架構推理。
5. Draft spec deltas in `changes/<id>/specs/<capability>/spec.md` (one folder per capability) using `## ADDED|MODIFIED|REMOVED Requirements` with at least one `#### Scenario:` per requirement and cross-reference related capabilities when relevant.
5. 在 `changes/<id>/specs/<capability>/spec.md`（每個能力一個資料夾）撰寫規格增量，使用 `## ADDED|MODIFIED|REMOVED Requirements` 分類，每個需求至少包含一個 `#### Scenario:`，並在相關情況下交叉參照相依能力。
6. Draft `tasks.md` as an ordered list of small, verifiable work items that deliver user-visible progress, include validation (tests, tooling), and highlight dependencies or parallelizable work.
6. 將 `tasks.md` 撰寫成有順序的清單，列出小而可驗證的工作項目以產出使用者可見的進展，包含驗證（測試、工具），並標示相依性或可並行處理的工作。
7. Validate with `openspec validate <id> --strict` and resolve every issue before sharing the proposal.
7. 使用 `openspec validate <id> --strict` 進行驗證，並在分享提案前解決所有問題。

**Reference (參考)**
- Use `openspec show <id> --json --deltas-only` or `openspec show <spec> --type spec` to inspect details when validation fails.
- 當驗證失敗時，使用 `openspec show <id> --json --deltas-only` 或 `openspec show <spec> --type spec` 來檢視詳細內容。
- Search existing requirements with `rg -n "Requirement:|Scenario:" openspec/specs` before writing new ones.
- 在撰寫新需求前，先用 `rg -n "Requirement:|Scenario:" openspec/specs` 搜尋現有需求。
- Explore the codebase with `rg <keyword>`, `ls`, or direct file reads so proposals align with current implementation realities.
- 使用 `rg <keyword>`、`ls` 或直接閱讀檔案來探索程式碼庫，以使提案與現有實作相符。
<!-- OPENSPEC:END -->
