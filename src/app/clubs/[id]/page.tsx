import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { clubs, getClubById } from "@/data/clubs";
import { getCategoryDotClass } from "@/lib/categoryColors";
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
      <Link href="/" className="text-sm text-ink/60 hover:text-pin-blue">
        ← Vissza a közösségekhez
      </Link>

      <div className="tape-corner relative mt-6 aspect-[3/1] overflow-hidden bg-accent-soft">
        <Image
          src={club.image_url}
          alt=""
          fill
          sizes="(min-width: 768px) 768px, 100vw"
          className="object-cover"
          priority
        />
        <div className="absolute -bottom-10 left-6 h-20 w-20 shrink-0 overflow-hidden rounded-full bg-white shadow-md ring-4 ring-background sm:h-24 sm:w-24">
          <Image
            src={logoUrl ?? club.image_url}
            alt={club.name}
            fill
            sizes="96px"
            className={logoUrl ? "object-contain p-3" : "object-cover"}
          />
        </div>
      </div>

      <div className="mt-14 flex flex-wrap items-start justify-between gap-4 px-2 sm:mt-16">
        <h1 style={{ fontFamily: "var(--font-display)" }} className="text-2xl uppercase tracking-tight text-ink sm:text-3xl">
          {club.name}
        </h1>

        {primaryLink && (
          <TrackedLink
            href={primaryLink.url}
            clubName={club.name}
            linkType={primaryLink.type}
            className="inline-flex items-center border-2 border-ink bg-ink px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-paper transition-colors hover:bg-pin-blue hover:border-pin-blue"
          >
            Kövesd
          </TrackedLink>
        )}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ink/60">
        <span className="inline-flex items-center gap-1.5">
          <span className={`h-2 w-2 rounded-full ${getCategoryDotClass(club.category)}`} aria-hidden="true" />
          {club.category}
        </span>
        {club.district && <span>📍 {club.district}</span>}
        <span
          style={{ fontFamily: "var(--font-handwritten)" }}
          className="rounded-sm bg-pin-yellow px-2.5 py-0.5 text-base font-bold text-ink"
        >
          Ingyenesen csatlakozhatsz
        </span>
      </div>

      <h2 style={{ fontFamily: "var(--font-display)" }} className="mt-8 text-sm uppercase tracking-wide text-ink/50">
        Rólunk
      </h2>
      <p className="mt-2 text-base leading-relaxed text-ink/80">
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
