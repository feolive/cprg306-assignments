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

const wrapDetails = (details)=> {
  let vals = [];
  if(details){
    let prefix = "strIngredient";
    let quantityPrefix = "strMeasure";
    for(let i = 0; i < 20; i++){
      if(!details[`${prefix}${i}`]){
        break;
      }
      vals.push(
        details[`${prefix}${i}`] + " " + details[`${quantityPrefix}${i}`]
      );
    }
  }
  let res = {
    display: vals.length > 0,
    ingredients: vals
  };
  return res;
}

export default function MealIdeas({ingredient}) {

  const [meals, setMeals] = useState([]);
  const [mealDetails, setMealDetails] = useState(new Map());

  const fetchMealDetails = async (idMeal) => {
    let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    try{
        let resp = await fetch(url);
        let details = await resp.json().meals[0];
        let val = wrapDetails(details);
        setMealDetails(prev => new Map(prev.set(idMeal, val)));
    } catch (error) {
        console.log(error);
        return null;
    }
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
        <ul key={meal.idMeal}>
          <li className="p-2 rounded-md bg-gray-100 transition-transform duration-600 ease-linear hover:-translate-x-2 cursor-pointer" onClick={() => fetchMealDetails(meal.idMeal)}>{meal.strMeal}</li>
          {mealDetails?.get(meal.idMeal)?.display && (
            <ul className="p-2 rounded-md bg-gray-100 transition-transform duration-600 ease-linear hover:-translate-x-2 cursor-pointer">
              {mealDetails.get(meal.idMeal).ingredients.map((ingredient, i) => (
                <li key={i}>{ingredient}</li>
              ))}
            </ul>
          )}
        </ul>
      ))}
    </section>
  );
}