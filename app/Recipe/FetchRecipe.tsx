"use client";
import { Suspense } from "react";
import RecipeUi from "./RecipeUi";

async function fetchRecipe(id: number) {
  return fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
  ).then((data) => data.json());
}

const fetchNutritionDetails = async (id: number) => {
  try {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=4a1d6647777a471995c304a4bbe7cdbb`,
    );
    const parsed = await data.json();
  } catch (err) {
    console.log(err);
  }
};
export default function FetchRecipe({ id }: { id: number }) {
  const recipe = fetchRecipe(id);
  const nutrition = fetchNutritionDetails(id);
  return (
    <Suspense>
      <RecipeUi recipe={recipe} />
    </Suspense>
  );
}
