import HomeContent from "@/components/HomeContent";
import { clubs, getCategories, getDistricts } from "@/data/clubs";

export default function Home() {
  const categories = getCategories();
  const districts = getDistricts();

  return (
    <div>
      <section className="border-b border-accent-soft bg-accent-soft/40 px-6 py-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          Ingyenes, közösségi katalógus
        </p>
        <h1
          style={{ fontFamily: "var(--font-serif)" }}
          className="mx-auto mt-4 max-w-3xl text-5xl font-medium leading-tight text-foreground sm:text-6xl"
        >
          Találd meg a <em className="text-accent">közösséged</em> Budapesten
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-foreground/70">
          Kurátori válogatás valódi budapesti közösségi klubokból — ingyenes böngészni,
          ingyenes csatlakozni.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#klubok"
            className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Böngéssz klubok között
          </a>
          <a
            href="/about"
            className="inline-flex items-center rounded-full border border-accent-soft bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent"
          >
            Regisztráld a klubod
          </a>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-12">
        <HomeContent clubs={clubs} categories={categories} districts={districts} />
      </div>
    </div>
  );
}
