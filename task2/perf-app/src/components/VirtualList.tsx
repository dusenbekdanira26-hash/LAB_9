import { useState, useMemo, useCallback } from "react";
import { FixedSizeList } from "react-window";
import { generateItems } from "../utils/generateItems";

interface RowProps {
  index: number;
  style: React.CSSProperties;
}

export function VirtualList({ itemCount = 10000, height = 500 }) {
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

  const Row = ({ index, style }: RowProps) => {
    const item = filteredItems[index];
    return (
      <div style={style} className="list-item">
        <h4>{item.title}</h4>
        <p>{item.description}</p>
        <span className="category">{item.category}</span>
      </div>
    );
  };

  return (
    <div className="virtual-list-container">
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
      <FixedSizeList
        height={height}
        itemCount={filteredItems.length}
        itemSize={80}
        width="100%"
      >
        {Row}
      </FixedSizeList>
    </div>
  );
}