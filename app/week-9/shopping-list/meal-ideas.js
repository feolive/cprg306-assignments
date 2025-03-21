"use client";

import { useState, useEffect } from "react";


const fetchMealIdeas = async (ingredient)=>{
    if(!ingredient){
        return [];
    }
    let url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
    try{
        let resp = await fetch(url);
        return await resp.json();
    } catch (error) {
        console.log(error);
        return [];
    }
}

const fetchMealDetails = async (idMeal) => {
  let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
  try{
      let resp = await fetch(url);
      let data = await resp.json();
      let ingredients = wrapDetails(data.meals[0]);
      return {id: idMeal, val:ingredients};
  } catch (error) {
      console.log(error);
      return null;
  }
}

const wrapDetails = (details)=> {
  let vals = [];
  if(details){
    let prefix = "strIngredient";
    let quantityPrefix = "strMeasure";
    for(let i = 1; i <= 20; i++){
      if(!details[`${prefix}${i}`]){
        break;
      }
      vals.push(
        details[`${prefix}${i}`] + " (" + details[`${quantityPrefix}${i}`] + ")"
      );
    }
  }
  return vals;
}

export default function MealIdeas({ingredient}) {

  const [meals, setMeals] = useState([]);
  const [mealDetails, setMealDetails] = useState(null);

  const loadDetails = async (idMeal)=>{
    let details = await fetchMealDetails(idMeal);
    setMealDetails(details);
  }

  const loadMealIdeas = async (ingredient)=>{
    let res = await fetchMealIdeas(ingredient);
    setMeals(res.meals);
  }

  useEffect(() => {
    loadMealIdeas(ingredient);
  }, [ingredient]);


  return (
    <section className="mt-8">
      <h1>Meal Ideas</h1>
      <p>Here are some meal ideas using {ingredient}</p>
      {meals && meals.map((meal) => (
        <div key={meal.idMeal} className="py-1" onClick={() => loadDetails(meal.idMeal)}>
        <ul className="group hover:bg-gray-300"  key={meal.idMeal}>
          <li className="p-2 bg-white transition-colors duration-150 ease-linear group-hover:bg-gray-300 cursor-pointer" >{meal.strMeal}</li>
          {mealDetails && mealDetails.id === meal.idMeal && (
            <>
            <div className="h-0 border border-green-300"/>
            <ul className="p-2 bg-white transition-colors duration-150 ease-linear group-hover:bg-gray-300 cursor-pointer">
              {mealDetails.val.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            </>
          )}
        </ul>
        </div>
      ))}
    </section>
  );
}