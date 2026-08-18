import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";
import { clubs, getCategories } from "@/data/clubs";

const TITLE = "Klubok";
const DESCRIPTION = "Böngéssz az összes valódi budapesti közösségi klub között, kategória szerint szűrve.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/klubok" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/klubok" },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default async function KlubokPage({
  searchParams,
}: {
  searchParams: Promise<{ kategoria?: string }>;
}) {
  const { kategoria } = await searchParams;
  const categories = getCategories();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Budapesti közösségi klubok",
    itemListElement: clubs.map((club, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Organization",
        name: club.name,
        description: club.description,
        url: club.website_url ?? club.instagram_url ?? undefined,
        sameAs: [club.instagram_url, club.website_url].filter(Boolean),
      },
    })),
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 style={{ fontFamily: "var(--font-display)" }} className="mb-8 text-3xl uppercase tracking-tight text-ink">
        Klubok
      </h1>
      <HomeContent clubs={clubs} categories={categories} initialCategory={kategoria} />
    </div>
  );
}
