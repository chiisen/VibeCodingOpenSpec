# OpenSpec Instructions

Instructions for AI coding assistants using OpenSpec for spec-driven development.

## TL;DR Quick Checklist

- Search existing work: `openspec spec list --long`, `openspec list` (use `rg` only for full-text search)
- Decide scope: new capability vs modify existing capability
- Pick a unique `change-id`: kebab-case, verb-led (`add-`, `update-`, `remove-`, `refactor-`)
- Scaffold: `proposal.md`, `tasks.md`, `design.md` (only if needed), and delta specs per affected capability
- Write deltas: use `## ADDED|MODIFIED|REMOVED|RENAMED Requirements`; include at least one `#### Scenario:` per requirement
- Validate: `openspec validate [change-id] --strict` and fix issues
- Request approval: Do not start implementation until proposal is approved

## Three-Stage Workflow

### Stage 1: Creating Changes
Create proposal when you need to:
- Add features or functionality
- Make breaking changes (API, schema)
- Change architecture or patterns  
- Optimize performance (changes behavior)
- Update security patterns

Triggers (examples):
- "Help me create a change proposal"
- "Help me plan a change"
- "Help me create a proposal"
- "I want to create a spec proposal"
- "I want to create a spec"

# OpenSpec 指南

供使用 OpenSpec 進行規格驅動開發的 AI 程式輔助工具參考的操作說明。

## 快速檢查清單（TL;DR）

- 搜尋既有工作：使用 `openspec spec list --long`、`openspec list`（如需全文檢索才使用 `rg`）
- 決定範圍：新增能力或修改既有能力
- 選擇唯一的 `change-id`：使用 kebab-case，並以動詞開頭（例如 `add-`、`update-`、`remove-`、`refactor-`）
- 建立基礎檔案：`proposal.md`、`tasks.md`、`design.md`（僅在必要時），以及每個受影響能力對應的 delta 規格檔
- 撰寫增量（deltas）：使用 `## ADDED|MODIFIED|REMOVED|RENAMED Requirements` 標頭，每個需求至少包含一個 `#### Scenario:`
- 驗證：執行 `openspec validate [change-id] --strict` 並修復所有問題
- 請求審核：提案獲核准前不得開始實作

## 三階段工作流程

### 階段一：建立變更（Creating Changes）
在需要下列情況時建立變更提案：
- 新增功能或行為
- 進行破壞性變更（例如 API、schema）
- 調整架構或設計模式
- 優化效能（改變系統行為）
- 更新安全相關模式

觸發範例（Triggers）：
- 「請幫我建立一個變更提案」
- 「請幫我規劃一個變更」
- 「我想要建立一個提案」
- 「我想建立一個規格提案」
- 「我想建立一個規格」

簡易判定準則（Loose matching guidance）：
- 包含其中一個字詞：`proposal`、`change`、`spec`
- 並且包含其中一個動作詞：`create`、`plan`、`make`、`start`、`help`

不需要建立提案的情況（Skip proposal for）：
- 修補錯誤（回復原本應有行為）
- 拼字、格式或註解修正
- 非破壞性的相依性更新
- 設定檔更動
- 為既有行為新增測試

工作流程（Workflow）
1. 檢閱 `openspec/project.md`、執行 `openspec list` 與 `openspec list --specs`，以理解當前脈絡。
2. 選擇唯一且以動詞開頭的 `change-id`，在 `openspec/changes/<id>/` 下建立 `proposal.md`、`tasks.md`，視需要建立 `design.md`，並為受影響的能力撰寫規格增量檔。
3. 使用 `## ADDED|MODIFIED|REMOVED Requirements` 撰寫規格增量內容，且每個需求至少包含一個 `#### Scenario:`。
4. 執行 `openspec validate <id> --strict` 並在分享提案前修正所有驗證問題。

### 階段二：實作變更（Implementing Changes）
把下列步驟列為 TODO，並逐項完成：
1. 閱讀 `proposal.md` —— 了解要實作的內容。
2. 閱讀 `design.md`（若存在）—— 檢視技術決策。
3. 閱讀 `tasks.md` —— 取得實作檢查清單。
4. 依序實作任務 —— 按順序完成每個項目。
5. 確認完成度 —— 在更新狀態前，確保 `tasks.md` 中的每一項都已完成。
6. 更新核取清單 —— 所有工作完成後，將每項任務標註為 `- [x]` 以反映實際狀態。
7. 審核門檻 —— 未經提案審核批准前不得開始實作。

### 階段三：封存變更（Archiving Changes）
部署完成後，建立獨立的 PR 以：
- 將 `changes/[name]/` 移動到 `changes/archive/YYYY-MM-DD-[name]/`
- 若能力有變動，更新 `specs/` 中的規格
- 僅為工具相關的工作時，可使用 `openspec archive [change] --skip-specs --yes`
- 執行 `openspec validate --strict` 以確認封存後的變更通過驗證

## 開始任何工作前

情境檢查清單（Context Checklist）：
- [ ] 閱讀相關能力的規格檔：`specs/[capability]/spec.md`
- [ ] 檢查 `changes/` 中的待處理變更，避免衝突
- [ ] 閱讀 `openspec/project.md` 以掌握專案慣例
- [ ] 執行 `openspec list` 以查看目前進行中的變更
- [ ] 執行 `openspec list --specs` 以查看現有能力清單

在建立規格前（Before Creating Specs）：
- 始終先確認該能力是否已存在
- 優先修改現有規格而非建立重複規格
- 使用 `openspec show [spec]` 檢視能力的當前狀態
- 如果需求不明確，先提出 1–2 個釐清問題再進行腳手架（scaffolding）

### 搜尋指引（Search Guidance）
- 列出規格：`openspec spec list --long`（或使用 `--json` 供腳本處理）
- 列出變更：`openspec list`（或 `openspec change list --json`，已不建議使用但仍可用）
- 顯示細節：
  - 規格：`openspec show <spec-id> --type spec`（需要過濾時使用 `--json`）
  - 變更：`openspec show <change-id> --json --deltas-only`
- 全文搜尋（使用 ripgrep）：`rg -n "Requirement:|Scenario:" openspec/specs`

## 快速上手（Quick Start）

### CLI 指令

以下指令範例保留原始樣貌以便直接執行：

```bash
# Essential commands
openspec list                  # List active changes
openspec list --specs          # List specifications
openspec show [item]           # Display change or spec
openspec diff [change]         # Show spec differences
openspec validate [item]       # Validate changes or specs
openspec archive [change] [--yes|-y]      # Archive after deployment (add --yes for non-interactive runs)

# Project management
openspec init [path]           # Initialize OpenSpec
openspec update [path]         # Update instruction files

# Interactive mode
openspec show                  # Prompts for selection
openspec validate              # Bulk validation mode

# Debugging
openspec show [change] --json --deltas-only
openspec validate [change] --strict
```

### 指令旗標（Command Flags）

- `--json` - 機器可讀的輸出
- `--type change|spec` - 明確指定項目類型
- `--strict` - 全面驗證模式
- `--no-interactive` - 關閉互動式提示
- `--skip-specs` - 封存時不更新規格
- `--yes`/`-y` - 跳過確認提示（非互動式封存）

## 目錄結構（Directory Structure）

以下範例目錄與檔案用途保留原樣：

```
openspec/
├── project.md              # Project conventions
├── specs/                  # Current truth - what IS built
│   └── [capability]/       # Single focused capability
│       ├── spec.md         # Requirements and scenarios
│       └── design.md       # Technical patterns
├── changes/                # Proposals - what SHOULD change
│   ├── [change-name]/
│   │   ├── proposal.md     # Why, what, impact
   │   │   ├── tasks.md        # Implementation checklist
   │   │   ├── design.md       # Technical decisions (optional; see criteria)
   │   │   └── specs/          # Delta changes
   │   │       └── [capability]/
   │   │           └── spec.md # ADDED/MODIFIED/REMOVED
│   └── archive/            # Completed changes
```

## 建立變更提案（Creating Change Proposals）

### 決策流程（Decision Tree）

```
New request?
├─ Bug fix restoring spec behavior? → 直接修正
├─ Typo/format/comment? → 直接修正
├─ New feature/capability? → 建立提案
├─ Breaking change? → 建立提案
├─ Architecture change? → 建立提案
└─ Unclear? → 建議建立提案（較安全）
```

### 提案結構（Proposal Structure）

1. 建立目錄：`changes/[change-id]/`（使用 kebab-case，動詞開頭，且需唯一）

2. 撰寫 `proposal.md`：
```markdown
## Why
[1-2 sentences on problem/opportunity]

## What Changes
- [Bullet list of changes]
- [Mark breaking changes with **BREAKING**]

## Impact
- Affected specs: [list capabilities]
- Affected code: [key files/systems]
```

3. 建立規格增量（spec deltas）：`specs/[capability]/spec.md`
```markdown
## ADDED Requirements
### Requirement: New Feature
The system SHALL provide...

#### Scenario: Success case
- **WHEN** user performs action
- **THEN** expected result
```

## MODIFIED Requirements
### Requirement: Existing Feature
[Complete modified requirement]

## REMOVED Requirements
### Requirement: Old Feature
**Reason**: [Why removing]
**Migration**: [How to handle]
```
若有多個能力受到影響，請在 `changes/[change-id]/specs/<capability>/spec.md` 下為每個能力建立獨立的 delta 檔。

4. 撰寫 `tasks.md`：
```markdown
## 1. Implementation
- [ ] 1.1 Create database schema
- [ ] 1.2 Implement API endpoint
- [ ] 1.3 Add frontend component
- [ ] 1.4 Write tests
```

5. 在需要時建立 `design.md`：
當變更屬於下列情況之一時應建立 `design.md`，否則可省略：
- 跨領域變更（多個服務/模組）或引入新的架構模式
- 新增外部相依或重大資料模型變動
- 涉及安全、效能或遷移的複雜性
- 需求模糊且需要在開發前做技術決策

最簡 `design.md` 範本：
```markdown
## Context
[Background, constraints, stakeholders]

## Goals / Non-Goals
- Goals: [...]
- Non-Goals: [...]

## Decisions
- Decision: [What and why]
- Alternatives considered: [Options + rationale]

## Risks / Trade-offs
- [Risk] → Mitigation

## Migration Plan
[Steps, rollback]

## Open Questions
- [...]
```

## 規格檔格式（Spec File Format）

### 重要：情境（Scenario）格式

**正確範例（CORRECT）**（請使用 `####` 標頭）：
```markdown
#### Scenario: User login success
- **WHEN** valid credentials provided
- **THEN** return JWT token
```

**錯誤範例（WRONG）**（請勿使用清單或粗體方式當作情境標頭）：
```markdown
- **Scenario: User login**  ❌
**Scenario**: User login     ❌
### Scenario: User login      ❌
```

每個需求（Requirement）必須至少包含一個情境（Scenario）。

### 需求用語（Requirement Wording）
- 對於具約束力的需求請使用 SHALL / MUST（除非刻意採用非規範性用詞，否則避免使用 should / may）。

### Delta 操作（Delta Operations）

- `## ADDED Requirements` - 新增能力
- `## MODIFIED Requirements` - 行為變更
- `## REMOVED Requirements` - 淘汰/移除功能
- `## RENAMED Requirements` - 名稱變更

標頭比對採用 `trim(header)`（忽略空白字元）。

#### 何時使用 ADDED 與 MODIFIED
- ADDED：引進一個能獨立成立的新能力或子能力。當變更與現有需求語意無關（例如新增「Slash Command Configuration」）時，優先使用 ADDED。
- MODIFIED：變更現有需求的行為、範圍或驗收標準。務必貼上完整更新後的需求內容（含標頭與所有情境），封存器會用您提供的內容取代整個需求；若只提供部分內容會造成先前細節遺失。
- RENAMED：僅改名時使用；若同時改變行為，請同時使用 RENAMED（名稱）與 MODIFIED（內容），並參照新名稱。

常見錯誤：使用 MODIFIED 新增新關注事項但未包含原始文字，會在封存時遺失原有細節。如果您並非要修改既有需求，請改為在 ADDED 底下新增需求。

正確撰寫 MODIFIED 需求的步驟：
1) 在 `openspec/specs/<capability>/spec.md` 中找到現有需求。
2) 複製整個需求區塊（從 `### Requirement: ...` 到該需求的所有情境）。
3) 貼到 `## MODIFIED Requirements` 下並修改以反映新行為。
4) 確保標頭文字完全一致（忽略空白），並保留至少一個 `#### Scenario:`。

RENAMED 範例：
```markdown
## RENAMED Requirements
- FROM: `### Requirement: Login`
- TO: `### Requirement: User Authentication`
```

## 疑難排解（Troubleshooting）

### 常見錯誤

**"Change must have at least one delta"**
- 檢查 `changes/[name]/specs/` 是否存在 .md 檔
- 確認檔案是否包含操作前綴（例如 `## ADDED Requirements`）

**"Requirement must have at least one scenario"**
- 檢查情境是否使用 `#### Scenario:` 格式（四個井字）
- 不要用清單項或粗體作為情境標頭

**情境解析無聲失敗（Silent scenario parsing failures）**
- 需要完全符合格式：`#### Scenario: Name`
- 使用 `openspec show [change] --json --deltas-only` 來除錯

### 驗證小技巧（Validation Tips）

```bash
# 在做全面檢查時總是使用 strict 模式
openspec validate [change] --strict

# 除錯 delta 解析
openspec show [change] --json | jq '.deltas'

# 檢查特定需求
openspec show [spec] --json -r 1
```

## 標準流程範例（Happy Path Script）

```bash
# 1) 探索當前狀態
openspec spec list --long
openspec list
# 選用全文搜尋：
# rg -n "Requirement:|Scenario:" openspec/specs
# rg -n "^#|Requirement:" openspec/changes

# 2) 選擇 change id 並建立腳手架
CHANGE=add-two-factor-auth
mkdir -p openspec/changes/$CHANGE/{specs/auth}
printf "## Why\n...\n\n## What Changes\n- ...\n\n## Impact\n- ...\n" > openspec/changes/$CHANGE/proposal.md
printf "## 1. Implementation\n- [ ] 1.1 ...\n" > openspec/changes/$CHANGE/tasks.md

# 3) 新增 delta（範例）
cat > openspec/changes/$CHANGE/specs/auth/spec.md << 'EOF'
## ADDED Requirements
### Requirement: Two-Factor Authentication
Users MUST provide a second factor during login.

#### Scenario: OTP required
- **WHEN** valid credentials are provided
- **THEN** an OTP challenge is required
EOF

# 4) 驗證
openspec validate $CHANGE --strict
```

## 多能力範例（Multi-Capability Example）

```
openspec/changes/add-2fa-notify/
├── proposal.md
├── tasks.md
└── specs/
    ├── auth/
    │   └── spec.md   # ADDED: Two-Factor Authentication
    └── notifications/
        └── spec.md   # ADDED: OTP email notification
```

auth/spec.md
```markdown
## ADDED Requirements
### Requirement: Two-Factor Authentication
...
```

notifications/spec.md
```markdown
## ADDED Requirements
### Requirement: OTP Email Notification
...
```

## 最佳實務（Best Practices）

### 簡單優先（Simplicity First）
- 預設新增程式碼少於 100 行
- 先採用單一檔案實作，只有在證明不足時才拆分
- 沒有明確理由時避免引入框架
- 優先使用穩定、已驗證的實作模式

### 複雜度觸發條件（Complexity Triggers）
僅在下列情況加入複雜性：
- 效能數據顯示目前解法過慢
- 具體的規模需求（例如 >1000 名使用者、>100MB 資料）
- 多個已驗證的使用情境需要抽象化

### 清楚的參考（Clear References）
- 使用 `file.ts:42` 格式來標示程式碼位置
- 以 `specs/auth/spec.md` 的方式引用規格檔
- 連結相關的變更與 PR

### 能力命名（Capability Naming）
- 使用動詞-名詞（verb-noun），例如 `user-auth`、`payment-capture`
- 每個能力應專注於單一目的
- 確保 10 分鐘內可理解其用途
- 若描述需要包含「AND」，考慮拆分能力

### 變更 ID 命名（Change ID Naming）
- 使用 kebab-case，簡短且具描述性，例如 `add-two-factor-auth`
- 優先使用動詞前綴：`add-`、`update-`、`remove-`、`refactor-`
- 確保唯一性；若名稱已被使用，尾碼加上 `-2`、`-3` 等

## 工具選擇指南（Tool Selection Guide）

| 任務 | 工具 | 為什麼 |
|------|------|-----|
| Find files by pattern | Glob | 快速的檔名/路徑模式比對 |
| Search code content | Grep | 最佳化的正規表達式搜尋 |
| Read specific files | Read | 直接讀取檔案 |
| Explore unknown scope | Task | 多步驟調查流程 |

## 錯誤復原（Error Recovery）

### 變更衝突（Change Conflicts）
1. 執行 `openspec list` 查看目前進行中的變更
2. 檢查是否有重疊的規格
3. 與變更擁有者協調
4. 考慮合併提案

### 驗證失敗（Validation Failures）
1. 使用 `--strict` 旗標執行驗證
2. 檢查 JSON 輸出以取得詳細資訊
3. 驗證規格檔格式是否正確
4. 確保情境（scenarios）格式正確

### 缺乏脈絡（Missing Context）
1. 先閱讀 `project.md`
2. 檢查相關規格
3. 檢閱最近的封存紀錄
4. 如有必要，請提出釐清問題

## 快速參考（Quick Reference）

### 階段指示符（Stage Indicators）
- `changes/` - 提案中，尚未實作
- `specs/` - 已實作並部署
- `archive/` - 已完成之變更

### 檔案用途（File Purposes）
- `proposal.md` - 為何要做與會做什麼
- `tasks.md` - 實作步驟
- `design.md` - 技術決策
- `spec.md` - 需求與行為描述

### CLI 重點指令（CLI Essentials）
```bash
openspec list              # What's in progress?
openspec show [item]       # View details
openspec diff [change]     # What's changing?
openspec validate --strict # Is it correct?
openspec archive [change] [--yes|-y]  # Mark complete (add --yes for automation)
```

記住：規格（Specs）是真實的依據。變更（Changes）是提案。請保持兩者同步。
