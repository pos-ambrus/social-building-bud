import ClubGrid from "@/components/ClubGrid";
import { clubs, getCategories, getDistricts } from "@/data/clubs";

export default function Home() {
  const categories = getCategories();
  const districts = getDistricts();

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <section className="mb-12 max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
          Fedezd fel Budapest legjobb közösségi klubjait
        </h1>
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
          Egy helyen a városi sport-, hobbi-, nyelvcsere- és társasági klubok — hasonlítsd össze
          őket, és találd meg a hozzád illőt.
        </p>
      </section>

      <ClubGrid clubs={clubs} categories={categories} districts={districts} />
    </div>
  );
}
