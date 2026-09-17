import clubsData from "./clubs.json";

export type ClubType = "Helyszín" | "Közösség";

export type Club = {
  id: string;
  name: string;
  category: string;
  district: string | null;
  description: string;
  /**
   * Mikor találkoznak, szabad szövegként, például "keddenként 18:00, Margitsziget".
   * Szándékosan nem strukturált: a klubok maguk küldik be, és úgyis változik.
   * Hiányozhat, ilyenkor sehol nem jelenik meg.
   */
  schedule?: string | null;
  website_url: string | null;
  instagram_url: string | null;
  image_url: string;
  featured: boolean;
  type: ClubType;
};

export const clubs: Club[] = clubsData as Club[];

export function getClubById(id: string): Club | undefined {
  return clubs.find((club) => club.id === id);
}

export function getCategories(): string[] {
  return Array.from(new Set(clubs.map((club) => club.category))).sort((a, b) =>
    a.localeCompare(b, "hu")
  );
}

export function getDistricts(): string[] {
  return Array.from(
    new Set(clubs.map((club) => club.district).filter((d): d is string => Boolean(d)))
  ).sort((a, b) => a.localeCompare(b, "hu"));
}
