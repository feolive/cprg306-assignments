"use client";

import Item from "./item";
import items from "./items.json";
import { useState, useEffect } from "react";
import GroupedItem from "./grouped-item";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");
  const [prevBtn, setPrevBtn] = useState("name");
  const [grouped, setGrouped] = useState(false);

  const handleSortChange = (e) => {
    let id = e.target.id;
    setSortBy(e.target.value);
    setGrouped(id === "group");
    document.getElementById(prevBtn).className = "nav-btn";
    e.target.className = "nav-btn activated";
    setPrevBtn(id);
  };

  useEffect(() => {
    // let temp = Object.assign([], items);
    // temp.sort((a, b) =>
    //    a.category.localeCompare(b.category, "en")
    // );
    // let prev = temp[0].category;
    // for (let i = 0; i < temp.length; i++) {
    //   if (temp[i].category === prev) {
    //     temp[i].category = null;
    //   } else {
    //     prev = temp[i].category;
    //   }
    // }
    let temp = new Map();
    for (let i = 0; i < items.length; i++) {
      if(temp.has(items[i].category)){
        items[i].header = false;
      } else {
        temp.set(items[i].category, true);
        items[i].header = true;
      }
    }
  }, []);

  return (
    <div className="flex flex-col items-start gap-2">
      <div className="flex items-center gap-2">
        <h2 className="text-lg font-bold text-gray-500 mr-2">Sort By:</h2>
        <button id="name" className="nav-btn activated" value="name" onClick={(e) => handleSortChange(e)}>Name</button>
        <button id="category" className="nav-btn" value="category" onClick={(e) => handleSortChange(e)}>Category</button>
        <button id="group" className="nav-btn" value="category" onClick={(e) => handleSortChange(e)}>Grouped Category</button>
      </div>
      {items
        .sort((a, b) =>
          sortBy === "name"
            ? a.name.localeCompare(b.name, "en")
            : a.category.localeCompare(b.category, "en")
        )
        .map((item) => (
            grouped ? <GroupedItem key={item.id} item={item} /> : <Item key={item.id} {...item} />
        ))
      }
    </div>
  );
}
