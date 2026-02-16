"use client";

import MealsLayout from "@/app/components/MealsLayout/MealsLayout";
import { use, useState } from "react";
import { Sidebar } from "../../components/Sidebar";
import MobileSidebar from "@/app/components/mobile/MobileSidebar";

export default function MealsListUI(List: {
  itemsList: Promise<any>;
  Category: String;
}) {
  const { itemsList, Category } = List;
  const mealsList = use(itemsList);
  const [showMenu, setShowMenu] = useState<boolean>(false)
  
   return(
    <main className="w-screen flex max-md:justify-center justify-between gap-x-2 ">
       <button className="absolute md:hidden group top-4 left-5 " onClick={() => setShowMenu((prev) => !prev)}>
        <i className="fa-solid fa-bars group-active:text-(--COLOR)"></i>
        <span className="sr-only">Menu</span>
      </button>
      <Sidebar/>
      <MobileSidebar setMenuState={setShowMenu} menuState={ showMenu}/>
      <MealsLayout meals={mealsList}  Category={Category}/>
    </main>
   )
}
