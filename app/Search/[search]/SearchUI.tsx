"use client";
import { Sidebar } from "@/app/components/Sidebar";
import MealsLayout from "@/app/components/MealsLayout/MealsLayout";
import { use, useState } from "react";
import MobileSidebar from "@/app/components/mobile/MobileSidebar";

export default function SearchUI({ results }: { results: Promise<any> }) {
  const meals = use(results);
  const transformedMealsList = meals.map((meal: any) => {
    const { strMeal, strMealThumb, idMeal } = meal;
    return { idMeal, strMeal, strMealThumb };
  });
   const [showMenu, setShowMenu] = useState<boolean>(false)
   
    return(
     <main className="w-screen flex max-md:justify-center justify-between gap-x-2 ">
        <button className="absolute md:hidden group top-4 left-5" onClick={() => setShowMenu((prev) => !prev)}>
         <i className="fa-solid fa-bars group-active:text-(--COLOR)"></i>
         <span className="sr-only">Menu</span>
       </button>
       <Sidebar/>
       <MobileSidebar setMenuState={setShowMenu} menuState={ showMenu}/>
      <MealsLayout meals={transformedMealsList} />
    </main>
  );
}
