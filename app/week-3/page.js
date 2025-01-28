import ItemList from "./item-list";

export default function Page() {
    return (
        <>
            <div className="mt-8">
                <header>
                    <h1 className="text-2xl font-bold text-blue-700">Shopping List</h1>
                </header>
                <main className="mt-10">
                    <ItemList />
                </main>
            </div>
        </>
    );
}