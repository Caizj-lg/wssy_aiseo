# GEO 后台管理系统

> AI 问答营销优化平台

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 项目特点

✅ **标准 React 架构** - 清晰的文件组织和模块化设计  
✅ **TypeScript 类型安全** - 完整的类型定义  
✅ **响应式设计** - 支持桌面和移动端  
✅ **数据可视化** - 使用 Recharts 实现图表展示  
✅ **路由管理** - React Router DOM v7  
✅ **现代化 UI** - Tailwind CSS + Lucide Icons  

## 核心功能

### 📊 数据总览
- 实时统计数据展示
- 多平台问题占比分析
- 营销/品牌榜单对比
- 关键词数据列表

### 🎨 设计系统
- 深蓝色科技风格
- 卡片式布局
- 流畅的交互动画
- 统一的视觉规范

### 🔧 技术架构
- **前端框架**: React 18.3.1
- **路由**: React Router DOM 7.11.0
- **样式**: Tailwind CSS 4.1.12
- **图表**: Recharts 2.15.2
- **图标**: Lucide React 0.487.0

## 项目结构

```
src/app/
├── components/   # 通用组件
├── pages/       # 页面组件
├── routes/      # 路由配置
├── services/    # API 服务
├── store/       # 状态管理
├── utils/       # 工具函数
└── hooks/       # 自定义 Hooks
```

详细的项目结构说明请参考 [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)

## 开发指南

### 添加新页面

1. 在 `src/app/pages/` 创建页面文件夹
2. 在 `src/app/routes/index.tsx` 添加路由
3. 在侧边栏 `Sidebar.tsx` 添加菜单项

### 接口集成

当前使用 mock 数据，生产环境替换为真实 API：

```typescript
// src/app/services/content.ts
export const contentService = {
  getContentList: async () => {
    // 替换为真实 API 调用
    const response = await fetch('/api/content');
    return response.json();
  }
};
```

## 浏览器支持

- Chrome (最新)
- Firefox (最新)
- Safari (最新)
- Edge (最新)

## 部署指南

### 方式一：使用 Vercel 部署（推荐）

Vercel 是最简单快速的部署方式，支持自动部署和免费 HTTPS。

#### 步骤：

1. **访问 Vercel**
   - 打开 [https://vercel.com](https://vercel.com)
   - 使用 GitHub 账号登录

2. **导入项目**
   - 点击 "Add New Project"
   - 选择你的 GitHub 仓库 `Caizj-lg/wssy_aiseo`
   - Vercel 会自动检测到这是一个 Vite 项目

3. **配置项目**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - 其他设置保持默认即可

4. **部署**
   - 点击 "Deploy"
   - 等待构建完成（通常 1-2 分钟）
   - 部署完成后会获得一个访问链接，例如：`https://wssy-aiseo.vercel.app`

5. **自动部署**
   - 之后每次推送到 GitHub 的 master 分支，Vercel 会自动重新部署

### 方式二：使用 Netlify 部署

1. 访问 [https://netlify.com](https://netlify.com) 并登录
2. 点击 "Add new site" → "Import an existing project"
3. 选择 GitHub 仓库
4. 构建设置：
   - Build command: `npm run build`
   - Publish directory: `dist`
5. 点击 "Deploy site"

### 方式三：使用 GitHub Pages

项目已配置 GitHub Actions 自动部署到 GitHub Pages。

#### 步骤：

1. **启用 GitHub Pages**
   - 进入仓库设置：`Settings` → `Pages`
   - 在 "Source" 部分，选择 "GitHub Actions"

2. **推送代码触发部署**
   - 将代码推送到 master 分支
   - GitHub Actions 会自动构建并部署
   - 访问地址：`https://caizj-lg.github.io/wssy_aiseo/`

3. **自定义域名（可选）**
   - 在 Pages 设置中添加自定义域名
   - 如果使用自定义域名，需要修改 `vite.config.ts` 中的 `base` 配置

**注意**：如果使用 GitHub Pages，需要取消注释 `vite.config.ts` 中的 `base: '/wssy_aiseo/'` 配置。

## 许可证

© 2025 GEO System. All rights reserved.
