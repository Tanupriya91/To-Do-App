function FilterBar({
  currentFilter,
  onFilterChange,
  counts,
}) {
  return (
    <div className="filter-bar">
      <button
        className={
          currentFilter === "all"
            ? "active-filter"
            : ""
        }
        onClick={() =>
          onFilterChange("all")
        }
      >
        All ({counts.all})
      </button>

      <button
        className={
          currentFilter === "active"
            ? "active-filter"
            : ""
        }
        onClick={() =>
          onFilterChange("active")
        }
      >
        Active ({counts.active})
      </button>

      <button
        className={
          currentFilter === "completed"
            ? "active-filter"
            : ""
        }
        onClick={() =>
          onFilterChange("completed")
        }
      >
        Completed ({counts.completed})
      </button>
    </div>
  );
}

export default FilterBar;