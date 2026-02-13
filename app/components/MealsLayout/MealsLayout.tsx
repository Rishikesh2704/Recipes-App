"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { auth } from "../../config/firebase";
import "./layout.css";
import "./responsive.css";
import FetchRecipe from "@/app/Recipe/FetchRecipe";

type itemType = {
  idMeal: number;
  strMeal: string;
  strMealThumb: string;
};

type MealType = {
  id: number;
  image: string;
  title: string;
};

export default function MealsLayout(List: { meals: any[]; Category?: String }) {
  const { meals, Category = "Search Results" } = List;
  const [modalState, setModalState] = useState<boolean>(false);
  const [mealId, setMealId] = useState<number>(0);
  const withoutLoginCount = useRef<number>(0);

  useEffect(() => {
    const listItems = document.querySelectorAll(".Item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("showItem", entry.isIntersecting);
          if (entry.isIntersecting) observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.1,
      },
    );
    listItems.forEach((item) => observer.observe(item));
  }, []);

  return (
    <section
      className="CategoryItems h-full w-[75%] flex flex-col items-center justify-center gap-8 "
      aria-labelledby="CategoryName"
    >
      <Link
        className="homeBtn w-10 h-9 fixed z-10 max-lg:hidden group left-[50%] grid grid-cols-1 place-items-center  rounded-3xl translate-x-[-50%] top-6 font-medium hover:w-18  text-center ease-out duration-200 bg-(--COLOR) text-black  leading-[2.2rem]"
        href={"/"}
        aria-label="go to home page button"
      >
        <i className="fa-solid fa-chevron-left text-center text-lg col-start-1 col-end-2 row-start-1 row-end-2 ease-in-out duration-200" />
        <h1 className=" w-4 h-full col-start-1 col-end-2 row-start-1 font-[550] text-[1.05rem]  italic relative right-3 row-end-2 opacity-0 group-hover:opacity-100 group-hover:right-0 duration-200 ease-out ">
          <i className="homeIcon fa-solid fa-house"></i>
          <p className="hidden">Home</p>
        </h1>
      </Link>
      <h1
        id="CategoryName"
        className=" w-full max-xl:w-[90%] text-3xl text-white  underline underline-offset-4 decoration-(--COLOR) decoration-3 "
      >
        {Category}
      </h1>

      <ul className="MealsLayout grid h-full w-full place-items-center place-content-center gap-y-6 ">
        {meals.map((item: itemType) => (
          <li
            key={item.idMeal}
            className="Item h-[8.5rem] w-[19.5rem] hover:bg-(--COLOR) duration-100 ease-out group flex flex-row-reverse justify-between items-center bg-[#0f0f0f] rounded-lg relative "
            aria-label={`${item.strMeal}`}
          >

            <figure className="itemImg h-full w-fit flex flex-col rounded-lg overflow-hidden  justify-center items-center  ">
              <Image
                height={450}
                width={150}
                src={item.strMealThumb}
                alt={item.strMeal + item.idMeal}
                className=" h-full w-auto"
              />
              {/* <div className=" h-full w-full col-start-1 col-end-2 row-start-1 rounded-md row-end-2 bg-[rgba(0,0,0,0.45)]"></div> */}
              <figcaption className="ViewRecipeBtn hidden">
                {item.strMeal}
              </figcaption>
            </figure>


            <div className="flex max-h-[90%] min-h-[70%] w-[50%] flex-col justify-around gap-2 items-center rounded-lg text-center">
              <span className="text-[1.1vw] bg-transparent h-[70%] overflow-hidden font-semibold group-hover:text-black duration-100 ease-out ">{item.strMeal}</span>
              <button
                className="w-[9vmax] max-lg:w-[6vmax]  max-md:h-[2.1vmax] text-[0.9vmax] bg-(--COLOR) text-black group-hover:bg-black group-hover:text-white  duration-100 ease-out font-semibold h-[1.5rem] cursor-pointer  rounded-md"
                onClick={(e) => {
                  document.body.classList.add("hideScrollbar");
                  if (!auth.currentUser) withoutLoginCount.current++;
                  setModalState(true);
                  setMealId(item.idMeal);
                }}
                aria-haspopup
              >
                View Recipe
              </button>
            </div>


          </li>
        ))}
      </ul>
      {modalState && (
        <div
          className="h-[100vh] w-screen  fixed top-0 left-0  flex justify-center items-center   bg-[rgba(0,0,0,0.6)]  "
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              document.body.classList.remove("hideScrollbar");
              e.currentTarget.children[0].classList.add("ModalOut");
              setTimeout(() => setModalState(false), 90);
            }
          }}
          role="button"
          aria-label="Close Modal"
        >
          <FetchRecipe id={mealId} withoutLoginCount={withoutLoginCount} />
        </div>
      )}
    </section>
  );
}
