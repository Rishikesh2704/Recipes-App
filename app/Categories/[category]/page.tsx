import { Suspense } from "react";
import MealsListUI from "./MealsListUI";
import ListSkeleton from "@/app/skeleton/ListSkeleton";

function getMeals(category: String) {
  try {
    return fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
    )
      .then((data) => data.json())
      .then((items) => items.meals);
  } catch (err) {
    console.log(err);
  }
}

function Meals(category: string) {
  try {
    return fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.API_KEY}&type=${category}`,
    )
      .then((data) => data.json())
      .then((li) => li.results);
  } catch (err) {
    console.log(err);
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const category = (await params).category;
  const itemsList = getMeals(category);
  // const itemsList = Meals(category);
  return (
    <Suspense fallback={<ListSkeleton/>}>
      {itemsList && <MealsListUI itemsList={itemsList} Category={category} />}
    </Suspense>
  );
}
