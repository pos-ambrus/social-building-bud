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

  const faq = [
    {
      q: "Hogyan szűrhetek kategória szerint?",
      a: "Válassz egy kategóriát a legördülő listából, vagy kattints egy kategória-címkére bármelyik klubkártyán — a lista azonnal leszűkül.",
    },
    {
      q: "Ingyenes csatlakozni egy klubhoz?",
      a: "Igen, minden itt listázott klubhoz ingyenesen csatlakozhatsz a saját Instagram- vagy weboldal-linkjükön keresztül, regisztráció nélkül.",
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
        Klubok
      </h1>
      <h2 className="mb-6 text-sm text-ink/60">Hogyan találod meg a neked való klubot?</h2>
      <ul className="mb-8 list-disc space-y-1 pl-5 text-sm text-ink/60">
        <li>Keress rá klub névre vagy a leírásban szereplő szóra</li>
        <li>Szűrj a legördülő listából egy konkrét kategóriára</li>
        <li>Kattints a klub Instagram- vagy weboldal-linkjére, és csatlakozz ingyen</li>
      </ul>
      <HomeContent clubs={clubs} categories={categories} initialCategory={kategoria} />

      <div className="mt-16 max-w-2xl border-t-2 border-ink/10 pt-8">
        <h2 style={{ fontFamily: "var(--font-display)" }} className="mb-4 text-xl uppercase tracking-tight text-ink">
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
    </div>
  );
}
