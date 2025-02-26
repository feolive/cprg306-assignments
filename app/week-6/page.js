import ItemList from "./item-list";

export default function Page() {
    return (
        <>
            <div className="mt-8">
                <header>
                    <h1 className="text-2xl font-bold text-black italic">Shopping<span className="text-red-700">List</span></h1>
                </header>
                <main className="mt-10">
                    <ItemList />
                </main>
            </div>
        </>
    );
}