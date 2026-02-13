"use client";

import MealsLayout from "@/app/components/MealsLayout/MealsLayout";
import { use, useEffect } from "react";
import { Sidebar } from "../../components/Sidebar";

export default function MealsListUI(List: {
  itemsList: Promise<any>;
  Category: String;
}) {
  const { itemsList, Category } = List;
  const mealsList = use(itemsList);
  
   return(
    <main className="w-screen flex max-md:justify-center justify-between  ">
      <Sidebar/>
      <MealsLayout meals={mealsList} Category={Category}/>
    </main>
   )
}
