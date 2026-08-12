import Image from "next/image";
import Link from "next/link";
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
    <div className="tape-corner relative aspect-[4/3] overflow-hidden bg-accent-soft">
      <Image
        src={club.image_url}
        alt={club.name}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover"
      />
      {logoUrl && (
        <div className="absolute bottom-3 left-3 h-11 w-11 overflow-hidden rounded-full bg-white shadow-md ring-2 ring-white">
          <Image src={logoUrl} alt="" fill sizes="44px" className="object-contain p-1.5" />
        </div>
      )}
    </div>
  );

  return (
    <div
      style={{ "--pin-rotation": `${tiltFor(club.id)}deg` } as React.CSSProperties}
      className="pinned group flex flex-col overflow-hidden bg-paper shadow-sm"
    >
      {primaryLink ? (
        <TrackedLink href={primaryLink.url} clubName={club.name} linkType={primaryLink.type}>
          {photo}
        </TrackedLink>
      ) : (
        photo
      )}
      <div className="flex flex-1 flex-col gap-2 p-5">
        {primaryLink ? (
          <TrackedLink href={primaryLink.url} clubName={club.name} linkType={primaryLink.type}>
            <h3 className="text-base font-semibold leading-snug text-ink group-hover:text-pin-blue">
              {club.name}
            </h3>
          </TrackedLink>
        ) : (
          <h3 className="text-base font-semibold leading-snug text-ink">{club.name}</h3>
        )}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-ink/60">
          <span className="inline-flex items-center gap-1.5">
            <span className={`h-2 w-2 rounded-full ${getCategoryDotClass(club.category)}`} aria-hidden="true" />
            {club.category}
          </span>
          {club.district && <span>📍 {club.district}</span>}
        </div>
        <p className="line-clamp-2 flex-1 text-sm text-ink/70">{club.description}</p>
        <div className="flex flex-wrap items-center gap-2 pt-1">
          {club.instagram_url && (
            <ClubLinkButton href={club.instagram_url} clubName={club.name} linkType="instagram" />
          )}
          {club.website_url && (
            <ClubLinkButton href={club.website_url} clubName={club.name} linkType="website" />
          )}
          <Link href={`/clubs/${club.id}`} className="text-xs font-medium text-ink/40 hover:text-pin-blue">
            Részletek →
          </Link>
        </div>
      </div>
    </div>
  );
}
