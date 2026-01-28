"use client";
import { Suspense } from "react";
import RecipeUi from "./RecipeUi";
import Modal from "../skeleton/Modal";

async function fetchRecipe(id: number) {
  return fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
  ).then((data) => data.json());
}
export default function FetchRecipe({ id }: { id: number }) {
  const recipe = fetchRecipe(id);
  return (
      <Suspense >
        <RecipeUi recipe={recipe} />
      </Suspense>
  );
}
