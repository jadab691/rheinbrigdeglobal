interface UniversityEmptyStateProps {
  query: string;
  hasOtherFilters: boolean;
  onReset: () => void;
}

export function UniversityEmptyState({
  query,
  hasOtherFilters,
  onReset,
}: UniversityEmptyStateProps) {
  const hasSearch = query.trim().length > 0;
  const title =
    hasSearch && hasOtherFilters
      ? "No institutions match this search and filter combination."
      : hasSearch
        ? "No search results."
        : "No universities match these filters.";

  return (
    <div className="university-empty" role="status">
      <span aria-hidden="true">—</span>
      <h3>{title}</h3>
      <p>
        Try another search or clear the current selections to see the full
        directory.
      </p>
      <button onClick={onReset} type="button">
        Clear search and filters
      </button>
    </div>
  );
}
