"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Search() {
  const [queryKey, setQueryKey] = useState<string>();
  const router = useRouter();
  
  return (
    <>
    <form
      className="SearchBar h-10 w-[60vw] bg-white absolute  top-[54%] left-[50%] translate-[-50%] flex z-10  justify-between items-center rounded-[0.6rem] "
      onSubmit={(e) => {
        e.preventDefault();
        router.push(`/Search/${queryKey}`);
      }}
    >
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
        className="text-xl w-[3rem] text-black cursor-pointer"
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
    
    </>
  );
}
