import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { clubs, getClubById } from "@/data/clubs";
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

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <Link href="/" className="text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-white">
        ← Vissza a klubokhoz
      </Link>

      <div className="relative mt-6 aspect-[2/1] overflow-hidden rounded-2xl">
        <Image
          src={club.image_url}
          alt={club.name}
          fill
          sizes="(min-width: 768px) 768px, 100vw"
          className="object-cover"
          priority
        />
      </div>

      <h1 className="mt-6 text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white">
        {club.name}
      </h1>

      <div className="mt-3 flex flex-wrap gap-2 text-xs">
        <span className="rounded-full bg-neutral-900 px-2.5 py-1 font-medium text-white dark:bg-white dark:text-neutral-900">
          {club.category}
        </span>
        {club.district && (
          <span className="rounded-full bg-neutral-100 px-2.5 py-1 font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
            {club.district}
          </span>
        )}
      </div>

      <p className="mt-6 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
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
