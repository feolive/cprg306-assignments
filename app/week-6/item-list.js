"use client";

import Item from "./item";
import items from "./items.json";
import { useState } from "react";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");
  const [prevBtn, setPrevBtn] = useState("name");

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    document.getElementById(prevBtn).className = "nav-btn";
    e.target.className = "nav-btn activated";
    setPrevBtn(e.target.id);
  };

  return (
    <div className="flex flex-col items-start gap-2">
      <div className="flex items-center gap-2">
        <h2 className="text-lg font-bold text-gray-500 mr-2">Sort By:</h2>
        <button id="name" className="nav-btn activated" value="name" onClick={(e) => handleSortChange(e)}>Name</button>
        <button id="category" className="nav-btn" value="category" onClick={(e) => handleSortChange(e)}>Category</button>
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
