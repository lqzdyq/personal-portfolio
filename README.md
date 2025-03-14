# 个人介绍网站

这是一个使用 Next.js 14、TypeScript 和 Shadcn/ui 开发的现代化个人介绍网站。

## 技术栈

- Next.js 14 (App Router)
- TypeScript
- Shadcn/ui 组件库
- Tailwind CSS
- Google Fonts (LXGW WenKai)

## 项目结构

```
├── app/                # Next.js 14 App Router 目录
├── components/         # 可复用组件
├── lib/               # 工具函数和配置
├── hooks/             # 自定义 Hooks
├── public/            # 静态资源
└── styles/            # 全局样式
```

## 开发说明

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run dev
```

### 构建项目

```bash
npm run build
```

## 部署说明

本项目已配置好使用 Netlify 进行自动部署。以下是部署步骤：

1. 在 [Netlify](https://www.netlify.com) 注册账号
2. 点击 "New site from Git" 按钮
3. 选择你的 Git 仓库并授权
4. 选择包含本项目的仓库
5. 部署配置会自动从 netlify.toml 文件读取，包括：
   - 构建命令：`npm run build`
   - 发布目录：`out`
   - Node.js 版本：18
6. 点击 "Deploy site" 开始部署

部署完成后，Netlify 会提供一个默认的域名（例如：your-site-name.netlify.app）。你也可以在 Netlify 的域名设置中添加自定义域名。

## 性能优化

- 使用 Next.js Image 组件优化图片加载
- 组件懒加载
- 页面加载性能优化
- 资源预加载