# Shibo Jin 个人主页

网站基于 [PRISM](https://github.com/xyjoey/PRISM) 模板制作，内容来自 Shibo Jin 的简历与论文。网站为英文单页布局，导航会滚动到 About、News 和 Publications；点击 CV 会在新标签页打开简历 PDF。网站可导出静态网页。

## 本地运行

需要 Node.js 22 或更新版本。

```bash
npm ci
npm run dev
```

打开 `http://localhost:3000`。

## 构建

```bash
npm run build
```

静态网页位于 `out/`，可以部署到任意静态托管平台。

## 发布到 GitHub Pages

创建名为 `<你的用户名>.github.io` 的公开仓库，把本项目推送到 `main`，再到 **Settings → Pages** 将发布来源设为 **GitHub Actions**。之后每次推送都会自动更新网站。详细步骤见[部署指南](docs/deployment_cn.md)。

## 修改内容

- `content/`：英文介绍、导航和 BibTeX 论文信息。
- `public/papers/`：研究图示与公开论文 PDF。
- `public/shibo-jin-cv.pdf`：网站提供下载的简历。

Environment Duels 目前仍在评审中。网站仅展示研究简介，不公开评审稿 PDF。

## 来源

基于 [Jiale Liu 的 PRISM](https://github.com/xyjoey/PRISM)，遵循项目的 [MIT 许可](LICENSE)。个人内容、照片、论文和研究图示为本站增补。
