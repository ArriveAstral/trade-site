# Project State

## Overview

外贸小家电产品展示网站（Global Trade Products），面向海外买家展示面包机、早餐机、咖啡机、微波炉等小家电产品。

- **Vercel 预览域**: `trade-site-2e8cnsy0m-wangxunyus-projects.vercel.app`
- **阶段**: 第一阶段基础骨架完成，待填充真实数据

## Tech Stack

| 层面 | 技术 |
|------|------|
| Framework | Next.js 16.2.6 (App Router, Turbopack) |
| Language | TypeScript 5 (strict) |
| Styling | Tailwind CSS 4 |
| React | 19.2.4 |
| Deploy | Vercel |

## Directory Structure

```
src/
  app/                         # Next.js App Router
    layout.tsx                 # Root layout: Header + Footer + metadata
    page.tsx                   # Homepage
    globals.css                # Global styles + Tailwind config + CSS variables
    robots.ts / sitemap.ts     # SEO
    about/page.tsx             # About (placeholder)
    contact/page.tsx           # Contact page
    products/page.tsx          # Product listing
    products/[slug]/page.tsx   # Product detail (static generation)

  components/
    common/Container.tsx       # Max-width wrapper (max-w-7xl)
    common/SectionHeading.tsx  # Eyebrow + title + description
    layout/Header.tsx          # Sticky header, desktop nav + mobile hamburger
    layout/Footer.tsx          # Simple copyright footer
    product/ProductCard.tsx    # Product card with image, specs, link
    product/ProductList.tsx    # Category filter tabs + animated product grid
    contact/ContactPanel.tsx   # WhatsApp, Email, WeChat QR panel

  data/
    company.ts                 # Company info (name, email, WhatsApp, WeChat, etc.)
    products.ts                # 14 sample products across 4 categories + Product type

  lib/
    products.ts                # getProductBySlug()

public/images/
  products/                    # 14 product SVG images
  contact/wechat-qr.jpg        # WeChat QR code
```

## Completed Tasks

### 2026-05-17 — Visual Style Overhaul (外贸风格改造)

将网站从 SaaS/技术站风格转为外贸 B2B 风格。

**Color system** (`globals.css`):
- Accent: `blue-700` → `#dc2626` (red-600)
- Background: `#f7f8fb` → `#ffffff` (pure white)
- Text primary: `#111827` (slate-950) → `#1a1a1a` (gray-900)
- Text secondary: `slate-600` → `gray-500`
- Borders: `slate-200/300` → `gray-200/300`
- Surface/card bg: `slate-50` → `#f7f7f7` (surface)
- Selection: blue → red tint
- CTA buttons: near-black → red accent

**CSS variables defined:**
```css
--background: #ffffff
--foreground: #1a1a1a
--accent: #dc2626
--accent-hover: #b91c1c
--surface: #f7f7f7
--border: #e5e5e5
```

**Files modified (10 files):**
- `src/app/globals.css` — CSS variables, theme tokens, selection color
- `src/app/page.tsx` — Hero, CTA buttons, Company Snapshot, section backgrounds
- `src/app/about/page.tsx` — Eyebrow color, text colors
- `src/app/contact/page.tsx` — Eyebrow color, text colors, info cards
- `src/app/products/page.tsx` — SectionHeading inherits new colors
- `src/app/products/[slug]/page.tsx` — Back link, image bg, text colors, specs table, features list
- `src/components/layout/Header.tsx` — Logo, nav links, CTA button, mobile menu
- `src/components/layout/Footer.tsx` — Text colors, link hover
- `src/components/common/SectionHeading.tsx` — Eyebrow, title, description colors
- `src/components/product/ProductCard.tsx` — Card border, image bg, category label, text, link, hover shadow

### 2026-05-19 — 首页文案打磨 + 统计面板动效 + 全部产品图重绘

**首页英文文案** (`src/app/page.tsx`):
- Hero 描述：去掉公司名拼接，改为自然英文表达
- Featured Products 描述：去掉 "Use this area to…" 占位符，替换为实际产品卖点
- 三列优势区：三段 "Placeholder copy…" 替换为对应的具体描述

**AnimatedCounter 组件** (`src/components/common/AnimatedCounter.tsx`):
- 客户端组件，Intersection Observer 触发，只播一次
- 解析 "12+" → 数字 12 + 后缀 "+"，"OEM" 直接显示
- ease-out cubic 缓动，800ms 计数动画

**StatsPanel 组件** (`src/components/home/StatsPanel.tsx`):
- 替换 Home page Hero 中内联 Company Snapshot
- 玻璃拟态卡片：`bg-white/70 backdrop-blur-md` + 淡红渐变装饰色块
- 数字用 AnimatedCounter 渲染

**产品图片全部重绘** (14 张 SVG，`public/images/products/`):
- 暖白奶油系（面包机+早餐机 7 张）：暖白哑光机身 + 铬色装饰 + 面包/煎蛋/咖啡实物细节
- 深色金属系（咖啡机+微波炉 7 张）：深灰/不锈钢机身 + 黑色面板
- 统一 640×500 viewBox，带微动效（蒸汽飘升、热浪、咖啡滴落、烤管发光、转盘旋转、反光扫过、LED 呼吸）
- 产品列表：2-Slice / 4-Slice / Digital Bread Toaster, Compact / 3-in-1 / Family Breakfast Maker, Drip / Capsule / Espresso / Commercial Coffee Maker, Compact / Digital / Grill / Built-in Microwave Oven

**ProductList tab 按钮闪动修复** (`src/components/product/ProductList.tsx`):
- `transition-all` → `transition-colors`，避免非颜色属性动画
- active/inactive 状态统一 `font-medium`，消除字重跳变
- active 按钮加 `border border-accent`，消除 border-width 0↔1px 跳变

**JSON-LD 结构化数据**:
- `src/components/common/JsonLd.tsx` — 通用 `<script type="application/ld+json">` 组件
- `src/app/layout.tsx` — Organization schema (公司名、联系方式、地址)
- `src/app/products/[slug]/page.tsx` — Product schema (品名、描述、图片、制造商、库存状态)

## Remaining Tasks

### 阻塞项（需真实数据，暂不处理）
- [ ] 替换公司真实信息 (`data/company.ts`)
- [ ] 替换真实域名 (metadataBase, sitemap, robots)

### 可推进项
- [ ] 404/500 错误页面 (`not-found.tsx`, `error.tsx`)
- [ ] 独立分类页 (`/products/bread-toasters` 等)
- [x] JSON-LD 结构化数据 (Organization + Product schema)
- [x] 打磨首页英文文案
- [x] 全部产品图片（14 张 SVG 重绘完成，不再使用占位图）
- [x] 首页 Company Snapshot 数字动画 + 玻璃卡片
- [x] 产品分类筛选（按 4 个品类过滤产品列表）

### 阻塞项（需真实数据，暂不处理）
- [ ] 替换公司真实信息 (`data/company.ts`)
- [ ] 替换真实域名 (metadataBase, sitemap, robots)

## Design Decisions

- **红白配色为主调**: 参考 Alibaba/Made-in-China 等外贸 B2B 平台，用暖红色 (`#dc2626`) 替代原 SaaS 风格的冷蓝色
- **纯白背景**: 外贸站通常以纯白为底，与产品图片对比更强
- **组件结构不变**: 只改颜色类名，不改组件逻辑和 DOM 结构
- **WhatsApp 按钮保留绿色**: 这是 WhatsApp 品牌色，保持不变
- **产品卡片加 hover 阴影**: 增加交互感 (`hover:shadow-md`)
- **响应式布局、SEO metadata、静态生成均不受影响**

### 2026-05-18 — 首页分类 Banner 模块

在 Hero 和 Featured Products 之间插入产品分类引导区。

**改动**: `src/app/page.tsx`
- 新增 `categoryBanners` — 从 `products` 数据按 category 去重，取每类首个产品图片
- 新增 section: `grid-cols-4` 始终一行（桌面/手机一致），浅灰底 `bg-surface`
- 每卡: 产品图 (`aspect-square`) + 分类名 + 数量（手机隐藏）+ "View all →"（手机隐藏）
- 整卡可点，跳转 `/products`
- 桌面 `gap-4`/`p-4`，手机 `gap-2`/`p-2`，字号 `text-[11px]`/`sm:text-sm`
- hover 阴影上浮

### 2026-05-18 — 产品分类筛选

按品类过滤产品列表，带 tab 切换动画和卡片入场动画。

**改动**:
- `src/app/products/page.tsx` — 保持 server component，metadata 不动，引入 `ProductList`
- `src/components/product/ProductList.tsx` — 新建 client component
  - `useState("All")` 管理选中分类
  - 从 products 提取去重 categories，生成 pill 按钮，每项显示数量
  - 选中 pill: `bg-accent text-white`；未选中: `border border-gray-300`
  - 切换过渡: `transition-all duration-300` + `active:scale-95`
  - 桌面横向 `sm:flex-row`，手机竖向堆叠 `flex-col`
  - 卡片入场: `animate-fade-in-up`，每张 `animationDelay: i * 50ms` 错开
- `src/app/globals.css` — 新增 `@keyframes fade-in-up` + `--animate-fade-in-up`
