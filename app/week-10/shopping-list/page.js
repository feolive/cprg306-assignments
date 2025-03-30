"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import { useState, useEffect } from "react";
import MealIdeas from "./meal-ideas";
import SignOut from "../components/sign-out";
import Link from "next/link";
import Layout from "../layout";
import { getItems, addItem, deleteItem } from "../_service/shopping-list-service";
import { useUserAuth } from "../_utils/auth-context";
import { useFirestore } from "../_utils/firebase";

export default function Page() {
  const [items, setItems] = useState([]);
  const [ingredient, setIngredient] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useUserAuth();
  const db = useFirestore();

  const handleAddItem = (newItem) => {
    if(db && user) {
      addItem(db, user?.uid, newItem).then(
        setLoading(true)
      ).catch(error => {
        console.error("Error adding item:", error);
      });
    }
  };

  const handleDeleteItem = (docId) => {
    if(db && user) {
        if(!confirm("Delete this item?")) {
          return;
        }
        deleteItem(db, user?.uid, docId).catch(error => {
          console.error("Error deleting item:", error);
        });
        setLoading(true);
    }
  };

  useEffect(() => {
    if(user && db) {
      const loadItems = async () => {
        const items = await getItems({db: db, userId: user?.uid});
        setItems(items);
        setLoading(false);
      }
      try{
        loadItems();
      }catch(error){
        console.error("Error loading items:", error);
      }
    }else{
      setItems([]);
    }
  }, [user, db, loading]);

  return (
    <Layout>
      <section className="mt-1 flex flex-col items-start gap-8">
        <div className="w-full flex justify-end items-center gap-2">
          <Link
            className="bg-black text-white p-2 rounded-lg"
            href="/week-10/profile"
          >
            Profile
          </Link>
          <SignOut />
        </div>
        <div className="h-[90vh] overflow-auto">
          <header>
            <h1 className="text-2xl font-bold text-green-400 italic">
              ShoppingList
            </h1>
          </header>
          <div className="flex justify-start items-start gap-8">
            <main className="mt-4 w-[350px] flex flex-col items-start gap-8 grow-0">
              <NewItem onAddItem={handleAddItem} />
              <ItemList items={items} onItemSelect={setIngredient} onDelete={handleDeleteItem} />
            </main>
            <div className="mt-4 w-[550px] grow-0">
              <h1 className="text-2xl font-bold text-foreground italic">
                Meal Ideas
              </h1>
              <MealIdeas ingredient={ingredient} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
