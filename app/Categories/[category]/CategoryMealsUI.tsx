"use client";

import MealsLayout from "@/app/components/MealsLayout";
import { use } from "react";

export default function CategoryUI(List: {
  itemsList: Promise<any>;
  Category: String;
}) {
  const { itemsList, Category } = List;
  const mealsList = use(itemsList);
   return(
      <MealsLayout meals={mealsList} Category={Category}/>
   )
}
