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

  const icon = (
    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-white ring-1 ring-accent-soft">
      <Image
        src={logoUrl ?? club.image_url}
        alt={club.name}
        fill
        sizes="64px"
        className={logoUrl ? "object-contain p-2" : "object-cover"}
      />
    </div>
  );

  return (
    <div className="group flex gap-4 rounded-2xl border border-accent-soft bg-white/60 p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-lg dark:bg-white/5">
      {primaryLink ? (
        <TrackedLink href={primaryLink.url} clubName={club.name} linkType={primaryLink.type} className="shrink-0">
          {icon}
        </TrackedLink>
      ) : (
        icon
      )}
      <div className="flex min-w-0 flex-1 flex-col gap-2">
        {primaryLink ? (
          <TrackedLink href={primaryLink.url} clubName={club.name} linkType={primaryLink.type}>
            <h3 className="truncate text-base font-semibold leading-snug text-foreground group-hover:text-accent">
              {club.name}
            </h3>
          </TrackedLink>
        ) : (
          <h3 className="truncate text-base font-semibold leading-snug text-foreground">{club.name}</h3>
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
        <p className="line-clamp-2 text-sm text-foreground/70">{club.description}</p>
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
