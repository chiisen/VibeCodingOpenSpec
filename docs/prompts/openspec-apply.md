---
description: Implement an approved OpenSpec change and keep tasks in sync.
argument-hint: change-id
---

$ARGUMENTS
<!-- OPENSPEC:START -->
**Guardrails (守則)**
- Favor straightforward, minimal implementations first and add complexity only when it is requested or clearly required.
- 優先採用直接且最小可行的實作；只有在被要求或確有必要時才增加複雜度。
- Keep changes tightly scoped to the requested outcome.
- 將變更嚴格限定於請求之結果範圍內。
- Refer to `openspec/AGENTS.md` (located inside the `openspec/` directory—run `ls openspec` or `openspec update` if you don't see it) if you need additional OpenSpec conventions or clarifications.
- 如需更多 OpenSpec 慣例或說明，請參閱 `openspec/AGENTS.md`（位於 `openspec/` 目錄內；若看不到可執行 `ls openspec` 或 `openspec update`）。

**Steps (步驟)**
Track these steps as TODOs and complete them one by one.
將這些步驟記錄為 TODO，並逐項完成。
1. Read `changes/<id>/proposal.md`, `design.md` (if present), and `tasks.md` to confirm scope and acceptance criteria.
1. 閱讀 `changes/<id>/proposal.md`、`design.md`（如有）與 `tasks.md`，以確認範疇與驗收標準。
2. Work through tasks sequentially, keeping edits minimal and focused on the requested change.
2. 依序完成任務，保持修改最小且聚焦於請求的變更。
3. Confirm completion before updating statuses—make sure every item in `tasks.md` is finished.
3. 在更新狀態前確認已完成所有工作 —— 確保 `tasks.md` 中的每一項都已完成。
4. Update the checklist after all work is done so each task is marked `- [x]` and reflects reality.
4. 全部工作完成後更新清單，將每項任務標註為 `- [x]`，使其反映實際狀態。
5. Reference `openspec list` or `openspec show <item>` when additional context is required.
5. 當需額外上下文時，參考 `openspec list` 或 `openspec show <item>`。

**Reference (參考)**
- Use `openspec show <id> --json --deltas-only` if you need additional context from the proposal while implementing.
- 實作時若需從提案取得更多上下文，可使用 `openspec show <id> --json --deltas-only`。
<!-- OPENSPEC:END -->
