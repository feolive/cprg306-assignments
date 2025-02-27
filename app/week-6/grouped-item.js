import Item from "./item";

export default function GroupedItem({ item }) {

 
  return (
    <div className="flex flex-col items-start gap-1">
      {item.header && (
        <h2 className="text-lg font-bold text-red-700 mt-6 mr-2 italic">
          {item.category}
        </h2>
      )}
      <div className="ml-4">
        <Item {...item} />
      </div>
    </div>
  );
}
