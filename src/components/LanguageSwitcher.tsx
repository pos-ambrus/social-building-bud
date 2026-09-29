"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getCategoryEn, getHuCategoryByEnSlug } from "@/lib/categoriesEn";
import { getEnBlogSlug, getHuBlogSlug } from "@/lib/blogSlugMap";
import { categorySlug, getCategoryBySlug } from "@/lib/slug";

/**
 * Computes the equivalent URL in the other language purely from the current
 * pathname, using the same lookup tables the pages themselves use for
 * category and blog slugs. No per-page wiring needed: club ids are shared
 * as-is between locales, category and blog slugs go through their mapping
 * tables.
 */
function huToEn(pathname: string): string {
  if (pathname === "/") return "/en";
  if (pathname === "/about") return "/en/about";
  if (pathname === "/blog") return "/en/blog";
  if (pathname === "/klubok") return "/en/clubs";

  const blogMatch = pathname.match(/^\/blog\/([^/]+)$/);
  if (blogMatch) {
    const en = getEnBlogSlug(blogMatch[1]);
    return en ? `/en/blog/${en}` : "/en/blog";
  }

  const clubMatch = pathname.match(/^\/klub\/([^/]+)$/);
  if (clubMatch) return `/en/club/${clubMatch[1]}`;

  const categoryMatch = pathname.match(/^\/klubok\/([^/]+)$/);
  if (categoryMatch) {
    const huCategory = getCategoryBySlug(categoryMatch[1]);
    return huCategory ? `/en/clubs/${getCategoryEn(huCategory).slug}` : "/en/clubs";
  }

  return "/en";
}

function enToHu(pathname: string): string {
  if (pathname === "/en") return "/";
  if (pathname === "/en/about") return "/about";
  if (pathname === "/en/blog") return "/blog";
  if (pathname === "/en/clubs") return "/klubok";

  const blogMatch = pathname.match(/^\/en\/blog\/([^/]+)$/);
  if (blogMatch) {
    const hu = getHuBlogSlug(blogMatch[1]);
    return hu ? `/blog/${hu}` : "/blog";
  }

  const clubMatch = pathname.match(/^\/en\/club\/([^/]+)$/);
  if (clubMatch) return `/klub/${clubMatch[1]}`;

  const categoryMatch = pathname.match(/^\/en\/clubs\/([^/]+)$/);
  if (categoryMatch) {
    const huCategory = getHuCategoryByEnSlug(categoryMatch[1]);
    return huCategory ? `/klubok/${categorySlug(huCategory)}` : "/klubok";
  }

  return "/";
}

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const isEn = pathname.startsWith("/en");
  const href = isEn ? enToHu(pathname) : huToEn(pathname);

  return (
    <Link
      href={href}
      className="hidden shrink-0 items-center gap-1 whitespace-nowrap rounded-full border-2 border-ink/15 px-3 py-1.5 text-xs font-semibold text-ink/70 transition-colors hover:border-pin-blue hover:text-pin-blue sm:inline-flex sm:px-4 sm:py-2 sm:text-sm"
    >
      {isEn ? "🇭🇺 Magyar" : "🇬🇧 English"}
    </Link>
  );
}
