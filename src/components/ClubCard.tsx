import Image from "next/image";
import type { Club } from "@/data/clubs";
import { getCategoryDotClass } from "@/lib/categoryColors";
import { getClubLogoUrl, getClubPrimaryLink } from "@/lib/clubImage";
import ClubLinkButton from "./ClubLinkButton";
import TrackedLink from "./TrackedLink";

function tiltFor(seed: string): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) hash = (hash * 31 + seed.charCodeAt(i)) % 100;
  return (hash / 100) * 2.4 - 1.2;
}

export default function ClubCard({ club }: { club: Club }) {
  const logoUrl = getClubLogoUrl(club);
  const primaryLink = getClubPrimaryLink(club);

  const photo = (
    <div className="tape-corner relative h-full w-28 overflow-hidden bg-accent-soft sm:w-32">
      <Image
        src={club.image_url}
        alt={club.name}
        fill
        sizes="120px"
        className="object-cover"
      />
      {logoUrl && (
        <div className="absolute bottom-1 left-1 h-6 w-6 overflow-hidden rounded-full bg-white shadow-md ring-2 ring-white">
          <Image src={logoUrl} alt="" fill sizes="24px" className="object-contain p-0.5" />
        </div>
      )}
    </div>
  );

  return (
    <div
      style={{ "--pin-rotation": `${tiltFor(club.id)}deg` } as React.CSSProperties}
      className="pinned relative pt-2"
    >
      <span className="pin-dot" aria-hidden="true" />
      <div className="group flex overflow-hidden rounded-2xl bg-paper shadow-sm hover:shadow-lg">
        {primaryLink ? (
          <TrackedLink
            href={primaryLink.url}
            clubName={club.name}
            linkType={primaryLink.type}
            className="block w-28 shrink-0 sm:w-32"
          >
            {photo}
          </TrackedLink>
        ) : (
          photo
        )}
        <div className="flex flex-1 flex-col gap-1.5 p-3">
          {primaryLink ? (
            <TrackedLink href={primaryLink.url} clubName={club.name} linkType={primaryLink.type}>
              <h3
                style={{ fontFamily: "var(--font-display)" }}
                className="text-lg leading-tight tracking-tight text-ink group-hover:text-pin-blue"
              >
                {club.name}
              </h3>
            </TrackedLink>
          ) : (
            <h3 style={{ fontFamily: "var(--font-display)" }} className="text-lg leading-tight tracking-tight text-ink">
              {club.name}
            </h3>
          )}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-ink/55">
            <span className="inline-flex items-center gap-1">
              <span className={`h-1.5 w-1.5 rounded-full ${getCategoryDotClass()}`} aria-hidden="true" />
              {club.category}
            </span>
            {club.district && <span>📍 {club.district}</span>}
          </div>
          <p className="line-clamp-2 flex-1 text-sm text-ink/55">{club.description}</p>
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            {club.instagram_url && (
              <ClubLinkButton href={club.instagram_url} clubName={club.name} linkType="instagram" />
            )}
            {club.website_url && (
              <ClubLinkButton href={club.website_url} clubName={club.name} linkType="website" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
