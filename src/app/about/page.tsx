import type { Metadata } from "next";

const TITLE = "Rólunk";
const DESCRIPTION = "Miért hoztuk létre a Socially Budapest katalógust, és hogyan kerülhet fel egy klub a listára.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/about" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/about" },
  twitter: { title: TITLE, description: DESCRIPTION },
};

const FAQ = [
  {
    q: "Ingyenes a Socially Budapest?",
    a: "Igen, teljesen ingyenes: nincs regisztráció, nincs előfizetés, sem a böngészéshez, sem ahhoz, hogy egy klub felkerüljön a listára.",
  },
  {
    q: "Hogyan kerülhet fel egy klub a listára?",
    a: "Írj emailt a sociallybudapest@gmail.com címre a klub nevével és egy Instagram- vagy weboldal-linkkel, a többit elintézzük.",
  },
  {
    q: "Milyen klubok szerepelnek az oldalon?",
    a: "Valódi, informális budapesti közösségek: sport (futás, kerékpár, tenisz), nyelvcsere, könyvklub, startup és tech közösségek, jóga, önkéntesség és sok más, formális egyesületek nélkül.",
  },
  {
    q: "Miért nincsenek egyesületek a listán?",
    a: "A Socially Budapest kifejezetten olyan közösségeket gyűjt, ahová bárki csatlakozhat egy Instagram- vagy Facebook-oldalon keresztül, hivatalos tagság vagy bürokrácia nélkül.",
  },
];

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <div className="mx-auto max-w-2xl px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 style={{ fontFamily: "var(--font-display)" }} className="text-3xl uppercase tracking-tight text-ink">
        Rólunk
      </h1>

      <div className="mt-6 space-y-5 text-base leading-relaxed text-ink/80">
        <p>
          Szia, Ambrus vagyok. Mindig is szerettem közösségeket létrehozni, és hasonló
          gondolkodású embereknek programokat, eseményeket szervezni, és ez a katalógus is
          ebből a szenvedélyből született.
        </p>
        <p>
          Budapesten hihetetlenül sok ilyen kezdeményezés fut: futóklubok, nyelvcserék,
          társasjáték-esték, startup közösségek, csak épp szétszórva, mindenhol máshol.
          A Socially Budapest azért van, hogy egy helyen megtaláld, ami hozzád illik. Remélem,
          te is rátalálsz a saját közösségedre.
        </p>
        <p>
          Szeretnéd, hogy a klubod is felkerüljön a listára, vagy javítanál egy meglévő
          bejegyzésen? Írj nekem közvetlenül:{" "}
          <a
            href="mailto:sociallybudapest@gmail.com"
            className="font-medium text-pin-blue underline"
          >
            sociallybudapest@gmail.com
          </a>
          . Ingyenes, nincs bürokrácia: csak küldd el a klub nevét és egy linket, a többit
          elintézem.
        </p>
        <p style={{ fontFamily: "var(--font-handwritten)" }} className="text-2xl text-ink">
          Ambrus
        </p>
      </div>

      <h2 style={{ fontFamily: "var(--font-display)" }} className="mt-12 text-xl uppercase tracking-tight text-ink">
        Gyakori kérdések
      </h2>
      <div className="mt-4 space-y-6">
        {FAQ.map((item) => (
          <div key={item.q}>
            <h3 className="font-semibold text-ink">{item.q}</h3>
            <p className="mt-1 text-sm leading-relaxed text-ink/70">{item.a}</p>
          </div>
        ))}
      </div>

      <p className="mt-10 text-sm text-ink/50">
        Jogi nyilatkozat: az oldalon szereplő tartalom közösségileg összegyűjtött információ.
        Az oldal nem áll hivatalos kapcsolatban a listázott klubokkal, és nem vállal
        felelősséget az adatok naprakészségéért: mindig ellenőrizd a klub hivatalos
        Instagram- vagy weboldalát a friss információkért.
      </p>
    </div>
  );
}
