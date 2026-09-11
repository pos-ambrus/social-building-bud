import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ClubCard from "@/components/ClubCard";
import ClubLinkButton from "@/components/ClubLinkButton";
import { clubs, getClubById } from "@/data/clubs";
import { categoryHref } from "@/lib/slug";

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

  // A Google ~60 karakternél vágja a címet, ezért a leghosszabb változattal
  // kezdünk, és addig rövidítünk, amíg belefér.
  const candidates = [
    `${club.name} - ${club.category} közösség Budapesten`,
    `${club.name} - ${club.category} Budapest`,
    `${club.name} - Budapest`,
    club.name,
  ];
  const title = candidates.find((c) => c.length <= 60) ?? club.name;

  const description = `${club.description} Nézd meg, hogyan csatlakozhatsz a ${club.name} közösséghez Budapesten.`;
  const url = `/klub/${club.id}`;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
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

export default async function ClubPage({ params }: Props) {
  const { id } = await params;
  const club = getClubById(id);
  if (!club) notFound();

  const related = clubs
    .filter((c) => c.category === club.category && c.id !== club.id)
    .slice(0, 4);

  const externalUrl = club.website_url ?? club.instagram_url;

  const faq = [
    {
      q: `Hogyan csatlakozhatok a ${club.name} közösséghez?`,
      a: externalUrl
        ? `Nyisd meg a közösség saját oldalát, és vedd fel velük közvetlenül a kapcsolatot. Nálunk nem kell regisztrálni, mi csak összegyűjtjük és egy helyen mutatjuk meg a budapesti közösségeket.`
        : "Vedd fel a közösséggel közvetlenül a kapcsolatot. Nálunk nem kell regisztrálni a csatlakozáshoz.",
    },
    {
      q: `Kezdőként is mehetek a ${club.name} programjaira?`,
      a: "A listánkon szereplő közösségek túlnyomó része nyitott arra, hogy előzetes tapasztalat nélkül, egyedül érkezz. A pontos feltételeket a közösség saját oldalán érdemes ellenőrizni, mert azt ők tartják naprakészen.",
    },
    {
      q: "Kerül valamibe a csatlakozás?",
      a: "Ez az oldal ingyenes, és a listázott közösségek nagy része sem kér tagdíjat. Ha egy közösségnek mégis van részvételi díja, azt a saját oldalán tünteti fel.",
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
          name: club.category,
          item: `${SITE_URL}${categoryHref(club.category)}`,
        },
        { "@type": "ListItem", position: 4, name: club.name, item: `${SITE_URL}/klub/${club.id}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: club.name,
      description: club.description,
      url: externalUrl ?? `${SITE_URL}/klub/${club.id}`,
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

      <nav aria-label="Morzsamenü" className="mb-6 text-sm text-ink/50">
        <Link href="/" className="hover:text-pin-blue">
          Főoldal
        </Link>
        <span className="px-2">/</span>
        <Link href="/klubok" className="hover:text-pin-blue">
          Klubok
        </Link>
        <span className="px-2">/</span>
        <Link href={categoryHref(club.category)} className="hover:text-pin-blue">
          {club.category}
        </Link>
      </nav>

      <article className="overflow-hidden rounded-2xl bg-paper shadow-sm">
        <div className="tape-corner relative h-56 w-full overflow-hidden bg-accent-soft sm:h-72">
          <Image
            src={club.image_url}
            alt={club.name}
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
              href={categoryHref(club.category)}
              className="rounded-full bg-accent-soft px-3 py-1 font-medium text-pin-blue"
            >
              {club.category}
            </Link>
            {club.district && <span>📍 {club.district}</span>}
            <span>{club.type}</span>
          </div>

          <p className="mt-6 text-lg leading-relaxed text-ink/85">{club.description}</p>

          <p className="mt-4 text-ink/70">
            A {club.name} a {club.category} kategóriában szerepel a budapesti
            közösségek listáján. A csatlakozáshoz nem kell nálunk regisztrálni: nyisd
            meg a közösség saját oldalát, és vedd fel velük közvetlenül a kapcsolatot.
            Az aktuális időpontokat és helyszíneket mindig ők tartják naprakészen.
          </p>

          {(club.instagram_url || club.website_url) && (
            <div className="mt-8">
              <h2
                style={{ fontFamily: "var(--font-display)" }}
                className="mb-3 text-lg uppercase tracking-tight text-ink"
              >
                Csatlakozás
              </h2>
              <div className="flex flex-wrap gap-2">
                {club.instagram_url && (
                  <ClubLinkButton
                    href={club.instagram_url}
                    clubName={club.name}
                    linkType="instagram"
                  />
                )}
                {club.website_url && (
                  <ClubLinkButton
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
      </section>

      {related.length > 0 && (
        <section className="mt-12 border-t-2 border-ink/10 pt-8">
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="mb-1 text-xl uppercase tracking-tight text-ink"
          >
            Hasonló közösségek
          </h2>
          <p className="mb-6 text-sm text-ink/60">
            További közösségek a {club.category} kategóriából.
          </p>
          <ol className="grid list-none grid-cols-1 gap-5 lg:grid-cols-2">
            {related.map((c) => (
              <li key={c.id}>
                <ClubCard club={c} />
              </li>
            ))}
          </ol>
          <Link
            href={categoryHref(club.category)}
            className="mt-6 inline-block text-sm font-medium text-pin-blue hover:underline"
          >
            Összes {club.category} közösség megtekintése →
          </Link>
        </section>
      )}
    </div>
  );
}
