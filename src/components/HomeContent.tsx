"use client";

import { useMemo, useState } from "react";
import type { Club } from "@/data/clubs";
import { getCategoryIcon } from "@/lib/categoryIcons";
import ClubCard from "./ClubCard";

const PAGE_SIZE = 8;

type Props = {
  clubs: Club[];
  categories: string[];
  districts: string[];
  initialCategory?: string;
};

export default function HomeContent({ clubs, categories, districts, initialCategory }: Props) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>(initialCategory ?? "");
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
          className="w-full flex-1 border-2 border-ink/15 bg-paper px-4 py-2.5 text-sm text-ink placeholder:text-ink/40 focus:border-pin-blue focus:outline-none"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border-2 border-ink/15 bg-paper px-4 py-2.5 text-sm text-ink focus:border-pin-blue focus:outline-none"
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
          className="border-2 border-ink/15 bg-paper px-4 py-2.5 text-sm text-ink focus:border-pin-blue focus:outline-none"
        >
          <option value="">Minden kerület</option>
          {districts.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>

      {category && (
        <div className="mb-6">
          <button
            type="button"
            onClick={() => setCategory("")}
            className="inline-flex items-center gap-1.5 border-2 border-pin-blue bg-accent-soft px-4 py-2.5 text-sm font-medium text-pin-blue"
          >
            {getCategoryIcon(category)} {category} ✕
          </button>
        </div>
      )}

      <p className="mb-6 text-sm text-ink/60">{filtered.length} klub található</p>

      {filtered.length === 0 ? (
        <p className="border-2 border-dashed border-ink/20 p-10 text-center text-ink/60">
          Nincs a szűrésnek megfelelő klub. Próbálj más keresést vagy szűrőt.
        </p>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {paginated.map((club) => (
              <ClubCard key={club.id} club={club} />
            ))}
          </div>

          {pageCount > 1 && (
            <div className="mt-12 flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="border-2 border-ink/15 px-4 py-2 text-sm font-medium text-ink/70 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Előző
              </button>
              {Array.from({ length: pageCount }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPage(p)}
                  className={`flex h-9 w-9 items-center justify-center border-2 text-sm font-medium transition-colors ${
                    p === currentPage
                      ? "border-ink bg-ink text-paper"
                      : "border-ink/15 text-ink/60 hover:border-ink/40"
                  }`}
                >
                  {p}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
                disabled={currentPage === pageCount}
                className="border-2 border-ink/15 px-4 py-2 text-sm font-medium text-ink/70 disabled:cursor-not-allowed disabled:opacity-40"
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
