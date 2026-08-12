import Link from "next/link";
import ClubGrid from "@/components/ClubGrid";
import HeroCollage from "@/components/HeroCollage";
import { clubs, getCategories, getDistricts } from "@/data/clubs";

export default function Home() {
  const categories = getCategories();
  const districts = getDistricts();

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <section className="relative mb-16 flex flex-col items-center gap-10 overflow-hidden lg:flex-row lg:justify-between">
        <div
          className="pointer-events-none absolute -left-24 -top-24 -z-10 h-72 w-72 rounded-full blur-3xl"
          style={{ backgroundColor: "var(--blob-purple)", opacity: 0.5 }}
        />
        <div
          className="pointer-events-none absolute -right-16 top-32 -z-10 h-56 w-56 rounded-full blur-3xl"
          style={{ backgroundColor: "var(--blob-yellow)", opacity: 0.5 }}
        />

        <div className="max-w-xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-3 py-1 text-sm font-medium text-accent">
            🎉 100% ingyenes, közösségi kezdeményezés
          </span>
          <h1 className="mt-5 text-5xl font-light tracking-tight text-foreground sm:text-6xl">
            Találd meg a{" "}
            <span className="gradient-text font-semibold">te közösséged</span>
          </h1>
          <p className="mt-5 text-lg text-foreground/70">
            Sport, hobbi, nyelvcsere, tech és sok más — fedezd fel Budapest élő
            közösségeit, szűrj kedvedre, és csatlakozz ahhoz, ami hozzád illik.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a
              href="#klubok"
              className="inline-flex items-center rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
            >
              Fedezz fel közösségeket
            </a>
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground/70 hover:text-accent"
            >
              Indíts közösséget <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <HeroCollage />
      </section>

      <div id="klubok">
        <ClubGrid clubs={clubs} categories={categories} districts={districts} />
      </div>
    </div>
  );
}
