import Image from "next/image";
import Link from "next/link";
import type { Club } from "@/data/clubs";
import { getCategoryDotClass } from "@/lib/categoryColors";
import { getClubLogoUrl } from "@/lib/clubImage";
import { categoryHref } from "@/lib/slug";
import ClubLinkButton from "./ClubLinkButton";

function tiltFor(seed: string): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) hash = (hash * 31 + seed.charCodeAt(i)) % 100;
  return (hash / 100) * 2.4 - 1.2;
}

export default function ClubCard({ club }: { club: Club }) {
  const logoUrl = getClubLogoUrl(club);
  const clubHref = `/klub/${club.id}`;

  return (
    <div
      style={{ "--pin-rotation": `${tiltFor(club.id)}deg` } as React.CSSProperties}
      className="pinned relative"
    >
      <span className="pin-dot" aria-hidden="true" />
      <div className="group flex overflow-hidden rounded-2xl bg-paper shadow-sm hover:shadow-lg">
        <Link href={clubHref} className="block w-28 shrink-0 sm:w-32" tabIndex={-1}>
          <div className="tape-corner relative h-full w-full overflow-hidden bg-accent-soft">
            <Image
              src={club.image_url}
              alt={`${club.name} - ${club.category} közösség Budapesten`}
              fill
              sizes="120px"
              className="object-cover"
            />
            {logoUrl && (
              <div className="absolute bottom-1 left-1 h-6 w-6 overflow-hidden rounded-full bg-white shadow-md ring-2 ring-white">
                <Image
                  src={logoUrl}
                  alt={`${club.name} logója`}
                  fill
                  sizes="24px"
                  className="object-contain p-0.5"
                />
              </div>
            )}
          </div>
        </Link>
        <div className="flex flex-1 flex-col gap-1.5 p-3">
          <h3
            style={{ fontFamily: "var(--font-display)" }}
            className="text-lg leading-tight tracking-tight text-ink"
          >
            <Link href={clubHref} className="group-hover:text-pin-blue">
              {club.name}
            </Link>
          </h3>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-ink/55">
            <Link
              href={categoryHref(club.category)}
              className="inline-flex items-center gap-1 hover:text-pin-blue"
            >
              <span className={`h-1.5 w-1.5 rounded-full ${getCategoryDotClass()}`} aria-hidden="true" />
              {club.category}
            </Link>
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
