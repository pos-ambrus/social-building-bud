import Image from "next/image";
import Link from "next/link";
import type { Club } from "@/data/clubs";
import { getCategoryClasses } from "@/lib/categoryColors";
import ClubLinkButton from "./ClubLinkButton";

export default function ClubCard({ club }: { club: Club }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl border border-accent-soft bg-white/60 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg dark:bg-white/5">
      <Link href={`/clubs/${club.id}`} className="relative block aspect-[4/3] overflow-hidden">
        <Image
          src={club.image_url}
          alt={club.name}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.05]"
        />
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <Link href={`/clubs/${club.id}`}>
          <h3 className="text-lg font-semibold leading-snug text-foreground hover:text-accent">
            {club.name}
          </h3>
        </Link>
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
