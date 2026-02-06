"use client";
import MealsLayout from "@/app/components/MealsLayout/MealsLayout";
import { use } from "react";

export default function SearchUI({ results }: { results: Promise<any> }) {
  const meals = use(results);
  const transformedMealsList = meals.map((meal: any) => {
    const { strMeal, strMealThumb, idMeal } = meal;
    return { idMeal, strMeal, strMealThumb };
  });
  return (
        <MealsLayout meals={transformedMealsList} />
  );
}
