"use client";

import Item from "./item";
import items from "./items.json";
import { useState } from "react";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="flex flex-col items-start gap-2">
      <div className="flex items-center gap-2">
        <h2 className="text-lg font-bold text-blue-700">Sort By:</h2>
        <button className="bg-black text-white p-1 rounded-sm" value="name" onClick={(e) => handleSortChange(e)}>Name</button>
        <button className="bg-red-700 text-white p-1 rounded-sm" value="category" onClick={(e) => handleSortChange(e)}>Category</button>
      </div>
      {items
        .sort((a, b) =>
          sortBy === "name"
            ? a.name.localeCompare(b.name, "en")
            : a.category.localeCompare(b.category, "en")
        )
        .map((item) => (
          <Item key={item.id} {...item} />
        ))}
    </div>
  );
}
