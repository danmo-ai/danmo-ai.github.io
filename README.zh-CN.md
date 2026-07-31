# 丹墨官网

[English](README.md) · [中文](README.zh-CN.md)

[丹墨（Danmo）](https://github.com/danmo-ai) 官方营销站点 —— 本地优先的 AI 套件，覆盖创作、协作与收件箱。

**线上地址：** [https://danmo-ai.github.io/](https://danmo-ai.github.io/)

## 简介

本仓库是组织级 GitHub Pages 站点（`danmo-ai.github.io`），用于展示丹墨的三款产品。技术栈为 **Vue 3**、**Vite**、**TypeScript**。

## 产品

| 产品 | 说明 |
| --- | --- |
| **Make** | 本地图像与视频生成。插件式后端（MLX / CUDA）、无限画布，模型由你掌控。 |
| **Work** | 纯 LLM 驱动的多智能体协作。一条思维链支撑长程任务 —— 可恢复、可回放、可检视。 |
| **Inbox** | AI 邮件信息流整理。同步 IMAP，将邮件组织为今日、主题与待办。 |

路由：`/` · `/make` · `/work` · `/inbox`  
旧路径 `/studio`、`/teams`、`/mail` 会重定向到上述新路由。

## 环境要求

- Node.js 22+
- npm

## 本地开发

```bash
npm install
npm run dev
```

## 构建与预览

```bash
npm run build
npm run preview
```

`npm run build` 会用 `vue-tsc` 做类型检查，产物输出到 `dist/`，并复制 `index.html` 为 `404.html`，以支持 GitHub Pages 上的 SPA 路由。

## 部署

推送到 `main` 后，由 [GitHub Actions](.github/workflows/deploy.yml) 自动发布到 GitHub Pages。也可通过 **workflow_dispatch** 手动触发。

## 目录结构

```
src/
  components/   共用 UI（页头、页脚、产品 Hero）
  views/        首页与 Make / Work / Inbox 页面
  router/       路由与旧路径重定向
  styles/       全局样式
public/         Favicon、图标、截图
brand/          品牌 SVG 资源
```
