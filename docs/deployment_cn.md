# 用 GitHub Pages 发布个人主页

这个项目会导出静态网页。`.github/workflows/deploy.yml` 会在每次推送到 `main` 后自动构建，并发布 `out/` 文件夹。

1. 登录 GitHub，创建一个**公开**仓库，名称必须是 `<你的用户名>.github.io`。创建时不要勾选 README、License 或 `.gitignore`，保持空仓库。
2. 在本项目文件夹中连接仓库并推送：

   ```bash
   git remote add origin https://github.com/<你的用户名>/<你的用户名>.github.io.git
   git push -u origin main
   ```

3. 打开仓库的 **Settings → Pages**，将 **Build and deployment → Source** 设为 **GitHub Actions**。
4. 等待 **Deploy personal website to GitHub Pages** 工作流完成，然后访问 `https://<你的用户名>.github.io/`。

以后修改网站，只需提交并推送到 `main`。工作流会运行 `npm ci`、构建网页，并把 `out/` 上传到 GitHub Pages。它也会加入 `.nojekyll`，让 Next.js 的 `_next` 资源正常加载。

仓库名称很重要：本站的资源路径从 `/` 开始，目前适用于根域名下的个人主页。如果要放到 `/<仓库名>/`，需要先调整代码中的路径。

`public/` 下的简历 PDF、照片和论文图片会公开。项目根目录中的简历源文件及重复的论文 PDF 已通过 `.gitignore` 排除。
