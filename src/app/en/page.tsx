import type { Metadata } from "next";
import Link from "next/link";
import CategoryBrowseEn from "@/components/CategoryBrowseEn";
import HeroPhotos from "@/components/HeroPhotos";
import { clubs, getCategories } from "@/data/clubs";

export const metadata: Metadata = {
  alternates: { canonical: "/en", languages: { hu: "/", en: "/en" } },
};

const STAT_ROTATIONS = [-3, 2, -1.5];

const STEPS = [
  "Pick a category, or search for a specific activity.",
  "Check out the clubs in it: description, Instagram or website in one place.",
  "Reach out to them directly, and join for free, no registration needed.",
];

const FAQ = [
  {
    q: "What is Budapesti Közösségek?",
    a: "A free, hand-picked list of real Budapest community clubs: sport, language exchange, book clubs, yoga and many other topics.",
  },
  {
    q: "How do I find the community that's right for me?",
    a: "Browse by category on the homepage, or search the full club list by keyword. Both are free and need no registration.",
  },
  {
    q: "Do I have to pay to join a club?",
    a: "Most clubs listed here are free. If a specific club does charge a fee, it states this on its own page, not here.",
  },
];

export default function HomeEn() {
  const categories = getCategories();
  const stats = [
    { value: `${clubs.length}`, label: "communities listed" },
    { value: `${categories.length}`, label: "different categories" },
    { value: "100%", label: "free, forever" },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="corkboard relative overflow-hidden px-6 py-24">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
          <div className="max-w-2xl">
            <span
              style={{ fontFamily: "var(--font-handwritten)", transform: "rotate(-4deg)" }}
              className="mb-6 inline-block rounded-sm bg-pin-yellow px-4 py-1 text-xl font-bold text-ink shadow-md"
            >
              100% free!
            </span>

            <h1
              style={{ fontFamily: "var(--font-display)" }}
              className="text-5xl uppercase leading-[1.05] tracking-tight text-ink sm:text-7xl"
            >
              Budapest Communities
              <br />
              Find yours
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-ink/70 lg:mx-0">
              Hand-picked, real Budapest community clubs. I hope you find your
              new community among them too.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Link
                href="/en/clubs"
                className="inline-flex items-center rounded-full border-2 border-cta bg-cta px-6 py-3 text-sm font-bold uppercase tracking-wide text-paper shadow-lg transition-colors hover:border-cta-hover hover:bg-cta-hover"
              >
                Browse clubs
              </Link>
              <a
                href="/en/about"
                className="inline-flex items-center rounded-full border-2 border-dashed border-ink/40 bg-transparent px-6 py-3 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:border-ink"
              >
                List your club
              </a>
            </div>
            <p className="mt-3 text-sm text-ink/50">
              Free, no bureaucracy: just send an email and I take care of the rest.
            </p>
          </div>

          <HeroPhotos />
        </div>

        <svg
          className="absolute inset-x-0 bottom-0 h-6 w-full text-board"
          viewBox="0 0 1200 24"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 24 L0 10 Q 30 0 60 10 T 120 10 T 180 10 T 240 10 T 300 10 T 360 10 T 420 10 T 480 10 T 540 10 T 600 10 T 660 10 T 720 10 T 780 10 T 840 10 T 900 10 T 960 10 T 1020 10 T 1080 10 T 1140 10 T 1200 10 L1200 24 Z"
            fill="currentColor"
          />
        </svg>
      </section>

      <div className="mx-auto -mt-6 flex max-w-4xl flex-wrap justify-center gap-6 px-6 sm:gap-10">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            style={{ transform: `rotate(${STAT_ROTATIONS[i]}deg)` }}
            className="tape-corner relative bg-paper px-6 py-4 text-center shadow-md"
          >
            <p style={{ fontFamily: "var(--font-display)" }} className="text-3xl text-cta">
              {stat.value}
            </p>
            <p className="mt-1 text-xs uppercase tracking-wide text-ink/60">{stat.label}</p>
          </div>
        ))}
      </div>

      <CategoryBrowseEn categories={categories} />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 style={{ fontFamily: "var(--font-display)" }} className="text-2xl uppercase tracking-tight text-ink">
          How does it work?
        </h2>
        <ol className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {STEPS.map((step, i) => (
            <li key={step} className="rounded-2xl bg-paper p-5 shadow-sm">
              <span
                style={{ fontFamily: "var(--font-display)" }}
                className="text-3xl text-cta"
              >
                {i + 1}
              </span>
              <p className="mt-2 text-sm text-ink/70">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-16">
        <h2 style={{ fontFamily: "var(--font-display)" }} className="text-2xl uppercase tracking-tight text-ink">
          Frequently asked questions
        </h2>
        <div className="mt-6 space-y-6">
          {FAQ.map((item) => (
            <div key={item.q}>
              <h3 className="font-semibold text-ink">{item.q}</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink/70">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
