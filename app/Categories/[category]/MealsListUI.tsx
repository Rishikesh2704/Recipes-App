"use client";

import MealsLayout from "@/app/components/MealsLayout/MealsLayout";
import { use } from "react";
import { Sidebar } from "../../components/Sidebar";
import MobileSidebar from "@/app/components/mobile/MobileSidebar";

export default function MealsListUI(List: {
  itemsList: Promise<any>;
  Category: String;
}) {
  const { itemsList, Category } = List;
  const mealsList = use(itemsList);
  
   return(
    <main className="w-screen flex max-md:justify-center justify-between gap-x-2 ">
      <Sidebar/>
      
      <MealsLayout meals={mealsList} Category={Category}/>
    </main>
   )
}
