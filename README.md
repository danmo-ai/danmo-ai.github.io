# Danmo Website

[English](README.md) · [中文](README.zh-CN.md)

Official marketing site for [Danmo](https://github.com/danmo-ai) — a local-first AI suite for create, collaborate, and inbox.

**Live:** [https://danmo-ai.github.io/](https://danmo-ai.github.io/)

## Overview

This repository is the organization GitHub Pages site (`danmo-ai.github.io`). It presents Danmo’s three products and is built with **Vue 3**, **Vite**, and **TypeScript**.

## Products

| Product | Description |
| --- | --- |
| **Make** | Local image & video generation. Plugin-style backends (MLX / CUDA), infinite canvas, and models you control. |
| **Work** | Pure LLM-driven multi-agent collaboration. One thinking chain for long-horizon tasks — resume, replay, and inspect the stream. |
| **Inbox** | AI email organizer. Syncs IMAP and turns mail into Today, topics, and todos. |

Routes: `/` · `/make` · `/work` · `/inbox`  
Legacy paths `/studio`, `/teams`, and `/mail` redirect to the new routes.

## Requirements

- Node.js 22+
- npm

## Develop

```bash
npm install
npm run dev
```

## Build & preview

```bash
npm run build
npm run preview
```

`npm run build` type-checks with `vue-tsc`, outputs to `dist/`, and copies `index.html` to `404.html` for GitHub Pages SPA routing.

## Deploy

Pushes to `main` trigger [GitHub Actions](.github/workflows/deploy.yml) and publish to GitHub Pages. Manual runs are available via **workflow_dispatch**.

## Project layout

```
src/
  components/   Shared UI (header, footer, product hero)
  views/        Home, Make, Work, Inbox pages
  router/       Vue Router + legacy redirects
  styles/       Global styles
public/         Favicon, icons, screenshots
brand/          Brand SVG assets
```
