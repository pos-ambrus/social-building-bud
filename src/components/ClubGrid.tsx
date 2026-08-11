"use client";

import { useMemo, useState } from "react";
import type { Club } from "@/data/clubs";
import ClubCard from "./ClubCard";

const PAGE_SIZE = 10;

type Props = {
  clubs: Club[];
  categories: string[];
  districts: string[];
};

export default function ClubGrid({ clubs, categories, districts }: Props) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("");
  const [district, setDistrict] = useState<string>("");
  const [page, setPage] = useState(1);
  const [appliedFilters, setAppliedFilters] = useState({ search, category, district });

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return clubs.filter((club) => {
      const matchesSearch =
        !q ||
        club.name.toLowerCase().includes(q) ||
        club.description.toLowerCase().includes(q);
      const matchesCategory = !category || club.category === category;
      const matchesDistrict = !district || club.district === district;
      return matchesSearch && matchesCategory && matchesDistrict;
    });
  }, [clubs, search, category, district]);

  if (
    search !== appliedFilters.search ||
    category !== appliedFilters.category ||
    district !== appliedFilters.district
  ) {
    setAppliedFilters({ search, category, district });
    setPage(1);
  }

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const paginated = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  return (
    <div>
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Keress klub neve vagy leírás alapján…"
          className="w-full flex-1 rounded-full border border-neutral-300 px-4 py-2.5 text-sm focus:border-neutral-900 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-full border border-neutral-300 px-4 py-2.5 text-sm focus:border-neutral-900 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
        >
          <option value="">Minden kategória</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <select
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
          className="rounded-full border border-neutral-300 px-4 py-2.5 text-sm focus:border-neutral-900 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
        >
          <option value="">Minden kerület</option>
          {districts.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>

      <p className="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
        {filtered.length} klub található
      </p>

      {filtered.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-neutral-300 p-10 text-center text-neutral-500 dark:border-neutral-700">
          Nincs a szűrésnek megfelelő klub. Próbálj más keresést vagy szűrőt.
        </p>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {paginated.map((club) => (
              <ClubCard key={club.id} club={club} />
            ))}
          </div>

          {pageCount > 1 && (
            <div className="mt-10 flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 disabled:cursor-not-allowed disabled:opacity-40 dark:border-neutral-700 dark:text-neutral-200"
              >
                Előző
              </button>
              {Array.from({ length: pageCount }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPage(p)}
                  className={`h-9 w-9 rounded-full text-sm font-medium transition-colors ${
                    p === currentPage
                      ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                      : "text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
                  }`}
                >
                  {p}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
                disabled={currentPage === pageCount}
                className="rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 disabled:cursor-not-allowed disabled:opacity-40 dark:border-neutral-700 dark:text-neutral-200"
              >
                Következő
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
