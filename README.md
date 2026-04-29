# demo-test-website-deploy

> **⚠️ 警告：本项目仅为技术测试与演示用途，无任何生产价值。**
>
> 这是一个用于验证 GitHub Pages 部署 Nuxt UI Docs 站点的实验性项目，内容来源于产研分享会的草稿文档，不代表任何正式观点或立场。

## 项目简介

本项目基于 [Nuxt UI Docs 模板](https://ui.nuxt.com/getting-started/installation/nuxt) 初始化，用于演示：

- Nuxt UI + Nuxt Content 构建文档站点
- GitHub Actions 自动构建与部署到 GitHub Pages
- 静态站点生成（Static Site Generation）配置

## 技术栈

- [Nuxt](https://nuxt.com/) — Vue 全栈框架
- [Nuxt UI](https://ui.nuxt.com/) — UI 组件库
- [Nuxt Content](https://content.nuxt.com/) — 基于文件的 CMS
- [Tailwind CSS v4](https://tailwindcss.com/) — 原子化 CSS
- [pnpm](https://pnpm.io/) — 包管理器

## 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

## 部署

本项目通过 GitHub Actions 自动部署到 GitHub Pages：

- 推送至 `main` 分支触发自动构建
- 构建产物部署到 `gh-pages` 分支
- 访问地址：[https://lionad-morotar.github.io/demo-test-website-deploy/](https://lionad-morotar.github.io/demo-test-website-deploy/)

## 许可证

MIT — 但再次提醒，本项目仅供学习测试，请勿用于生产环境。
