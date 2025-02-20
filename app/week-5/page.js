"use client";
import NewItem from "./new-item";
import { useState } from "react";

const categories = [
  { id: 1, name: "Produce" },
  { id: 2, name: "Dairy" },
  { id: 3, name: "Bakery" },
  { id: 4, name: "Meat" },
  { id: 5, name: "Frozen Foods" },
  { id: 6, name: "Canned Goods" },
  { id: 7, name: "Dry Goods" },
  { id: 8, name: "Beverages" },
  { id: 9, name: "Snacks" },
  { id: 10, name: "Household" },
  { id: 11, name: "Other" },
];

export default function Page() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");
  const [quantity, setQuantity] = useState(1);

  const handleSubmission = (e) => {
    e.preventDefault();
    if (!name) {
      return;
    }
    let item = { name, quantity, category };
    console.log(item);

    alert(JSON.stringify(item));
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <>
      <form
        className="mt-10 w-[350px] flex flex-col justify-center items-center p-2 gap-2 bg-slate-400 rounded-md"
        onSubmit={(e) => handleSubmission(e)}
      >
        <input className="h-12 w-full p-2 rounded-md"
          type="text"
          name="name"
          value={name}
          placeholder="Item name"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <div className="w-full flex flex-row justify-between items-center gap-2">
          <NewItem quantity={quantity} setQuantity={setQuantity} />
          <select className="h-12 w-36 text-lg rounded-md"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <button className="mt-2 h-12 w-full p-2 rounded-md bg-green-400 hover:bg-green-700 focus:ring-2 focus:ring-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed" type="submit">+</button>
      </form>
    </>
  );
}
