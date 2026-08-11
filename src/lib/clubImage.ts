import type { Club } from "@/data/clubs";

const GENERIC_HOSTS = new Set([
  "facebook.com",
  "www.facebook.com",
  "instagram.com",
  "www.instagram.com",
  "meetup.com",
  "www.meetup.com",
  "linktr.ee",
]);

// Real logos only exist for clubs with their own domain — generic platform
// links (Facebook/Instagram/Meetup) would just resolve to that platform's
// icon, not the club's, so those keep the placeholder photo instead.
export function getClubLogoUrl(club: Club): string | null {
  if (!club.website_url) return null;
  try {
    const host = new URL(club.website_url).hostname;
    if (GENERIC_HOSTS.has(host)) return null;
    return `https://www.google.com/s2/favicons?domain=${host}&sz=256`;
  } catch {
    return null;
  }
}

export function getClubPrimaryLink(club: Club): { url: string; type: "instagram" | "website" } | null {
  if (club.instagram_url) return { url: club.instagram_url, type: "instagram" };
  if (club.website_url) return { url: club.website_url, type: "website" };
  return null;
}
