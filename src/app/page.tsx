import type { Metadata } from "next";
import Link from "next/link";
import CategoryBrowse from "@/components/CategoryBrowse";
import HeroPhotos from "@/components/HeroPhotos";
import { getCategories } from "@/data/clubs";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  const categories = getCategories();

  return (
    <div>
      <section className="corkboard relative overflow-hidden px-6 py-24">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
          <div className="max-w-2xl">
            <span
              style={{ fontFamily: "var(--font-handwritten)", transform: "rotate(-4deg)" }}
              className="mb-6 inline-block rounded-sm bg-pin-yellow px-4 py-1 text-xl font-bold text-ink shadow-md"
            >
              100% ingyenes!
            </span>

            <h1
              style={{ fontFamily: "var(--font-display)" }}
              className="text-5xl uppercase leading-[1.05] tracking-tight text-ink sm:text-7xl"
            >
              Találd meg a közösséged
              <br />
              Budapesten
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-ink/70 lg:mx-0">
              Kézzel válogatott, valódi budapesti közösségi klubok. Remélem, te is
              megtalálod köztük az új közösséged.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Link
                href="/klubok"
                className="inline-flex items-center rounded-full border-2 border-cta bg-cta px-6 py-3 text-sm font-bold uppercase tracking-wide text-paper shadow-lg transition-colors hover:border-cta-hover hover:bg-cta-hover"
              >
                Böngéssz klubok között
              </Link>
              <a
                href="/about"
                className="inline-flex items-center rounded-full border-2 border-dashed border-ink/40 bg-transparent px-6 py-3 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:border-ink"
              >
                Regisztráld a klubod
              </a>
            </div>
            <p className="mt-3 text-sm text-ink/50">
              Ingyenes, nincs bürokrácia: csak küldj egy emailt, a többit elintézem.
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

      <CategoryBrowse categories={categories} />
    </div>
  );
}
