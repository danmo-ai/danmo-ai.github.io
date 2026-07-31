# 丹墨官网

[English](README.md) · [中文](README.zh-CN.md)

[丹墨（Danmo）](https://github.com/danmo-ai) 营销站点 —— 本地优先 AI，覆盖创作、协作与收件箱。

**线上地址：** https://danmo-ai.github.io/

## 技术栈

Vue 3 · Vite · TypeScript · Vue Router

以组织级 GitHub Pages 站点（`danmo-ai.github.io`）发布。

## 页面

| 路径 | 产品 | 内容 |
| --- | --- | --- |
| `/` | 首页 | 套件总览 |
| `/make` | Make | 本地图像与视频生成（MLX / CUDA） |
| `/work` | Work | LLM 驱动的多智能体协作 |
| `/inbox` | Inbox | AI 邮件信息流 |

旧路由 `/studio`、`/teams`、`/mail` 会重定向到上表路径。

## 快速开始

需要 Node.js 22+。

```bash
npm install
npm run dev
```

| 命令 | 作用 |
| --- | --- |
| `npm run dev` | 启动本地开发服务 |
| `npm run build` | 类型检查、构建到 `dist/`，并生成 SPA 用的 `404.html` |
| `npm run preview` | 预览生产构建 |

## 部署

推送到 `main`（或手动触发 workflow）。CI 通过 [GitHub Actions](.github/workflows/deploy.yml) 构建并发布。

## 目录

```
src/
  components/   页头、页脚、产品 Hero
  views/        页面视图
  router/       路由与重定向
  styles/       全局样式
public/         Favicon、图标、截图
brand/          品牌 SVG
```
