import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ClubCardEn from "@/components/ClubCardEn";
import { clubs, getCategories } from "@/data/clubs";
import { getCategorySeoEn } from "@/lib/categorySeoEn";
import { categoryHrefEn, getAllCategoriesEn, getCategoryEn, getHuCategoryByEnSlug } from "@/lib/categoriesEn";

const SITE_URL = "https://www.sociallybudapest.hu";

type Props = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return getAllCategoriesEn().map(({ en }) => ({ category: en.slug }));
}

function clubsIn(huCategory: string) {
  return clubs.filter((club) => club.category === huCategory);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const huCategory = getHuCategoryByEnSlug(category);
  if (!huCategory) return {};

  const categoryEn = getCategoryEn(huCategory);
  const list = clubsIn(huCategory);
  const seo = getCategorySeoEn(huCategory, list.length, categoryEn.name);
  const url = categoryHrefEn(huCategory);

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: url,
      languages: { hu: `/klubok/${category}`, en: url },
    },
    openGraph: { title: seo.title, description: seo.description, url },
    twitter: { title: seo.title, description: seo.description },
  };
}

export default async function CategoryPageEn({ params }: Props) {
  const { category } = await params;
  const huCategory = getHuCategoryByEnSlug(category);
  if (!huCategory) notFound();

  const categoryEn = getCategoryEn(huCategory);
  const list = clubsIn(huCategory);
  const seo = getCategorySeoEn(huCategory, list.length, categoryEn.name);
  const others = getCategories().filter((c) => c !== huCategory);
  const othersSorted = [...others].sort((a, b) => getCategoryEn(a).name.localeCompare(getCategoryEn(b).name));

  const faq = [
    {
      q: `How many ${categoryEn.name.toLowerCase()} communities are on the list?`,
      a: `There are currently ${list.length} genuinely active Budapest communities in this category, each with their own Instagram or website.`,
    },
    {
      q: `Can I join a ${categoryEn.name.toLowerCase()} community in Budapest as a beginner?`,
      a: "Yes. Most communities listed here are open to people arriving alone with no prior experience. If a club has a skill requirement, they state it on their own page.",
    },
    {
      q: "Do you have to pay to join?",
      a: "Being listed and browsing the site are free, and most clubs charge no membership fee either. If a community does have a fee, it states this on its own page.",
    },
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/en` },
        { "@type": "ListItem", position: 2, name: "Clubs", item: `${SITE_URL}/en/clubs` },
        {
          "@type": "ListItem",
          position: 3,
          name: categoryEn.name,
          item: `${SITE_URL}${categoryHrefEn(huCategory)}`,
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
        url: `${SITE_URL}/en/club/${club.id}`,
        item: { "@id": `${SITE_URL}/klub/${club.id}#organization` },
      })),
    },
    // Each club also gets its own top-level Organization node, same @id as on
    // the Hungarian category page, since it's the same real-world entity.
    ...list.map((club) => {
      const sameAs = [club.instagram_url, club.website_url].filter(Boolean);
      return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${SITE_URL}/klub/${club.id}#organization`,
        name: club.name,
        description: club.description_en,
        url: club.website_url ?? club.instagram_url ?? `${SITE_URL}/en/club/${club.id}`,
        image: club.image_url,
        areaServed: { "@type": "City", name: "Budapest" },
        ...(sameAs.length > 0 && { sameAs }),
      };
    }),
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

      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-ink/50">
        <Link href="/en" className="hover:text-pin-blue">
          Home
        </Link>
        <span className="px-2">/</span>
        <Link href="/en/clubs" className="hover:text-pin-blue">
          Clubs
        </Link>
        <span className="px-2">/</span>
        <span className="text-ink/70">{categoryEn.name}</span>
      </nav>

      <h1
        style={{ fontFamily: "var(--font-display)" }}
        className="text-3xl uppercase leading-tight tracking-tight text-ink sm:text-4xl"
      >
        {seo.h1}
      </h1>
      <p className="mt-2 text-sm font-medium text-cta">
        {list.length} communities listed
      </p>

      <div className="mt-6 max-w-2xl space-y-4 text-ink/75">
        {seo.intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <ol className="mt-10 grid list-none grid-cols-1 gap-5 lg:grid-cols-2">
        {list.map((club) => (
          <li key={club.id}>
            <ClubCardEn club={club} />
          </li>
        ))}
      </ol>

      <div className="mt-16 max-w-2xl border-t-2 border-ink/10 pt-8">
        <h2
          style={{ fontFamily: "var(--font-display)" }}
          className="mb-4 text-xl uppercase tracking-tight text-ink"
        >
          Frequently asked questions
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
          More categories
        </h2>
        <div className="flex flex-wrap gap-2">
          {othersSorted.map((c) => (
            <Link
              key={c}
              href={categoryHrefEn(c)}
              className="rounded-full bg-paper px-3 py-1.5 text-sm text-ink/70 shadow-sm transition-colors hover:text-pin-blue"
            >
              {getCategoryEn(c).name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
