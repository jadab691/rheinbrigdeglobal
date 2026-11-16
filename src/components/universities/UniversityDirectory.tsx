"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/layout/Container";
import {
  UniversityFilters,
  type UniversityFilterValues,
  type UniversitySortOrder,
} from "@/components/universities/UniversityFilters";
import { UniversityCard } from "@/components/universities/UniversityCard";
import { UniversityEmptyState } from "@/components/universities/UniversityEmptyState";
import type {
  University,
  UniversityStudyLevel,
  UniversityType,
} from "@/data/universities";

interface UniversityDirectoryProps {
  universities: readonly University[];
}

const initialFilters: UniversityFilterValues = {
  query: "",
  city: "",
  type: "",
  studyLevel: "",
  ownership: "",
};

export function UniversityDirectory({
  universities,
}: UniversityDirectoryProps) {
  const [filters, setFilters] =
    useState<UniversityFilterValues>(initialFilters);
  const [sortOrder, setSortOrder] = useState<UniversitySortOrder>("asc");

  const cities = useMemo(
    () =>
      Array.from(new Set(universities.map((university) => university.city))).sort(
        (a, b) => a.localeCompare(b),
      ),
    [universities],
  );
  const types = useMemo(
    (): UniversityType[] =>
      Array.from(
        new Set<UniversityType>(
          universities.map((university) => university.type),
        ),
      ).sort((a, b) => a.localeCompare(b)),
    [universities],
  );
  const studyLevels = useMemo(
    (): UniversityStudyLevel[] =>
      Array.from(
        new Set<UniversityStudyLevel>(
          universities.flatMap(
            (university) => university.studyLevels ?? [],
          ),
        ),
      ).sort((a, b) => a.localeCompare(b)),
    [universities],
  );

  const filteredUniversities = useMemo(() => {
    const searchTerm = filters.query.trim().toLocaleLowerCase();

    return universities
      .filter((university) => {
        const matchesSearch =
          !searchTerm ||
          `${university.name} ${university.city}`
            .toLocaleLowerCase()
            .includes(searchTerm);
        const matchesCity =
          !filters.city || university.city === filters.city;
        const matchesType =
          !filters.type || university.type === filters.type;
        const matchesStudyLevel =
          !filters.studyLevel ||
          (university.studyLevels?.some(
            (level) => level === filters.studyLevel,
          ) ??
            false);
        const matchesOwnership =
          !filters.ownership ||
          university.ownership === filters.ownership;

        return (
          matchesSearch &&
          matchesCity &&
          matchesType &&
          matchesStudyLevel &&
          matchesOwnership
        );
      })
      .sort((left, right) => {
        const alphabetical = left.name.localeCompare(right.name, "en", {
          sensitivity: "base",
        });
        return sortOrder === "asc" ? alphabetical : -alphabetical;
      });
  }, [filters, sortOrder, universities]);

  const hasOtherFilters = Boolean(
    filters.city || filters.type || filters.studyLevel || filters.ownership,
  );
  const hasActiveFilters =
    Object.values(filters).some(Boolean) || sortOrder !== "asc";

  function updateFilter(key: keyof UniversityFilterValues, value: string) {
    setFilters((currentFilters) => ({
      ...currentFilters,
      [key]: value,
    }));
  }

  function resetFilters() {
    setFilters(initialFilters);
    setSortOrder("asc");
  }

  return (
    <section
      aria-labelledby="university-directory-title"
      className="university-directory"
      id="university-directory"
    >
      <Container>
        <div className="university-directory__intro">
          <div>
            <span className="eyebrow">The directory</span>
            <h2 id="university-directory-title">
              Start with a university. Explore what fits.
            </h2>
          </div>
          <p>
            Search by institution or city, then narrow your options using
            verified directory details.
          </p>
        </div>
        <UniversityFilters
          cities={cities}
          filters={filters}
          hasActiveFilters={hasActiveFilters}
          onChange={updateFilter}
          onReset={resetFilters}
          onSortChange={setSortOrder}
          resultCount={filteredUniversities.length}
          sortOrder={sortOrder}
          studyLevels={studyLevels}
          totalCount={universities.length}
          types={types}
        />
        <div className="university-results" id="university-results">
          {filteredUniversities.length > 0 ? (
            <div className="university-results__grid">
              {filteredUniversities.map((university, index) => (
                <UniversityCard
                  key={university.id}
                  number={String(index + 1).padStart(2, "0")}
                  university={university}
                />
              ))}
            </div>
          ) : (
            <UniversityEmptyState
              hasOtherFilters={hasOtherFilters}
              onReset={resetFilters}
              query={filters.query}
            />
          )}
        </div>
      </Container>
    </section>
  );
}
