"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState, useEffect } from "react";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [ingredient, setIngredient] = useState("");
  const { user } = useUserAuth();
  const router = useRouter();

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  useEffect(() => {
    if (!user) {
      router.replace("/week-9");
    }
  }, [user, router]);

  return (
    <>
      {user && (
      <div className="mt-8">
        <header>
          <h1 className="text-2xl font-bold text-green-400 italic">
            ShoppingList
          </h1>
        </header>
        <div className="flex justify-start items-start gap-8">
          <main className="mt-4 w-[350px] flex flex-col items-start gap-8 grow-0">
            <NewItem onAddItem={handleAddItem} />
            <ItemList
              items={items}
              onItemSelect={setIngredient}
            />
          </main>
          <div className="mt-4 w-[550px] grow-0">
            <h1 className="text-2xl font-bold text-foreground italic">Meal Ideas</h1>
            <MealIdeas ingredient={ingredient} />
          </div>
        </div>
      </div>
      )}
    </>
  );
}
