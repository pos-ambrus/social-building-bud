import type { MetadataRoute } from "next";
import { posts } from "@/data/blog";
import { clubs, getCategories } from "@/data/clubs";
import { categorySlug } from "@/lib/slug";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.sociallybudapest.hu";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/klubok`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    ...getCategories().map((category) => ({
      url: `${base}/klubok/${categorySlug(category)}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...clubs.map((club) => ({
      url: `${base}/klub/${club.id}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...posts.map((post) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
