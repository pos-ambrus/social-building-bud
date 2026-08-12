import Image from "next/image";
import Link from "next/link";
import type { Club } from "@/data/clubs";
import { getCategoryClasses } from "@/lib/categoryColors";
import { getCategoryIcon } from "@/lib/categoryIcons";
import { getClubLogoUrl, getClubPrimaryLink } from "@/lib/clubImage";
import ClubLinkButton from "./ClubLinkButton";
import TrackedLink from "./TrackedLink";

export default function ClubCard({ club }: { club: Club }) {
  const logoUrl = getClubLogoUrl(club);
  const primaryLink = getClubPrimaryLink(club);

  const photo = (
    <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl bg-accent-soft">
      <Image
        src={club.image_url}
        alt={club.name}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-300 group-hover:scale-[1.05]"
      />
      {logoUrl && (
        <div className="absolute bottom-3 left-3 h-11 w-11 overflow-hidden rounded-full bg-white shadow-md ring-2 ring-white">
          <Image src={logoUrl} alt="" fill sizes="44px" className="object-contain p-1.5" />
        </div>
      )}
    </div>
  );

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-accent-soft bg-background shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg">
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
            <h3 className="text-base font-semibold leading-snug text-foreground group-hover:text-accent">
              {club.name}
            </h3>
          </TrackedLink>
        ) : (
          <h3 className="text-base font-semibold leading-snug text-foreground">{club.name}</h3>
        )}
        <div className="flex flex-wrap items-center gap-1.5 text-xs">
          <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-medium ${getCategoryClasses(club.category)}`}>
            <span aria-hidden="true">{getCategoryIcon(club.category)}</span>
            {club.category}
          </span>
          {club.district && (
            <span className="rounded-full bg-accent-soft px-2 py-0.5 font-medium text-foreground/60">
              📍 {club.district}
            </span>
          )}
        </div>
        <p className="line-clamp-2 flex-1 text-sm text-foreground/70">{club.description}</p>
        <div className="flex flex-wrap items-center gap-2 pt-1">
          {club.instagram_url && (
            <ClubLinkButton href={club.instagram_url} clubName={club.name} linkType="instagram" />
          )}
          {club.website_url && (
            <ClubLinkButton href={club.website_url} clubName={club.name} linkType="website" />
          )}
          <Link href={`/clubs/${club.id}`} className="text-xs font-medium text-foreground/40 hover:text-accent">
            Részletek →
          </Link>
        </div>
      </div>
    </div>
  );
}
