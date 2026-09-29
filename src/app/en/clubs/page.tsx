import type { Metadata } from "next";
import Link from "next/link";
import HomeContentEn from "@/components/HomeContentEn";
import { clubs, getCategories } from "@/data/clubs";
import { categoryHrefEn, getCategoryEn, getHuCategoryByEnSlug } from "@/lib/categoriesEn";

const TITLE = "Clubs";
const DESCRIPTION = "Browse every real Budapest community club, filterable by category.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/en/clubs", languages: { hu: "/klubok", en: "/en/clubs" } },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/en/clubs" },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default async function ClubsPageEn({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const initialCategory = category ? getHuCategoryByEnSlug(category) : undefined;
  const categories = getCategories();
  const sortedCategories = [...categories].sort((a, b) =>
    getCategoryEn(a).name.localeCompare(getCategoryEn(b).name)
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Budapest community clubs",
    itemListElement: clubs.map((club, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Organization",
        name: club.name,
        description: club.description_en,
        url: club.website_url ?? club.instagram_url ?? undefined,
        sameAs: [club.instagram_url, club.website_url].filter(Boolean),
      },
    })),
  };

  const faq = [
    {
      q: "How do I filter by category?",
      a: "Pick a category from the dropdown, or click a category tag on any club card, and the list narrows down immediately.",
    },
    {
      q: "Is it free to join a club?",
      a: "Yes, every club listed here can be joined for free through its own Instagram or website link, no registration needed.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <h1 style={{ fontFamily: "var(--font-display)" }} className="mb-2 text-3xl uppercase tracking-tight text-ink">
        Budapesti Közösségek clubs
      </h1>
      <h2 className="mb-6 text-sm text-ink/60">How do you find the right club for you?</h2>
      <ul className="mb-8 list-disc space-y-1 pl-5 text-sm text-ink/60">
        <li>Search by club name or a word from its description</li>
        <li>Filter by a specific category from the dropdown</li>
        <li>Click the club Instagram or website link, and join for free</li>
      </ul>
      <HomeContentEn clubs={clubs} categories={categories} initialCategory={initialCategory} />

      <div className="mt-16 border-t-2 border-ink/10 pt-8">
        <h2
          style={{ fontFamily: "var(--font-display)" }}
          className="mb-1 text-xl uppercase tracking-tight text-ink"
        >
          Browse by category
        </h2>
        <p className="mb-5 text-sm text-ink/60">
          Every category has its own page with all the Budapest communities in it.
        </p>
        <div className="flex flex-wrap gap-2">
          {sortedCategories.map((c) => (
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

      <div className="mt-16 max-w-2xl border-t-2 border-ink/10 pt-8">
        <h2 style={{ fontFamily: "var(--font-display)" }} className="mb-4 text-xl uppercase tracking-tight text-ink">
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
    </div>
  );
}
