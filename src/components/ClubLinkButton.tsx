"use client";

type Props = {
  href: string;
  clubName: string;
  linkType: "instagram" | "website";
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function ClubLinkButton({ href, clubName, linkType }: Props) {
  const handleClick = () => {
    window.gtag?.("event", "club_link_click", {
      club_name: clubName,
      link_type: linkType,
    });
  };

  const label = linkType === "instagram" ? "Instagram" : "Weboldal";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 px-3.5 py-1.5 text-sm font-medium text-neutral-800 transition-colors hover:border-neutral-900 hover:bg-neutral-900 hover:text-white dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-white dark:hover:text-neutral-900"
    >
      {linkType === "instagram" ? (
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
          <path d="M12 2.2c3.2 0 3.6 0 4.9.07 3.25.15 4.77 1.7 4.92 4.92.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.65.07-4.9.07-3.2 0-3.6 0-4.9-.07-3.26-.15-4.77-1.7-4.92-4.92C2.12 15.58 2.1 15.2 2.1 12s0-3.58.07-4.85C2.32 3.93 3.84 2.38 7.1 2.23 8.4 2.17 8.8 2.2 12 2.2zm0 1.8c-3.14 0-3.5 0-4.73.07-2.42.11-3.5 1.2-3.6 3.6C3.6 8.5 3.6 8.85 3.6 12s0 3.5.07 4.73c.1 2.4 1.18 3.5 3.6 3.6 1.23.06 1.59.07 4.73.07s3.5 0 4.73-.07c2.42-.1 3.5-1.2 3.6-3.6.06-1.23.07-1.59.07-4.73s0-3.5-.07-4.73c-.1-2.4-1.19-3.5-3.6-3.6C15.5 4 15.14 4 12 4zm0 3.9a4.1 4.1 0 1 1 0 8.2 4.1 4.1 0 0 1 0-8.2zm0 1.8a2.3 2.3 0 1 0 0 4.6 2.3 2.3 0 0 0 0-4.6zm5.2-2a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.6 4 6 4 9s-1.5 6.4-4 9c-2.5-2.6-4-6-4-9s1.5-6.4 4-9z" />
        </svg>
      )}
      {label}
    </a>
  );
}
