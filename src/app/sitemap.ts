import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.sociallybudapest.hu";
  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/klubok`, lastModified: new Date() },
    { url: `${base}/about`, lastModified: new Date() },
  ];
}
