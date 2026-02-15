"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
type category = {
  idCategory: string;
  strCategory: string;
  strCategoryDescription: string;
  strCategoryThumb: string;
};

export function Sidebar() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [queryKey, setQueryKey] = useState<string>();
  const router = useRouter()
  useEffect(() => {
    const fetchdata = async ():Promise<void> => {
      try {
        const data = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php",
        );
        const parsed = await data.json();
        setCategories(parsed.categories);
        setLoading(false);
      } catch (err) {
        throw new Error("Failed to fetch Categories");
      } finally {
        setLoading(false);
      }
    };
    fetchdata();
  }, []);
  console.log(categories);
  return (
    <aside className="w-[20vmax] max-md:hidden h-[100vh] relative shadow-md  rounded-r-2xl bg-[#131212] flex flex-col justify-center gap-8 items-center ">
      <form
        className="h-fit w-full flex gap-2 border-1 rounded-sm border-white"
        aria-label="Search Field"
        onSubmit={(e) => {
        e.preventDefault();
        router.push(`/search/${queryKey}`);
      }}
      >
        <label htmlFor="search" className="hidden">
          Search
        </label>
        <input
          id="search"
          aria-label="Search Recipe"
          className="w-[85%] h-fit pl-4 text-white placeholder:text-white text-[1.05rem] outline-none rounded-[0.4rem] "
          type="text"
          placeholder="Search..."
          onChange={(e) => setQueryKey(e.target.value)}
        ></input>
        <button
          className="w-fit h-fit text-xl text-white cursor-pointer"
          aria-label="Search Button"
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
      {!loading && (
        <ul className=" categoryList w-full h-[50%] max-xl:h-[80%]  flex flex-col flex-wrap gap-1 items-center ">
          {categories.map((category: category, idx: number) => (
            <li
              key={category?.idCategory + idx}
              aria-label={`go to ${category.strCategory} recipes page `}
              className="w-fit h-10 bg-white relative overflow-hidden hover:bg-(--COLOR) duration-200 ease-out rounded-md text-center "
            >
              <figure className="w-full h-full grid grid-cols-1 place-content-center place-items-center ">
                <Image
                  className="categoryImg h-fit w-fit col-start-1 col-end-1 row-start-1 row-end-1 "
                  src={category.strCategoryThumb}
                  height={100}
                  width={100}
                  alt=""
                  aria-hidden
                />
                <div className="w-full h-full bg-[rgba(0,0,0,0.4)]  col-start-1 col-end-1 row-start-1 row-end-1"></div>
                <Link
                  href={`/categories/${category.strCategory}`}
                  className="bg-[rgba(0,0,0,0.02)] h-auto w-full col-start-1 absolute  col-end-1 row-start-1 row-end-1 text-[#ffffff] text-shadow-gray-950 text-[1.05rem] font-semibold"
                >
                  <figcaption>{category.strCategory}</figcaption>
                </Link>
              </figure>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}
