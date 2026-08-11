import clubsData from "./clubs.json";

export type Club = {
  id: string;
  name: string;
  category: string;
  district: string | null;
  description: string;
  website_url: string | null;
  instagram_url: string | null;
  image_url: string;
  featured: boolean;
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
