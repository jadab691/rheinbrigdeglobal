import type {
  UniversityStudyLevel,
  UniversityType,
} from "@/data/universities";

export type UniversitySortOrder = "asc" | "desc";

export interface UniversityFilterValues {
  query: string;
  city: string;
  type: string;
  studyLevel: string;
  ownership: string;
}

interface UniversityFiltersProps {
  filters: UniversityFilterValues;
  cities: readonly string[];
  types: readonly UniversityType[];
  studyLevels: readonly UniversityStudyLevel[];
  sortOrder: UniversitySortOrder;
  resultCount: number;
  totalCount: number;
  hasActiveFilters: boolean;
  onChange: (key: keyof UniversityFilterValues, value: string) => void;
  onSortChange: (sortOrder: UniversitySortOrder) => void;
  onReset: () => void;
}

export function UniversityFilters({
  filters,
  cities,
  types,
  studyLevels,
  sortOrder,
  resultCount,
  totalCount,
  hasActiveFilters,
  onChange,
  onSortChange,
  onReset,
}: UniversityFiltersProps) {
  return (
    <div className="university-filters">
      <div className="university-filters__search">
        <label htmlFor="university-search">Search institutions</label>
        <input
          autoComplete="off"
          id="university-search"
          onChange={(event) => onChange("query", event.currentTarget.value)}
          placeholder="Search by university name or city"
          type="search"
          value={filters.query}
        />
      </div>
      <div className="university-filters__controls">
        <label>
          City
          <select
            onChange={(event) => onChange("city", event.currentTarget.value)}
            value={filters.city}
          >
            <option value="">All cities</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </label>
        <label>
          Institution type
          <select
            onChange={(event) => onChange("type", event.currentTarget.value)}
            value={filters.type}
          >
            <option value="">All types</option>
            {types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <label>
          Study level
          <select
            onChange={(event) =>
              onChange("studyLevel", event.currentTarget.value)
            }
            value={filters.studyLevel}
          >
            <option value="">All levels</option>
            {studyLevels.map((studyLevel) => (
              <option key={studyLevel} value={studyLevel}>
                {studyLevel}
              </option>
            ))}
          </select>
        </label>
        <label>
          Ownership (verified entries)
          <select
            onChange={(event) =>
              onChange("ownership", event.currentTarget.value)
            }
            value={filters.ownership}
          >
            <option value="">All ownership types</option>
            <option value="Public">Public</option>
            <option value="Private">Private</option>
          </select>
        </label>
      </div>
      <div className="university-filters__summary">
        <p aria-live="polite" className="university-filters__count">
          Showing <strong>{resultCount}</strong> of {totalCount} institutions
        </p>
        <label className="university-filters__sort">
          Sort
          <select
            aria-label="Sort universities alphabetically"
            onChange={(event) =>
              onSortChange(
                event.currentTarget.value === "desc" ? "desc" : "asc",
              )
            }
            value={sortOrder}
          >
            <option value="asc">Alphabetical A–Z</option>
            <option value="desc">Alphabetical Z–A</option>
          </select>
        </label>
        <button
          className="university-filters__reset"
          disabled={!hasActiveFilters}
          onClick={onReset}
          type="button"
        >
          Clear filters
        </button>
      </div>
      <p className="university-filters__note">
        Ownership is shown and filtered only where confirmed in official
        information; unlabelled entries are excluded when Public or Private is
        selected.
      </p>
    </div>
  );
}
