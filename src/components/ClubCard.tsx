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
    <div className="tape-corner relative aspect-square w-[30%] shrink-0 overflow-hidden bg-accent-soft">
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
      className="pinned group flex overflow-hidden bg-paper shadow-sm"
    >
      {primaryLink ? (
        <TrackedLink href={primaryLink.url} clubName={club.name} linkType={primaryLink.type}>
          {photo}
        </TrackedLink>
      ) : (
        photo
      )}
      <div className="flex flex-1 flex-col gap-1.5 p-3">
        {primaryLink ? (
          <TrackedLink href={primaryLink.url} clubName={club.name} linkType={primaryLink.type}>
            <h3 className="text-base font-semibold leading-snug text-ink group-hover:text-pin-blue">
              {club.name}
            </h3>
          </TrackedLink>
        ) : (
          <h3 className="text-base font-semibold leading-snug text-ink">{club.name}</h3>
        )}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-ink/60">
          <span className="inline-flex items-center gap-1">
            <span className={`h-1.5 w-1.5 rounded-full ${getCategoryDotClass(club.category)}`} aria-hidden="true" />
            {club.category}
          </span>
          {club.district && <span>📍 {club.district}</span>}
        </div>
        <p className="line-clamp-2 flex-1 text-sm text-ink/70">{club.description}</p>
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
  );
}
