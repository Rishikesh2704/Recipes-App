import { Suspense } from "react";
import CategoryMealsUI from "./CategoryMealsUI";
import FetchRecipe from "@/app/Recipe/FetchRecipe";

function getMeals(category: String) {
  try{
     return fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
  )
    .then((data) => data.json())
    .then((items) => items.meals);
  }catch(err){
    console.log(err)
  }
 
}

export default async function Page({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const category = (await params).category;
  const itemsList = getMeals(category);
  return (
      <Suspense fallback={<h1 className="text-white">Loading...</h1>}>
        {itemsList&&<CategoryMealsUI itemsList={itemsList} Category={category} />}
      </Suspense>
  );
}
