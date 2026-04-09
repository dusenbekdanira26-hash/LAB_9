import { useState, useMemo, useCallback } from "react";
import { generateItems } from "../utils/generateItems";

export function RegularList({ itemCount = 1000 }) {
  const [filter, setFilter] = useState("");

  const items = useMemo(() => generateItems(itemCount), [itemCount]);

  const filteredItems = useMemo(() => {
    if (!filter) return items;
    return items.filter(
      item =>
        item.title.toLowerCase().includes(filter.toLowerCase()) ||
        item.category.toLowerCase().includes(filter.toLowerCase())
    );
  }, [items, filter]);

  const handleFilterChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  }, []);

  return (
    <div className="regular-list-container">
      <input
        type="text"
        placeholder="Filter items..."
        value={filter}
        onChange={handleFilterChange}
        className="filter-input"
      />
      <div className="list-info">
        Showing {filteredItems.length} of {items.length} items
      </div>
      <div className="list">
        {filteredItems.map(item => (
          <div key={item.id} className="list-item">
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <span className="category">{item.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}