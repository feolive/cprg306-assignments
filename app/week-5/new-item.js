import { useState,useEffect } from "react";

export default function NewItem({quantity, setQuantity}) {
  const [minusDisabled, setMinusDisabled] = useState(false);
  const [plusDisabled, setPlusDisabled] = useState(false);

  useEffect(() => {
    setMinusDisabled(quantity <= 1);
    setPlusDisabled(quantity >= 20);
  }, [quantity]);

  function calculate(operator){
    if(operator === 1){
        if(quantity < 20){
            setQuantity(quantity + 1);
        }
    }else if(operator === 2){
        if(quantity > 1){
            setQuantity(quantity - 1);
        }
    }
  }


  return (
    <>
      <div className="w-36 flex justify-center items-center p-2 gap-2 rounded-md bg-white">
          <h1 className="w-24 text-lg text-red-700 font-semibold">{quantity}</h1>
          <button className="w-8 h-8 flex justify-center items-center p-2 rounded-md bg-green-400 hover:bg-green-700 focus:ring-2 focus:ring-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed" disabled={minusDisabled} onClick={()=>calculate(2)}>
            <span className="font-bold text-2xl text-white pointer-events-none">
              -
            </span>
          </button>
          <button className="w-8 h-8 flex justify-center items-center p-2 rounded-md bg-green-400 hover:bg-green-700 focus:ring-2 focus:ring-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed" disabled={plusDisabled} onClick={()=>calculate(1)}>
            <span className="font-bold text-2xl text-white pointer-events-none">
              +
            </span>
          </button>
        </div>
    </>
  );
}
