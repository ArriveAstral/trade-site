import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap:
      "https://trade-site-2e8cnsy0m-wangxunyus-projects.vercel.app/sitemap.xml",
  };
}
