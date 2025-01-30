
export default function Item({name, quantity, category}) {
    return (
        <>
            <div className="w-56 flex justify-between items-start p-2 rounded-xl shadow-md shadow-black transition-transform duration-600 ease-linear hover:-translate-x-2">
                <div className="flex flex-col items-start gap-3">
                    <h3 className="font-bold">{name}</h3>
                    <p className="text-sm text-red-700 font-semibold "><span className="outline outline-2 p-1 rounded-xl">{category} </span></p>
                </div>
                <div className="text-gray-500 "><p>{quantity}</p></div>
            </div>
        </>
    );
}