# VibeCodingOpenSpec
Vibe Coding OpenSpec - Spec-driven development for AI coding assistants.  

![OpenSpec](./images/OpenSpec.png)

# 介紹
Spec-Kit 適合 0 => 1，迭代時會非常混亂。  
OpenSpec 則更適合迭代時開發使用。  

# 安裝
參考: https://github.com/Fission-AI/OpenSpec  
Node.js >= 20.19.0 - Check your version with node --version  
```bash
npm install -g @fission-ai/openspec@latest
```

```bash
openspec --version
```
參考: [help](./docs/help.md)

```bash
cd my-project
```

```bash
openspec init
```
參考: [init](./docs/init.md)

# 開始 Vibe Coding
執行 codex，並詢問:  
```bash
要如何開始專案?
```
Codex 會開始分析專案，並提示下一步。  
再次輸入  
```bash
依據 https://github.com/Fission-AI/OpenSpec 的內容的彙整製作一頁式的網頁，請幫我填寫 project.md 與 AGENTS.md。
```
在執行 Codex 中可以詢問`下一步是甚麼?`  
並要求`一律用中文回答`  
如果需要建立文件可以用下面的方式請 Codex 幫忙建立  
```bash
幫我依據需求建立 proposal.md 與 tasks.md
```
如果要求檢查:
```bash
openspec validate add-one-page-overview --strict
```
檢查後能修正一些文件問題  


