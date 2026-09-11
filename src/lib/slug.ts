import { getCategories } from "@/data/clubs";

/**
 * URL-barát slug magyar ékezetes szövegből.
 * "Túra / Természetjárás" -> "tura-termeszetjaras"
 */
export function slugify(input: string): string {
  return input
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function categorySlug(category: string): string {
  return slugify(category);
}

export function categoryHref(category: string): string {
  return `/klubok/${categorySlug(category)}`;
}

export function getCategoryBySlug(slug: string): string | undefined {
  return getCategories().find((c) => categorySlug(c) === slug);
}
