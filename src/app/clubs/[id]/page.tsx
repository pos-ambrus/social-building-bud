import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { clubs, getClubById } from "@/data/clubs";
import { getCategoryClasses } from "@/lib/categoryColors";
import { getCategoryIcon } from "@/lib/categoryIcons";
import { getClubLogoUrl, getClubPrimaryLink } from "@/lib/clubImage";
import ClubLinkButton from "@/components/ClubLinkButton";
import TrackedLink from "@/components/TrackedLink";

export function generateStaticParams() {
  return clubs.map((club) => ({ id: club.id }));
}

export default async function ClubDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const club = getClubById(id);

  if (!club) {
    notFound();
  }

  const logoUrl = getClubLogoUrl(club);
  const primaryLink = getClubPrimaryLink(club);

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <Link href="/" className="text-sm text-foreground/60 hover:text-accent">
        ← Vissza a közösségekhez
      </Link>

      <div className="relative mt-6 aspect-[3/1] overflow-hidden rounded-3xl bg-accent-soft">
        <Image
          src={club.image_url}
          alt=""
          fill
          sizes="(min-width: 768px) 768px, 100vw"
          className="object-cover"
          priority
        />
      </div>

      <div className="flex flex-wrap items-end justify-between gap-4 px-2">
        <div className="-mt-10 flex items-end gap-4">
          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full bg-white shadow-md ring-4 ring-background">
            <Image
              src={logoUrl ?? club.image_url}
              alt={club.name}
              fill
              sizes="96px"
              className={logoUrl ? "object-contain p-3" : "object-cover"}
            />
          </div>
          <h1 className="pb-1 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {club.name}
          </h1>
        </div>

        {primaryLink && (
          <TrackedLink
            href={primaryLink.url}
            clubName={club.name}
            linkType={primaryLink.type}
            className="inline-flex items-center rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            Kövesd
          </TrackedLink>
        )}
      </div>

      <div className="mt-5 flex flex-wrap gap-2 text-xs">
        <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-medium ${getCategoryClasses(club.category)}`}>
          <span aria-hidden="true">{getCategoryIcon(club.category)}</span>
          {club.category}
        </span>
        {club.district && (
          <span className="rounded-full bg-accent-soft px-2.5 py-1 font-medium text-foreground/60">
            📍 {club.district}
          </span>
        )}
        <span className="rounded-full bg-accent-soft px-2.5 py-1 font-medium text-foreground/60">
          🤝 Ingyenesen csatlakozhatsz
        </span>
      </div>

      <h2 className="mt-8 text-sm font-semibold text-foreground/60">Rólunk</h2>
      <p className="mt-2 text-base leading-relaxed text-foreground/80">
        {club.description}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {club.instagram_url && (
          <ClubLinkButton href={club.instagram_url} clubName={club.name} linkType="instagram" />
        )}
        {club.website_url && (
          <ClubLinkButton href={club.website_url} clubName={club.name} linkType="website" />
        )}
      </div>
    </div>
  );
}
