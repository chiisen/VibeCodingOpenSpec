# 專案總覽

## 定位
VibeCodingOpenSpec 專案聚焦於彙整 OpenSpec 官方內容，打造一頁式說明網站，協助開發者快速理解 Spec-driven development 與 AI 協作流程。主要素材來自 `https://github.com/Fission-AI/OpenSpec`，並以繁體中文呈現重點，同時保留必要的英文字詞。

## 技術棧
- Node.js >= 20.19.0 作為開發環境，確保可執行 OpenSpec CLI。
- 靜態一頁式網站：預設採用原生 HTML、CSS、TypeScript，必要時可引入 Vite 作為開發伺服器與建置工具。
- 若需導入第三方 UI 工具（例：Tailwind CSS），須先於 OpenSpec 變更提案中說明理由。

## 專案規範

### 程式碼風格
- HTML 採語意化標籤並設定 `lang="zh-Hant"` 與適當的 meta viewport。
- CSS 優先使用 rem/em 作為尺寸單位，確保排版可縮放，並維持亮暗雙方案的基本支援。
- JavaScript / TypeScript 模組化管理組件與資料，避免未經核可的外部依賴。

### 架構原則
- 單頁結構比照 `AGENTS.md` 所列七個核心區塊，可彈性增補 FAQ 或 CTA 區段，但需保持資訊層次清楚。
- 靜態資源放置於 `docs/` 或既有的 `images/` 目錄；新增資源需在 `README.md` 註記來源與授權。
- 共用文案（如賣點、CTA 標語）整理成資料物件，便於日後擴充其他語系或導入 CMS。

### 開發流程
- 每次內容或版面調整，先建立 `openspec/changes/<change-id>/`，撰寫 `proposal.md`、`tasks.md` 與必要的規格差異。
- 實作完成後以 360px（手機）與 1280px（桌機）寬度進行人工檢查，確認排版、對比與焦點順序。
- 發佈前執行 `openspec validate <change-id> --strict`，並在 `tasks.md` 勾選完成項目。

## 利害關係人
- 專案發起人：chiisen - 確認中文敘事與產品定位。
- 核心讀者：對 AI 協作與需求規格管理有興趣的開發者、產品經理。
- 技術協作者：AI coding assistants（Codex、Cursor 等），需遵循 `AGENTS.md` 指引。

## 外部整合
- 內容來源：`https://github.com/Fission-AI/OpenSpec` README 與相關文件。
- 行動呼籲：npm 套件頁、Discord 社群、X（@0xTab）為主要對外連結。
- 後續若需串接其他服務（如表單或分析），必須在變更提案中評估資料隱私與維運需求。

