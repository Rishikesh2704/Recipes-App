"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Search() {
  const [queryKey, setQueryKey] = useState<string>();
  const router = useRouter();
  
  return (
    <section className="flex flex-col gap-2  absolute  top-[45%] left-[50%] translate-[-50%] justify-center items-center" aria-label="Search Recipes">
     <span className="h-[10rem] w-[100%]  z-10 text-center  grid  place-content-center place">
          <h1 className="HeroText text-5xl  text-white text-shadow-2xl ">
            KNOW THE RECIPES OF YOU FAVORITE DISHES
          </h1>
        </span>
    <form
      className="SearchBar h-10 w-[60vw] bg-white flex z-10  justify-between items-center rounded-[0.6rem] "
      onSubmit={(e) => {
        e.preventDefault();
        router.push(`/search/${queryKey}`);
      }}
    >
      <label htmlFor="recipeSearch" className="hidden">Search Recipe</label>
      <input
        id="recipeSearch"
        aria-label="Search Recipes"
        className="w-[96%] h-full text-black text-[1.05rem] outline-0 rounded-[0.6rem] "
        type="text"
        placeholder="Search..."
        onChange={(e) => setQueryKey(e.target.value)}
      ></input>
      <button
        type="submit"
        className="text-xl w-[3rem] text-black cursor-pointer hover:text-gray-700 active:text-gray-500"
        aria-label="Search Button"
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
    
    </section>
  );
}
