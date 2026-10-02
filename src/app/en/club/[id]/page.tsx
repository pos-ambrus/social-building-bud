import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ClubCardEn from "@/components/ClubCardEn";
import ClubLinkButtonEn from "@/components/ClubLinkButtonEn";
import { clubs, getClubById } from "@/data/clubs";
import { categoryHrefEn, getCategoryEn } from "@/lib/categoriesEn";
import { getScheduleEn } from "@/lib/scheduleEn";

const SITE_URL = "https://www.sociallybudapest.hu";

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return clubs.map((club) => ({ id: club.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const club = getClubById(id);
  if (!club) return {};

  const categoryEn = getCategoryEn(club.category);
  const candidates = [
    `${club.name} - ${categoryEn.name} community in Budapest`,
    `${club.name} - ${categoryEn.name} Budapest`,
    `${club.name} - Budapest`,
    club.name,
  ];
  const title = candidates.find((c) => c.length <= 60) ?? club.name;

  const description = `${club.description_en} See how to join ${club.name} in Budapest.`;
  const url = `/en/club/${club.id}`;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url, languages: { hu: `/klub/${club.id}`, en: url } },
    openGraph: {
      title,
      description,
      url,
      type: "profile",
      images: [{ url: club.image_url }],
    },
    twitter: { card: "summary_large_image", title, description, images: [club.image_url] },
  };
}

export default async function ClubPageEn({ params }: Props) {
  const { id } = await params;
  const club = getClubById(id);
  if (!club) notFound();

  const categoryEn = getCategoryEn(club.category);
  const scheduleEn = getScheduleEn(club.schedule);
  const related = clubs
    .filter((c) => c.category === club.category && c.id !== club.id)
    .slice(0, 4);

  const externalUrl = club.website_url ?? club.instagram_url;

  const faq = [
    {
      q: `How do I join ${club.name}?`,
      a: externalUrl
        ? "Open the community's own page and reach out to them directly. You do not need to register with us, we just collect and show Budapest communities in one place."
        : "Reach out to the community directly. You do not need to register with us to join.",
    },
    {
      q: `Can I go to ${club.name} events as a beginner?`,
      a: "The vast majority of communities on our list are open to people arriving alone with no prior experience. It is worth checking the exact conditions on the community's own page, since they keep that current.",
    },
    {
      q: "Does joining cost anything?",
      a: "This site is free, and most listed communities charge no membership fee either. If a community does have a participation fee, it states this on its own page.",
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
          item: `${SITE_URL}${categoryHrefEn(club.category)}`,
        },
        { "@type": "ListItem", position: 4, name: club.name, item: `${SITE_URL}/en/club/${club.id}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${SITE_URL}/klub/${club.id}#organization`,
      name: club.name,
      description: club.description_en,
      url: externalUrl ?? `${SITE_URL}/en/club/${club.id}`,
      image: club.image_url,
      sameAs: [club.instagram_url, club.website_url].filter(Boolean),
      areaServed: { "@type": "City", name: "Budapest" },
      ...(club.district && {
        address: {
          "@type": "PostalAddress",
          addressLocality: "Budapest",
          addressRegion: club.district,
          addressCountry: "HU",
        },
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
    <div className="mx-auto max-w-4xl px-6 py-12">
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
        <Link href={categoryHrefEn(club.category)} className="hover:text-pin-blue">
          {categoryEn.name}
        </Link>
      </nav>

      <article className="overflow-hidden rounded-2xl bg-paper shadow-sm">
        <div className="tape-corner relative h-56 w-full overflow-hidden bg-accent-soft sm:h-72">
          <Image
            src={club.image_url}
            alt={`${club.name} - ${categoryEn.name} community in Budapest`}
            fill
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover"
            priority
          />
        </div>

        <div className="p-6 sm:p-8">
          <h1
            style={{ fontFamily: "var(--font-display)" }}
            className="text-3xl uppercase leading-tight tracking-tight text-ink sm:text-4xl"
          >
            {club.name}
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-ink/60">
            <Link
              href={categoryHrefEn(club.category)}
              className="rounded-full bg-accent-soft px-3 py-1 font-medium text-pin-blue"
            >
              {categoryEn.name}
            </Link>
            {club.district && <span>📍 {club.district}</span>}
            {scheduleEn && <span>🕐 {scheduleEn}</span>}
            <span>{club.type === "Közösség" ? "Community" : "Venue"}</span>
          </div>

          <p className="mt-6 text-lg leading-relaxed text-ink/85">{club.description_en}</p>

          <p className="mt-4 text-ink/70">
            {club.name} is listed in the {categoryEn.name} category on
            Budapesti Közösségek, the Budapest communities list. You do not need to register with us to
            join: open their own page and reach out to them directly. They
            always keep the current times and locations up to date
            themselves.
          </p>

          {(club.instagram_url || club.website_url) && (
            <div className="mt-8">
              <h2
                style={{ fontFamily: "var(--font-display)" }}
                className="mb-3 text-lg uppercase tracking-tight text-ink"
              >
                How to join
              </h2>
              <div className="flex flex-wrap gap-2">
                {club.instagram_url && (
                  <ClubLinkButtonEn
                    href={club.instagram_url}
                    clubName={club.name}
                    linkType="instagram"
                  />
                )}
                {club.website_url && (
                  <ClubLinkButtonEn
                    href={club.website_url}
                    clubName={club.name}
                    linkType="website"
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </article>

      <section className="mt-12 max-w-2xl">
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
      </section>

      {related.length > 0 && (
        <section className="mt-12 border-t-2 border-ink/10 pt-8">
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="mb-1 text-xl uppercase tracking-tight text-ink"
          >
            Similar communities
          </h2>
          <p className="mb-6 text-sm text-ink/60">
            More communities in the {categoryEn.name} category.
          </p>
          <ol className="grid list-none grid-cols-1 gap-5 lg:grid-cols-2">
            {related.map((c) => (
              <li key={c.id}>
                <ClubCardEn club={c} />
              </li>
            ))}
          </ol>
          <Link
            href={categoryHrefEn(club.category)}
            className="mt-6 inline-block text-sm font-medium text-pin-blue hover:underline"
          >
            See all {categoryEn.name} communities →
          </Link>
        </section>
      )}
    </div>
  );
}
