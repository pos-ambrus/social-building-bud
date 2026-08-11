import ClubGrid from "@/components/ClubGrid";
import { clubs, getCategories, getDistricts } from "@/data/clubs";

export default function Home() {
  const categories = getCategories();
  const districts = getDistricts();

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <section className="mb-12 max-w-2xl">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-3 py-1 text-sm font-medium text-accent">
          🎉 100% ingyenes, közösségi kezdeményezés
        </span>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Fedezd fel Budapest legjobb közösségi klubjait
        </h1>
        <p className="mt-4 text-lg text-foreground/70">
          Egy helyen gyűjtöttük össze a város sport-, hobbi-, nyelvcsere- és társasági
          klubjait, hogy könnyebben megtaláld a hozzád illőt — nézelődj, szűrj kedvedre,
          és csatlakozz ahhoz, ami tetszik. Teljesen ingyenes, nincs regisztráció.
        </p>
      </section>

      <ClubGrid clubs={clubs} categories={categories} districts={districts} />
    </div>
  );
}
