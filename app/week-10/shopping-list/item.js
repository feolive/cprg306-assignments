"use client";

const formatName = (name)=>{
    let arr = name.split(/[^A-Za-z]\s*/);
    return arr[0];
}

export default function Item({docId, name, quantity, category, onSelect, onDelete}) {

    const handleDelete = (e,docId) => {
        e.stopPropagation();
        onDelete(docId);
    }

    return (
        <>
            <div className="w-56 flex justify-between items-start p-3 rounded-xl bg-gray-100 transition-transform duration-600 ease-linear hover:bg-gray-300 hover:-translate-x-2 cursor-pointer" onClick={()=>onSelect(formatName(name))}>
                <div className="flex flex-col items-start gap-3">
                    <h3 className="font-bold">{name}</h3>
                    <p className="text-sm text-red-700 font-semibold "><span className="outline outline-2 p-1 rounded-xl">{category} </span></p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <div className="text-gray-500"><p>{quantity}</p></div>
                    <button className="text-sm bg-red-500 text-white px-1 py-0.5 rounded-md" onClick={(e) => handleDelete(e, docId)} >Delete</button>
                </div>
            </div>
        </>
    );
}