import Link from "next/link";
import type { Club } from "@/data/clubs";
import ClubLinkButton from "./ClubLinkButton";

export default function ClubCard({ club }: { club: Club }) {
  const initials = club.name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-shadow hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
      <Link href={`/clubs/${club.id}`} className="block">
        <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200 text-3xl font-semibold tracking-wide text-neutral-400 transition-transform duration-300 group-hover:scale-[1.03] dark:from-neutral-800 dark:to-neutral-900 dark:text-neutral-600">
          {initials}
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <Link href={`/clubs/${club.id}`}>
            <h3 className="text-lg font-semibold leading-snug text-neutral-900 hover:underline dark:text-white">
              {club.name}
            </h3>
          </Link>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded-full bg-neutral-900 px-2.5 py-1 font-medium text-white dark:bg-white dark:text-neutral-900">
            {club.category}
          </span>
          {club.district && (
            <span className="rounded-full bg-neutral-100 px-2.5 py-1 font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
              {club.district}
            </span>
          )}
        </div>
        <p className="line-clamp-2 flex-1 text-sm text-neutral-600 dark:text-neutral-400">
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
