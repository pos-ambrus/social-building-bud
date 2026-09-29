import type { MetadataRoute } from "next";
import { posts } from "@/data/blog";
import { postsEn } from "@/data/blog.en";
import { clubs, getCategories } from "@/data/clubs";
import { categorySlug } from "@/lib/slug";
import { getAllCategoriesEn } from "@/lib/categoriesEn";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.sociallybudapest.hu";
  const now = new Date();

  return [
    // Hungarian
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
    // English
    { url: `${base}/en`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/en/clubs`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/en/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/en/about`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    ...getAllCategoriesEn().map(({ en }) => ({
      url: `${base}/en/clubs/${en.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...clubs.map((club) => ({
      url: `${base}/en/club/${club.id}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...postsEn.map((post) => ({
      url: `${base}/en/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
