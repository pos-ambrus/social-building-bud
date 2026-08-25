import type { MetadataRoute } from "next";
import { posts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.sociallybudapest.hu";
  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/klubok`, lastModified: new Date() },
    { url: `${base}/about`, lastModified: new Date() },
    { url: `${base}/blog`, lastModified: new Date() },
    ...posts.map((post) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt),
    })),
  ];
}
