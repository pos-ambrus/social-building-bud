import Image from "next/image";
import type { Club } from "@/data/clubs";
import { getCategoryClasses } from "@/lib/categoryColors";
import { getClubLogoUrl, getClubPrimaryLink } from "@/lib/clubImage";
import ClubLinkButton from "./ClubLinkButton";
import TrackedLink from "./TrackedLink";

export default function ClubCard({ club }: { club: Club }) {
  const logoUrl = getClubLogoUrl(club);
  const primaryLink = getClubPrimaryLink(club);

  const media = (
    <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-white">
      <Image
        src={logoUrl ?? club.image_url}
        alt={club.name}
        fill
        sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
        className={
          logoUrl
            ? "object-contain p-8 transition-transform duration-300 group-hover:scale-[1.05]"
            : "object-cover transition-transform duration-300 group-hover:scale-[1.05]"
        }
      />
    </div>
  );

  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl border border-accent-soft bg-white/60 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg dark:bg-white/5">
      {primaryLink ? (
        <TrackedLink href={primaryLink.url} clubName={club.name} linkType={primaryLink.type} className="block">
          {media}
        </TrackedLink>
      ) : (
        media
      )}
      <div className="flex flex-1 flex-col gap-3 p-5">
        {primaryLink ? (
          <TrackedLink href={primaryLink.url} clubName={club.name} linkType={primaryLink.type}>
            <h3 className="text-lg font-semibold leading-snug text-foreground hover:text-accent">
              {club.name}
            </h3>
          </TrackedLink>
        ) : (
          <h3 className="text-lg font-semibold leading-snug text-foreground">{club.name}</h3>
        )}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className={`rounded-full px-2.5 py-1 font-medium ${getCategoryClasses(club.category)}`}>
            {club.category}
          </span>
          {club.district && (
            <span className="rounded-full bg-accent-soft px-2.5 py-1 font-medium text-foreground/60">
              {club.district}
            </span>
          )}
        </div>
        <p className="line-clamp-2 flex-1 text-sm text-foreground/70">
          {club.description}
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
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
