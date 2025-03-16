"use client";

import { useState, useEffect } from "react";


const fetchMealIdeas = async (ingredient)=>{
    let url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
    try{
        let resp = await fetch(url);
        return resp.json();
    } catch (error) {
        console.log(error);
        return [];
    }
}

const fetchMealDetails = async (idMeal) => {
    let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    try{
        let resp = await fetch(url);
        return resp.json();
    } catch (error) {
        console.log(error);
        return null;
    }
}

export default function MealIdeas({ingredient}) {

  const [meals, setMeals] = useState([]);

  const loadMealIdeas = (ingredient)=>{
    fetchMealIdeas(ingredient).then((data) => {
      setMeals(data.meals);
    });
  }

  useEffect(() => {
    loadMealIdeas(ingredient);
  }, [ingredient]);

  return (
    <div>
      <h1>Meal Ideas</h1>
      {meals.map((meal) => (
        <div key={meal.idMeal}>{meal.strMeal}</div>
      ))}
    </div>
  );
}