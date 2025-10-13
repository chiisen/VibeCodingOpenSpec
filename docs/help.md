# 中英對照 / Traditional Chinese ↔ English

Usage: openspec [options] [command]
用法：openspec [選項] [指令]

AI-native system for spec-driven development
為規格驅動開發而設計的 AI 原生系統

Options (選項):
  -V, --version                    output the version number
  -V, --version                    輸出版本號
  --no-color                       Disable color output
  --no-color                       關閉顏色輸出
  -h, --help                       display help for command
  -h, --help                       顯示指令說明

Commands (命令):
  init [path]                      Initialize OpenSpec in your project
  init [path]                      在你的專案中於指定路徑初始化 OpenSpec
  update [path]                    Update OpenSpec instruction files
  update [path]                    更新 OpenSpec 指令/說明檔案
  list [options]                   List items (changes by default). Use --specs to list specs.
  list [options]                   列出項目（預設列出變更）。使用 --specs 可列出規格（specs）。
  view                             Display an interactive dashboard of specs and changes
  view                             顯示互動式的規格與變更儀表板
  change                           Manage OpenSpec change proposals
  change                           管理 OpenSpec 的變更提案
  archive [options] [change-name]  Archive a completed change and update main specs
  archive [options] [change-name]  封存已完成的變更並更新主要規格
  spec                             Manage and view OpenSpec specifications
  spec                             管理與檢視 OpenSpec 的規格
  validate [options] [item-name]   Validate changes and specs
  validate [options] [item-name]   驗證變更與規格
  show [options] [item-name]       Show a change or spec
  show [options] [item-name]       顯示單一變更或規格
  help [command]                   display help for command
  help [command]                   顯示指定命令的說明