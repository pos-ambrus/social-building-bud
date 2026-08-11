"use client";

import type { ReactNode } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type Props = {
  href: string;
  clubName: string;
  linkType: "instagram" | "website";
  className?: string;
  children: ReactNode;
};

export default function TrackedLink({ href, clubName, linkType, className, children }: Props) {
  const handleClick = () => {
    window.gtag?.("event", "club_link_click", {
      club_name: clubName,
      link_type: linkType,
    });
  };

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
