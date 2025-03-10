import { useState, useEffect } from "react";

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

export default function NewItem({ onAddItem }) {
  const [minusDisabled, setMinusDisabled] = useState(false);
  const [plusDisabled, setPlusDisabled] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

  useEffect(() => {
    setMinusDisabled(quantity <= 1);
    setPlusDisabled(quantity >= 20);
  }, [quantity]);

  function calculate(operator) {
    if (operator === 1) {
      if (quantity < 20) {
        setQuantity(quantity + 1);
      }
    } else if (operator === 2) {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    }
  }

  const handleSubmission = (e) => {
    e.preventDefault();
    if (!name) {
      return;
    }
    if (!quantity) {
      alert("Quantity is required");
      return;
    }
    if (!category) {
      return;
    }
    let item = { name, quantity, category };

    onAddItem(item);
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
        <input
          className="h-12 w-full p-2 rounded-md"
          type="text"
          name="name"
          value={name}
          placeholder="Item name"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <div className="w-full flex justify-between items-center gap-2">
          <div className="w-36 flex justify-start items-center p-2 gap-2 rounded-md bg-white">
            <h1 className="w-24 text-lg text-red-700 font-semibold">
              {quantity}
            </h1>
            <button
              className="w-8 h-8 flex justify-center items-center p-2 rounded-md bg-green-400 hover:bg-green-700 focus:ring-2 focus:ring-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
              disabled={minusDisabled}
              type="button"
              onClick={() => calculate(2)}
            >
              <span className="font-bold text-2xl text-white pointer-events-none">
                -
              </span>
            </button>
            <button
              className="w-8 h-8 flex justify-center items-center p-2 rounded-md bg-green-400 hover:bg-green-700 focus:ring-2 focus:ring-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
              disabled={plusDisabled}
              type="button"
              onClick={() => calculate(1)}
            >
              <span className="font-bold text-2xl text-white pointer-events-none">
                +
              </span>
            </button>
            </div>
            {/* Category Dropdown */}
            <select
              className="h-12 w-36 text-lg rounded-md"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              {categories.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
        </div>
        <button
          className="mt-2 h-12 w-full p-2 rounded-md bg-green-400 hover:bg-green-700 focus:ring-2 focus:ring-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
          type="submit"
        >
          +
        </button>
      </form>
    </>
  );
}
