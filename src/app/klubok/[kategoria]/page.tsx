import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ClubCard from "@/components/ClubCard";
import { clubs, getCategories } from "@/data/clubs";
import { getCategorySeo } from "@/lib/categorySeo";
import { categoryHref, categorySlug, getCategoryBySlug } from "@/lib/slug";

const SITE_URL = "https://www.sociallybudapest.hu";

type Props = {
  params: Promise<{ kategoria: string }>;
};

export function generateStaticParams() {
  return getCategories().map((c) => ({ kategoria: categorySlug(c) }));
}

function clubsIn(category: string) {
  return clubs.filter((club) => club.category === category);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { kategoria } = await params;
  const category = getCategoryBySlug(kategoria);
  if (!category) return {};

  const list = clubsIn(category);
  const seo = getCategorySeo(category, list.length);
  const url = categoryHref(category);

  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: url },
    openGraph: { title: seo.title, description: seo.description, url },
    twitter: { title: seo.title, description: seo.description },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { kategoria } = await params;
  const category = getCategoryBySlug(kategoria);
  if (!category) notFound();

  const list = clubsIn(category);
  const seo = getCategorySeo(category, list.length);
  const others = getCategories().filter((c) => c !== category);

  const faq = [
    {
      q: `Hány ${category.toLowerCase()} közösség van a listán?`,
      a: `Jelenleg ${list.length} olyan budapesti közösség szerepel ebben a kategóriában, amelyik valóban aktív, és saját Instagram- vagy weboldallal rendelkezik.`,
    },
    {
      q: `Kezdőként is csatlakozhatok egy ${category.toLowerCase()} közösséghez Budapesten?`,
      a: "Igen. Az itt listázott közösségek többsége nyitott arra, hogy előzetes tapasztalat nélkül, egyedül érkezz. Ha egy klubnál szintfeltétel van, azt a saját oldalukon jelzik.",
    },
    {
      q: "Kell fizetni a csatlakozásért?",
      a: "A listán szereplés és a böngészés ingyenes, és a klubok nagy része sem kér tagdíjat. Ha egy közösségnek mégis van díja, azt a saját oldalán tünteti fel.",
    },
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Főoldal", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Klubok", item: `${SITE_URL}/klubok` },
        {
          "@type": "ListItem",
          position: 3,
          name: category,
          item: `${SITE_URL}${categoryHref(category)}`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: seo.h1,
      description: seo.description,
      numberOfItems: list.length,
      itemListElement: list.map((club, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${SITE_URL}/klub/${club.id}`,
        item: { "@id": `${SITE_URL}/klub/${club.id}#organization` },
      })),
    },
    // Külön, felső szintű Organization csomópontok: az entitás-egyértelműsítéshez
    // az AI-motorok a sameAs linkeket keresik, és a beágyazott ItemList itemeket
    // több feldolgozó nem bontja ki.
    {
      "@context": "https://schema.org",
      "@graph": list.map((club) => {
        const sameAs = [club.instagram_url, club.website_url].filter(Boolean);
        return {
          "@type": "Organization",
          "@id": `${SITE_URL}/klub/${club.id}#organization`,
          name: club.name,
          description: club.description,
          url: club.website_url ?? club.instagram_url ?? `${SITE_URL}/klub/${club.id}`,
          image: club.image_url,
          areaServed: { "@type": "City", name: "Budapest" },
          ...(sameAs.length > 0 && { sameAs }),
        };
      }),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <nav aria-label="Morzsamenü" className="mb-6 text-sm text-ink/50">
        <Link href="/" className="hover:text-pin-blue">
          Főoldal
        </Link>
        <span className="px-2">/</span>
        <Link href="/klubok" className="hover:text-pin-blue">
          Klubok
        </Link>
        <span className="px-2">/</span>
        <span className="text-ink/70">{category}</span>
      </nav>

      <h1
        style={{ fontFamily: "var(--font-display)" }}
        className="text-3xl uppercase leading-tight tracking-tight text-ink sm:text-4xl"
      >
        {seo.h1}
      </h1>
      <p className="mt-2 text-sm font-medium text-cta">
        {list.length} közösség a listán
      </p>

      <div className="mt-6 max-w-2xl space-y-4 text-ink/75">
        {seo.intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <ol className="mt-10 grid list-none grid-cols-1 gap-5 lg:grid-cols-2">
        {list.map((club) => (
          <li key={club.id}>
            <ClubCard club={club} />
          </li>
        ))}
      </ol>

      <div className="mt-16 max-w-2xl border-t-2 border-ink/10 pt-8">
        <h2
          style={{ fontFamily: "var(--font-display)" }}
          className="mb-4 text-xl uppercase tracking-tight text-ink"
        >
          Gyakran ismételt kérdések
        </h2>
        <div className="space-y-4">
          {faq.map((item) => (
            <div key={item.q}>
              <h3 className="font-semibold text-ink">{item.q}</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink/70">{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 border-t-2 border-ink/10 pt-8">
        <h2
          style={{ fontFamily: "var(--font-display)" }}
          className="mb-4 text-xl uppercase tracking-tight text-ink"
        >
          További kategóriák
        </h2>
        <div className="flex flex-wrap gap-2">
          {others.map((c) => (
            <Link
              key={c}
              href={categoryHref(c)}
              className="rounded-full bg-paper px-3 py-1.5 text-sm text-ink/70 shadow-sm transition-colors hover:text-pin-blue"
            >
              {c}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
