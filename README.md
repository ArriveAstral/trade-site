# 外贸产品展示网站

这是一个面向海外客户的外贸产品展示网站项目。当前版本是第一阶段基础骨架，重点是让客户能够浏览公司信息、查看产品列表和产品详情，并通过 WhatsApp、Email、微信二维码等方式联系销售。

## 项目目标

- 展示公司定位和核心产品
- 提供产品列表页和产品详情页
- 支持移动端浏览
- 支持基础 SEO
- 支持 WhatsApp、Email、微信二维码等联系入口
- 先不引入复杂后端，后续可扩展后台或 CMS

## 技术栈

- Next.js App Router
- TypeScript
- Tailwind CSS
- React
- ESLint

## 页面结构

```txt
/
  首页，公司介绍、核心产品、优势和联系入口

/products
  产品列表页

/products/[slug]
  产品详情页，基于产品 slug 静态生成

/about
  公司介绍页，占位版本

/contact
  联系页面，包含 WhatsApp、Email、微信二维码占位

/sitemap.xml
  站点地图

/robots.txt
  搜索引擎爬虫规则
```

## 目录结构

```txt
src/
  app/
    layout.tsx
    page.tsx
    about/
    contact/
    products/
    robots.ts
    sitemap.ts

  components/
    common/
    contact/
    layout/
    product/

  data/
    products.ts

  lib/
    products.ts
```

## 本地开发

安装依赖：

```bash
npm install
```

启动开发服务器：

```bash
npm run dev
```

打开浏览器访问：

```txt
http://localhost:3000
```

## 常用命令

```bash
npm run dev
```

启动本地开发服务器。

```bash
npm run build
```

构建生产版本，并检查页面是否可以正常生成。

```bash
npm run start
```

启动生产构建后的服务。

```bash
npm run lint
```

运行 ESLint 检查。

## 产品数据

当前产品数据暂时维护在：

```txt
src/data/products.ts
```

这样做的原因是第一阶段不引入数据库和后台，先保证页面结构、SEO、响应式布局和询盘路径完整。后续可以把这份数据迁移到 CMS、数据库或独立后台系统。

## SEO 基础

当前已经包含：

- 全站基础 metadata
- 页面级 title 和 description
- 产品详情页动态 metadata
- sitemap.xml
- robots.txt
- 产品详情页静态生成
- 移动端响应式布局

正式上线前需要替换：

- 真实域名
- 公司名称
- 公司简介
- 产品名称和规格
- 产品图片
- 联系方式
- 微信二维码
- SEO 标题和描述

## 部署建议

推荐部署到 Vercel：

1. 将项目推送到 GitHub
2. 在 Vercel 导入仓库
3. 使用默认 Next.js 构建配置
4. 绑定自定义域名
5. 提交 sitemap 到 Google Search Console

后续如果需要更低成本部署，也可以评估 Cloudflare Pages、Netlify 或静态导出方案。

## 后续规划

第一阶段：

- 完成首页、产品列表、产品详情、联系页面
- 完成基础 SEO
- 完成移动端适配
- 完成核心联系入口

第二阶段：

- 替换真实产品数据和图片
- 增加分类页
- 增加产品筛选
- 完善英文内容和 SEO 文案
- 增加结构化数据

第三阶段：

- 接入 CMS 或后台管理系统
- 增加询盘表单
- 增加邮件通知
- 增加博客或新闻
- 增加多语言版本
