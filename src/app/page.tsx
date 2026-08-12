import HomeContent from "@/components/HomeContent";
import { clubs, getCategories, getDistricts } from "@/data/clubs";

export default function Home() {
  const categories = getCategories();
  const districts = getDistricts();

  return (
    <div>
      <section className="corkboard relative overflow-hidden border-b-2 border-ink/10 px-6 py-24 text-center">
        <span
          style={{ fontFamily: "var(--font-handwritten)", transform: "rotate(-4deg)" }}
          className="absolute left-1/2 top-8 inline-block -translate-x-1/2 rounded-sm bg-pin-yellow px-4 py-1 text-xl font-bold text-ink shadow-md sm:left-[62%] sm:top-10"
        >
          100% ingyenes!
        </span>

        <h1
          style={{ fontFamily: "var(--font-display)" }}
          className="mx-auto mt-16 max-w-3xl text-5xl uppercase leading-[1.05] tracking-tight text-ink sm:text-7xl"
        >
          Találd meg a közösséged
          <br />
          Budapesten
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-ink/70">
          Kurátori válogatás valódi budapesti közösségi klubokból — mintha egy hirdetőtáblán
          böngésznél, csak digitálisan.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#klubok"
            className="inline-flex items-center border-2 border-ink bg-ink px-6 py-3 text-sm font-bold uppercase tracking-wide text-paper transition-colors hover:bg-pin-blue hover:border-pin-blue"
          >
            Böngéssz klubok között
          </a>
          <a
            href="/about"
            className="inline-flex items-center border-2 border-dashed border-ink/40 bg-transparent px-6 py-3 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:border-ink"
          >
            Regisztráld a klubod
          </a>
        </div>
        <p className="mt-3 text-sm text-ink/50">
          Ingyenes, nincs bürokrácia — csak küldj egy emailt, a többit elintézem.
        </p>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-12">
        <HomeContent clubs={clubs} categories={categories} districts={districts} />
      </div>
    </div>
  );
}
