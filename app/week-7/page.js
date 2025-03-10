"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page() {
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    return (
        <>
            <div className="mt-8">
                <header>
                    <h1 className="text-2xl font-bold text-black italic">Shopping<span className="text-red-700">List</span></h1>
                </header>
                <main className="mt-4 flex flex-col items-start gap-8">
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} />
                </main>
            </div>
        </>
    );
}