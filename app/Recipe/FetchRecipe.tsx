"use client";
import { Suspense } from "react";
import RecipeUi from "./RecipeUi";

async function fetchRecipe(id: number) {
  return fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
  ).then((data) => data.json());
}


// const fetchRecipe = async (id: number) => {
//   try {
//     const data = await fetch(
//       `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=4a1d6647777a471995c304a4bbe7cdbb`,
//     );
//     const parsed = await data.json();
//     return parsed[0]
//   } catch (err) {
//     console.log(err);
//   }
// };
// const fetchIngredients = async (id: number) => {
//   try {
//     const data = await fetch(
//       `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=4a1d6647777a471995c304a4bbe7cdbb`,
//     );
//     const parsed = await data.json();
//     return parsed
//   } catch (err) {
//     console.log(err);
//   }
// };
// const fetchNutritionDetails = async (id: number) => {
//   try {
//     const data = await fetch(
//       `https://api.spoonacular.com/recipes/${id}/information?apiKey=4a1d6647777a471995c304a4bbe7cdbb`,
//     );
//     const parsed = await data.json();
//   } catch (err) {
//     console.log(err);
//   }
// };


export default function FetchRecipe({ id , withoutLoginCount }: { id: number, withoutLoginCount:React.RefObject<number> }) {
  const recipe = fetchRecipe(id);
  return (
    <Suspense>
      <RecipeUi recipe={recipe} withoutLoginCount={withoutLoginCount}/>
    </Suspense>
  );
}
