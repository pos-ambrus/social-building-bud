import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { clubs, getClubById } from "@/data/clubs";
import { getCategoryClasses } from "@/lib/categoryColors";
import { getClubLogoUrl } from "@/lib/clubImage";
import ClubLinkButton from "@/components/ClubLinkButton";

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

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <Link href="/" className="text-sm text-foreground/60 hover:text-accent">
        ← Vissza a klubokhoz
      </Link>

      <div className="relative mt-6 flex aspect-[2/1] items-center justify-center overflow-hidden rounded-2xl bg-white">
        <Image
          src={logoUrl ?? club.image_url}
          alt={club.name}
          fill
          sizes="(min-width: 768px) 768px, 100vw"
          className={logoUrl ? "object-contain p-16" : "object-cover"}
          priority
        />
      </div>

      <h1 className="mt-6 text-3xl font-semibold tracking-tight text-foreground">
        {club.name}
      </h1>

      <div className="mt-3 flex flex-wrap gap-2 text-xs">
        <span className={`rounded-full px-2.5 py-1 font-medium ${getCategoryClasses(club.category)}`}>
          {club.category}
        </span>
        {club.district && (
          <span className="rounded-full bg-accent-soft px-2.5 py-1 font-medium text-foreground/60">
            {club.district}
          </span>
        )}
      </div>

      <p className="mt-6 text-base leading-relaxed text-foreground/80">
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
