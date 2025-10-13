---
description: Archive a deployed OpenSpec change and update specs.
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
1. Identify the requested change ID (via the prompt or `openspec list`).
1. 確認要處理的 change ID（可由提示或執行 `openspec list` 得到）。
2. Run `openspec archive <id> --yes` to let the CLI move the change and apply spec updates without prompts (use `--skip-specs` only for tooling-only work).
2. 執行 `openspec archive <id> --yes`，讓 CLI 自動移動變更並套用規格更新而不再提示（僅在工具相關工作時使用 `--skip-specs`）。
3. Review the command output to confirm the target specs were updated and the change landed in `changes/archive/`.
3. 檢查指令輸出以確認目標規格已被更新，且變更已移至 `changes/archive/`。
4. Validate with `openspec validate --strict` and inspect with `openspec show <id>` if anything looks off.
4. 使用 `openspec validate --strict` 進行驗證，如有異常可用 `openspec show <id>` 進一步檢視。

**Reference (參考)**
- Inspect refreshed specs with `openspec list --specs` and address any validation issues before handing off.
- 使用 `openspec list --specs` 檢視更新後的規格，並在移交前處理任何驗證問題。
<!-- OPENSPEC:END -->
