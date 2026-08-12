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
      <div className="mb-8">
        <h2 className="mb-3 text-sm font-semibold text-foreground/60">Böngéssz kategória szerint</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => {
            const isActive = category === c;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(isActive ? "" : c)}
                className={`flex items-center gap-1.5 rounded-xl border px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "border-transparent text-white"
                    : "border-accent-soft bg-white/70 text-foreground/70 hover:border-accent"
                }`}
                style={
                  isActive
                    ? { backgroundImage: "linear-gradient(90deg, var(--gradient-from), var(--gradient-to))" }
                    : undefined
                }
              >
                <span>{getCategoryIcon(c)}</span>
                {c}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Keress klub neve vagy leírás alapján…"
          className="w-full flex-1 rounded-full border border-accent-soft bg-white/70 px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-accent focus:outline-none"
        />
        <select
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
          className="rounded-full border border-accent-soft bg-white/70 px-4 py-2.5 text-sm text-foreground focus:border-accent focus:outline-none"
        >
          <option value="">Minden kerület</option>
          {districts.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>

      <p className="mb-6 text-sm text-foreground/60">
        {filtered.length} klub található
      </p>

      {filtered.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-accent-soft p-10 text-center text-foreground/60">
          Nincs a szűrésnek megfelelő klub. Próbálj más keresést vagy szűrőt.
        </p>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
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
                className="rounded-full border border-accent-soft px-4 py-2 text-sm font-medium text-foreground/70 disabled:cursor-not-allowed disabled:opacity-40"
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
                      ? "bg-accent text-white"
                      : "text-foreground/60 hover:bg-accent-soft"
                  }`}
                >
                  {p}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
                disabled={currentPage === pageCount}
                className="rounded-full border border-accent-soft px-4 py-2 text-sm font-medium text-foreground/70 disabled:cursor-not-allowed disabled:opacity-40"
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
