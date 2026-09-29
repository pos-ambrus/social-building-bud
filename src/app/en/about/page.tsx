import type { Metadata } from "next";
import ClubSubmitFormEn from "@/components/ClubSubmitFormEn";
import { getCategories } from "@/data/clubs";

const TITLE = "Why I made this";
const DESCRIPTION = "Why Budapesti Közösségek exists, and how a club can get listed.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/en/about", languages: { hu: "/about", en: "/en/about" } },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/en/about" },
  twitter: { title: TITLE, description: DESCRIPTION },
};

const FAQ = [
  {
    q: "Is Budapesti Közösségek free?",
    a: "Yes, completely free: no registration, no subscription, either to browse or to get a club listed.",
  },
  {
    q: "How does a club get listed?",
    a: "Email sociallybud@gmail.com with the club's name and an Instagram or website link, and we take care of the rest.",
  },
  {
    q: "What kind of clubs are on the site?",
    a: "Real, informal Budapest communities: sport (running, cycling, tennis), language exchange, book clubs, startup and tech communities, yoga, volunteering and much more, without formal associations.",
  },
  {
    q: "Why are there no formal associations on the list?",
    a: "Budapesti Közösségek specifically collects communities anyone can join through an Instagram or Facebook page, with no official membership or paperwork.",
  },
];

export default function AboutPageEn() {
  const categories = getCategories();
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
        Why I made this
      </h1>

      <div className="mt-6 space-y-5 text-base leading-relaxed text-ink/80">
        <p>
          Hi! I have always loved building communities and organizing programs
          and events for like-minded people, and this list was born out of
          that same passion.
        </p>
        <p>
          Budapest runs an incredible number of these initiatives: running
          clubs, language exchanges, board game nights, startup communities,
          just scattered everywhere, each in a different place. Budapesti
          Közösségek exists so you can find the one that fits you in a
          single place. I hope you find your own community here too.
        </p>
        <p>
          A few examples of real communities listed on the site:{" "}
          <a href="https://linktr.ee/bridgetrunners" target="_blank" rel="noopener noreferrer" className="font-medium text-pin-blue underline">
            Bridget Runners Budapest
          </a>
          ,{" "}
          <a href="https://kerekparosklub.hu/" target="_blank" rel="noopener noreferrer" className="font-medium text-pin-blue underline">
            I Bike Budapest
          </a>{" "}
          and{" "}
          <a href="https://toastmasters.hu/klubok/" target="_blank" rel="noopener noreferrer" className="font-medium text-pin-blue underline">
            Toastmasters Magyarország
          </a>
          .
        </p>
        <p>
          Want your club listed too, or would you like to correct an existing
          entry? Email me directly:{" "}
          <a
            href="mailto:sociallybud@gmail.com"
            className="font-medium text-pin-blue underline"
          >
            sociallybud@gmail.com
          </a>
          . Free, no bureaucracy: just send the club name and a link, and I
          take care of the rest.
        </p>
      </div>

      <h2
        id="list-your-club"
        style={{ fontFamily: "var(--font-display)" }}
        className="mt-12 text-xl uppercase tracking-tight text-ink"
      >
        List your club
      </h2>
      <p className="mt-2 mb-5 text-sm leading-relaxed text-ink/70">
        A name and a link are enough, every other field is optional. If you
        add when you meet, I will show that on the club page too, since
        visitors tend to look for it most.
      </p>
      <ClubSubmitFormEn categories={categories} />

      <h2 style={{ fontFamily: "var(--font-display)" }} className="mt-12 text-xl uppercase tracking-tight text-ink">
        Frequently asked questions
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
        Disclaimer: the content on this site is community-sourced information.
        The site has no official relationship with the listed clubs, and does
        not guarantee the data is up to date. Always check the official
        Instagram or website of the club for current information.
      </p>
    </div>
  );
}
