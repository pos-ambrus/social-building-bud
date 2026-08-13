import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "www.google.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
      },
      {
        protocol: "https",
        hostname: "aimeetup.hu",
      },
      {
        protocol: "https",
        hostname: "new.bikemaffia.com",
      },
      {
        protocol: "https",
        hostname: "mozaikmed.hu",
      },
    ],
  },
};

export default nextConfig;
