export interface Item {
  id: number;
  title: string;
  description: string;
  category: string;
}

export function generateItems(count: number): Item[] {
  const categories = ["Books", "Movies", "Games", "Music"];
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    title: `Item ${i + 1}`,
    description: `This is the description for item ${i + 1}`,
    category: categories[i % categories.length]
  }));
}