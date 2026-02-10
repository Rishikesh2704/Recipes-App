"use client";
import { Sidebar } from "@/app/components/Sidebar";
import MealsLayout from "@/app/components/MealsLayout/MealsLayout";
import { use } from "react";

export default function SearchUI({ results }: { results: Promise<any> }) {
  const meals = use(results);
  const transformedMealsList = meals.map((meal: any) => {
    const { strMeal, strMealThumb, idMeal } = meal;
    return { idMeal, strMeal, strMealThumb };
  });
  return (
     <main className="w-screen flex justify-between ">
          <Sidebar/>
          <MealsLayout meals={transformedMealsList}/>
        </main>
  );
}
