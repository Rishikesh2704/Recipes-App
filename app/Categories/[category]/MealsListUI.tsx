"use client";

import MealsLayout from "@/app/components/MealsLayout/MealsLayout";
import { use } from "react";

export default function MealsListUI(List: {
  itemsList: Promise<any>;
  Category: String;
}) {
  const { itemsList, Category } = List;
  const mealsList = use(itemsList);
   return(
      <MealsLayout meals={mealsList} Category={Category}/>
   )
}
