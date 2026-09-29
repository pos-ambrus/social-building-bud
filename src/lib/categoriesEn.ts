/**
 * English display name + URL slug for each Hungarian category string used in
 * clubs.json. The Hungarian category name stays the single source of truth
 * (stored on each club); this only maps it to how it's shown/linked on the
 * English side of the site.
 */
export type CategoryEn = { name: string; slug: string };

const CATEGORY_EN: Record<string, CategoryEn> = {
  Sport: { name: "Sports", slug: "sports" },
  "Nyelvcsere / Networking": { name: "Language Exchange / Networking", slug: "language-exchange" },
  Könyvklub: { name: "Book Club", slug: "book-club" },
  "Túra / Természetjárás": { name: "Hiking", slug: "hiking" },
  Tánc: { name: "Dance", slug: "dance" },
  "Jóga / Wellness": { name: "Yoga / Wellness", slug: "yoga-wellness" },
  "Networking / Digitális Nomád": { name: "Digital Nomads", slug: "digital-nomads" },
  "Meditáció / Spiritualitás": { name: "Meditation / Spirituality", slug: "meditation" },
  "Startup / Tech": { name: "Startup / Tech", slug: "startup-tech" },
  "Női közösség": { name: "Women's Community", slug: "womens-community" },
  "LMBTQ+ Közösség": { name: "LGBTQ+ Community", slug: "lgbtq" },
  Társasjáték: { name: "Board Games", slug: "board-games" },
  "Önkéntesség / Közösségi akció": { name: "Volunteering", slug: "volunteering" },
  "Szülők / Családok": { name: "Parents / Families", slug: "parents-families" },
  "Nyilvános beszéd": { name: "Public Speaking", slug: "public-speaking" },
  "Katolikus Közösségek": { name: "Catholic Communities", slug: "catholic-communities" },
};

export function getCategoryEn(huCategory: string): CategoryEn {
  const found = CATEGORY_EN[huCategory];
  if (!found) throw new Error(`No English mapping for category "${huCategory}"`);
  return found;
}

export function categoryHrefEn(huCategory: string): string {
  return `/en/clubs/${getCategoryEn(huCategory).slug}`;
}

export function getHuCategoryByEnSlug(slug: string): string | undefined {
  return Object.keys(CATEGORY_EN).find((hu) => CATEGORY_EN[hu].slug === slug);
}

export function getAllCategoriesEn(): { hu: string; en: CategoryEn }[] {
  return Object.entries(CATEGORY_EN).map(([hu, en]) => ({ hu, en }));
}
