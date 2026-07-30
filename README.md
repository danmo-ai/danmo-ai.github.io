# Danmo Website · 丹墨官网

[English](#english) · [中文](#中文)

Official marketing site for [Danmo](https://github.com/danmo-ai) — a local-first AI suite for create, collaborate, and inbox.

丹墨（Danmo）官方营销站点 —— 本地优先的 AI 套件，覆盖创作、协作与收件箱。

**Live / 线上地址：** [https://danmo-ai.github.io/](https://danmo-ai.github.io/)

---

## English

### Overview

This repository is the organization GitHub Pages site (`danmo-ai.github.io`). It presents Danmo’s three products and is built with **Vue 3**, **Vite**, and **TypeScript**.

### Products

| Product | Description |
| --- | --- |
| **Make** | Local image & video generation. Plugin-style backends (MLX / CUDA), infinite canvas, and models you control. |
| **Work** | Pure LLM-driven multi-agent collaboration. One thinking chain for long-horizon tasks — resume, replay, and inspect the stream. |
| **Inbox** | AI email organizer. Syncs IMAP and turns mail into Today, topics, and todos. |

Routes: `/` · `/make` · `/work` · `/inbox`  
Legacy paths `/studio`, `/teams`, and `/mail` redirect to the new routes.

### Requirements

- Node.js 22+
- npm

### Develop

```bash
npm install
npm run dev
```

### Build & preview

```bash
npm run build
npm run preview
```

`npm run build` type-checks with `vue-tsc`, outputs to `dist/`, and copies `index.html` to `404.html` for GitHub Pages SPA routing.

### Deploy

Pushes to `main` trigger [GitHub Actions](.github/workflows/deploy.yml) and publish to GitHub Pages. Manual runs are available via **workflow_dispatch**.

### Project layout

```
src/
  components/   Shared UI (header, footer, product hero)
  views/        Home, Make, Work, Inbox pages
  router/       Vue Router + legacy redirects
  styles/       Global styles
public/         Favicon, icons, screenshots
brand/          Brand SVG assets
```

---

## 中文

### 简介

本仓库是组织级 GitHub Pages 站点（`danmo-ai.github.io`），用于展示丹墨的三款产品。技术栈为 **Vue 3**、**Vite**、**TypeScript**。

### 产品

| 产品 | 说明 |
| --- | --- |
| **Make** | 本地图像与视频生成。插件式后端（MLX / CUDA）、无限画布，模型由你掌控。 |
| **Work** | 纯 LLM 驱动的多智能体协作。一条思维链支撑长程任务 —— 可恢复、可回放、可检视。 |
| **Inbox** | AI 邮件信息流整理。同步 IMAP，将邮件组织为今日、主题与待办。 |

路由：`/` · `/make` · `/work` · `/inbox`  
旧路径 `/studio`、`/teams`、`/mail` 会重定向到上述新路由。

### 环境要求

- Node.js 22+
- npm

### 本地开发

```bash
npm install
npm run dev
```

### 构建与预览

```bash
npm run build
npm run preview
```

`npm run build` 会用 `vue-tsc` 做类型检查，产物输出到 `dist/`，并复制 `index.html` 为 `404.html`，以支持 GitHub Pages 上的 SPA 路由。

### 部署

推送到 `main` 后，由 [GitHub Actions](.github/workflows/deploy.yml) 自动发布到 GitHub Pages。也可通过 **workflow_dispatch** 手动触发。

### 目录结构

```
src/
  components/   共用 UI（页头、页脚、产品 Hero）
  views/        首页与 Make / Work / Inbox 页面
  router/       路由与旧路径重定向
  styles/       全局样式
public/         Favicon、图标、截图
brand/          品牌 SVG 资源
```
