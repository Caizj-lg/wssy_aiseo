# GEO 后台管理系统 - 项目结构说明

## 项目概述
GEO 后台管理系统是一个用于 AI 问答营销优化的管理平台，采用标准的 React 架构开发。

## 技术栈
- React 18.3.1
- TypeScript
- React Router DOM 7.11.0
- Tailwind CSS 4.1.12
- Recharts 2.15.2 (数据可视化)
- Lucide React (图标库)

## 项目结构

```
src/
├── app/
│   ├── components/          # 通用组件（不带业务逻辑）
│   │   ├── Layout/         # 布局组件
│   │   │   ├── Header.tsx       # 顶部导航栏
│   │   │   ├── Sidebar.tsx      # 侧边栏菜单
│   │   │   └── Layout.tsx       # 主布局容器
│   │   ├── figma/          # Figma 相关组件
│   │   └── ui/             # UI 基础组件
│   │
│   ├── pages/              # 页面级组件（一页一个）
│   │   ├── Dashboard/      # 数据总览页面
│   │   │   ├── index.tsx            # Dashboard 主页面
│   │   │   └── components/          # Dashboard 专用组件
│   │   │       ├── StatCard.tsx            # 统计卡片
│   │   │       ├── PlatformDistribution.tsx # 平台分布图表
│   │   │       ├── RankingSection.tsx       # 榜单区域
│   │   │       └── DataTable.tsx            # 数据表格
│   │   │
│   │   └── ContentList/    # 内容列表页面
│   │       └── index.tsx
│   │
│   ├── routes/             # 路由配置
│   │   └── index.tsx       # React Router 配置
│   │
│   ├── services/           # 接口层（API 调用）
│   │   └── content.ts      # 内容相关 API（目前为 mock）
│   │
│   ├── store/              # 全局状态管理
│   │   └── index.ts        # 状态管理配置
│   │
│   ├── utils/              # 工具函数
│   │   └── format.ts       # 格式化工具
│   │
│   ├── hooks/              # 自定义 Hooks
│   │   └── useAuth.ts      # 认证相关 Hook
│   │
│   └── App.tsx             # 应用入口
│
└── styles/                 # 全局样式
    ├── fonts.css
    └── theme.css
```

## 核心功能模块

### 1. 布局系统 (Layout)
- **Header**: 顶部导航栏，包含系统标题、通知、用户信息
- **Sidebar**: 侧边栏菜单，支持响应式设计
- **Layout**: 主布局容器，整合 Header 和 Sidebar

### 2. Dashboard 页面
#### 核心组件：
- **StatCard**: 统计卡片，显示总词量、收录词量等关键指标
- **PlatformDistribution**: 平台问题占比可视化（饼图 + 表格）
- **RankingSection**: 营销榜单和品牌榜单切换显示
- **DataTable**: 数据列表展示，支持搜索、筛选、分页

### 3. 路由系统
使用 React Router DOM v7，配置如下：
- `/` - Dashboard 数据总览
- `/content-list` - 内容列表
- `/analytics` - 数据分析（开发中）
- `/settings` - 系统设置（开发中）

### 4. 服务层 (Services)
- **contentService**: 内容管理相关 API
  - `getContentList()`: 获取内容列表
  - `getPlatformStats()`: 获取平台统计数据
  - `searchContent()`: 搜索内容

### 5. 工具函数 (Utils)
- `formatDate()`: 日期格式化
- `formatNumber()`: 数字格式化
- `formatPercentage()`: 百分比格式化
- `truncateText()`: 文本截断

### 6. 自定义 Hooks
- **useAuth**: 用户认证管理
  - 用户登录/登出
  - 认证状态检查

## 响应式设计
- 桌面端优先（1920×1080）
- 最小支持分辨率：1366×768
- 移动端侧边栏通过遮罩层交互

## 颜色主题
- 主色：蓝色系 (#165DFF)
- 辅助色：青色、紫色调
- 背景：渐变蓝色 (from-blue-900 to-blue-800)

## 开发建议

### 添加新页面
1. 在 `pages/` 下创建新文件夹
2. 创建 `index.tsx` 作为页面入口
3. 在 `routes/index.tsx` 中添加路由配置

### 添加新的 API 服务
1. 在 `services/` 中创建对应的服务文件
2. 使用 TypeScript 定义接口类型
3. 现阶段使用 mock 数据，生产环境替换为真实 API

### 状态管理
- 当前为占位实现
- 可集成 Redux、Zustand 或使用 Context API
- 建议用于全局用户状态、主题配置等

## 待开发功能
- [ ] 内容详情页面
- [ ] 数据分析页面
- [ ] 系统设置页面
- [ ] 用户登录页面
- [ ] 真实 API 集成
- [ ] 状态管理完善

## 部署说明
```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 生产构建
npm run build
```

## 注意事项
1. 所有组件使用 TypeScript 类型定义
2. 遵循组件单一职责原则
3. API 调用统一通过 services 层
4. 样式使用 Tailwind CSS
5. 图标使用 lucide-react
