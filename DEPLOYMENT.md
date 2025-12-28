# GitHub Pages 部署指南

## 📋 部署步骤

### 第一步：在 GitHub 上创建工作流文件

由于 GitHub 的安全限制，工作流文件需要在 GitHub 网页上手动创建：

1. **访问你的仓库**
   - 打开：https://github.com/Caizj-lg/wssy_aiseo

2. **创建工作流文件**
   - 点击 "Add file" → "Create new file"
   - 文件路径输入：`.github/workflows/deploy.yml`
   - 复制以下内容到文件中：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - master
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

3. **提交文件**
   - 点击 "Commit new file"
   - 提交信息：`Add GitHub Actions workflow for Pages deployment`

### 第二步：启用 GitHub Pages

1. **进入仓库设置**
   - 在仓库页面，点击 `Settings` 标签
   - 在左侧菜单找到 `Pages`

2. **配置 Pages 源**
   - 在 "Source" 部分，选择 **"GitHub Actions"**
   - 保存设置

### 第三步：触发首次部署

有两种方式触发部署：

#### 方式 A：自动触发（推荐）
- 工作流文件创建后，推送到 master 分支的任何更改都会自动触发部署
- 你可以做一个小的更改（比如更新 README）并推送

#### 方式 B：手动触发
1. 进入仓库的 `Actions` 标签页
2. 在左侧选择 "Deploy to GitHub Pages" 工作流
3. 点击 "Run workflow" 按钮
4. 选择 `master` 分支
5. 点击绿色的 "Run workflow" 按钮

### 第四步：等待部署完成

1. **查看部署进度**
   - 进入 `Actions` 标签页
   - 点击正在运行的工作流
   - 查看构建和部署进度

2. **部署成功**
   - 当看到绿色的 ✓ 标记时，部署完成
   - 通常需要 2-3 分钟

### 第五步：访问你的网站

部署完成后，访问地址：
**https://caizj-lg.github.io/wssy_aiseo/**

> ⚠️ 注意：首次部署后，可能需要等待几分钟才能访问。如果无法访问，请检查 Actions 中的部署状态。

## 🔄 后续更新

之后每次你推送代码到 `master` 分支，GitHub Actions 会自动：
1. 检测到代码更改
2. 自动运行构建
3. 自动部署到 GitHub Pages

无需任何手动操作！

## 🐛 常见问题

### 1. 部署失败怎么办？

- 检查 `Actions` 标签页中的错误信息
- 确保 `vite.config.ts` 中 `base: '/wssy_aiseo/'` 已启用
- 确保所有依赖都已正确安装

### 2. 网站显示 404？

- 确保访问的 URL 包含仓库名：`/wssy_aiseo/`
- 检查 GitHub Pages 设置中源是否选择了 "GitHub Actions"
- 等待几分钟后重试（DNS 传播需要时间）

### 3. 路由不工作？

- 确保 `public/404.html` 文件存在
- 检查浏览器控制台是否有错误

### 4. 如何查看部署日志？

- 进入 `Actions` 标签页
- 点击最新的工作流运行
- 查看各个步骤的详细日志

## 📝 配置说明

### 已完成的配置

✅ **Vite 配置** (`vite.config.ts`)
- 已设置 `base: '/wssy_aiseo/'` 适配 GitHub Pages 路径

✅ **404 处理** (`public/404.html`)
- 已创建 404.html 文件，确保 SPA 路由正常工作

✅ **构建配置**
- 项目使用标准的 Vite 构建流程
- 输出目录：`dist`

### 工作流说明

GitHub Actions 工作流包含两个任务：

1. **build** - 构建项目
   - 安装依赖
   - 运行 `npm run build`
   - 上传构建产物

2. **deploy** - 部署到 Pages
   - 将构建产物部署到 GitHub Pages
   - 自动配置 HTTPS 和 CDN

## 🎉 完成！

配置完成后，你的后台管理系统就可以通过 GitHub Pages 链接访问了！

