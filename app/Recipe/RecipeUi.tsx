"use client";

import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import { auth } from "../config/firebase";
import './recipe.css'

export default function RecipeUi({
  recipe,
  withoutLoginCount,
}: {
  recipe: Promise<any>;
  withoutLoginCount: React.RefObject<number>;
}) {
  const data = use(recipe);
  const {
    strMealThumb: MealImage,
    strMeal: Meal,
    strInstructions: Instructions,
    strSource: Source,
    strYoutube: Youtube,
    strArea: Region,
    strCategory: Category,
  } = data?.meals[0];

  let Ingredients: string[][] = [];
  let i = 0;
  console.log(withoutLoginCount);

  Object.entries(data.meals[0])
    .filter(([key, value]) => {
      if (key.includes("Ingredient") || key.includes("Measure")) {
        return value;
      }
    })
    .forEach(([key, value], idx) => {
      if (key.includes("Ingredient")) {
        Ingredients[i] = [];
        if (typeof value === "string") {
          Ingredients[i][0] = value;
        }
        i++;
        return value;
      }
      if (key.includes("Measure") && value !== " ") {
        if (i >= Ingredients.length) i = 0;
        if (typeof value === "string") {
          Ingredients[i][1] = value;
        }
        i++;
        return value;
      }
    });

  const instructionSteps = Instructions.split("\n")
    .map((arr: string) => {
      if (!arr.includes("step")) return arr.split("\r")[0];
    })
    .filter((arr: string) => arr);
  return (
    <section className="Modal w-[80vw] h-[42rem]  rounded-2xl grid grid-cols-1 fixed  top-[50%] left-[50%] translate-[-50%]  place-items-center z-3">
      {(auth.currentUser || withoutLoginCount.current<=3) ? (
        <article className="recipeGrid  h-[100%] relative w-full">
          <figure className="RecipeImg">
            <Image
              className="rounded-2xl  h-[199vh] w-full -z-1"
              height={700}
              width={400}
              src={MealImage}
              alt=""
              aria-hidden
            />
          </figure>
          <div className="Cover h-full w-full bg-[rgba(0,0,0,0.6)] z-0  absolute rounded-xl" aria-hidden></div>

          <ol className="Instructions z-1 bg-[rgba(0,0,0,0.4)] text-[1.2vmax] backdrop-blur-lg  relative " aria-label="Instructions">
            <h1 className="italic text-[1.2vmax] font-semibold underline underline-offset-3 absolute top-0">
              Instructions
            </h1>
            {instructionSteps.map((step: string, idx: number) => {
              return (
                <li key={Math.random()} className="text-[1.1vmax]">
                  {" "}
                  {idx + 1}. {step}
                </li>
              );
            })}
          </ol>

          <ol className="Ingredients z-1  r bg-[rgba(0,0,0,0.4)] text-[1.2vmax] backdrop-blur-lg relative " aria-label="Ingredients">
            <h2 className="italic    font-semibold underline underline-offset-3 absolute top-0">
              Ingredients
            </h2>
            {Ingredients.map((ingredient: any) => (
              <li key={Math.random()} className="text-[1.1vmax]">
                {ingredient[0]} - {ingredient[1]}
              </li>
            ))}
          </ol>

          <div className="Resources z-1 bg-[rgba(0,0,0,0.4)] backdrop-blur-lg text-[1.2vmax] relative grid grid-cols-2  gap-3" aria-label="Resources">
            <h2 className="italic absolute top-1 left-4 text-[1vmax]  font-semibold underline underline-offset-3">
              {Meal}
            </h2>
            <p className="text-[1vmax]">
              Category :
              <span className="text-gray-200 font-semibold"> {Category}</span>
            </p>
            <p className="text-[1vmax]">
              Region :
              <span className="text-gray-200 font-semibold"> {Region}</span>
            </p>
            <div className="flex gap-[0.2rem] text-[1.1vmax] ">
              {Source && (
                <Link
                  href={Source}
                  target="_blank"
                  className="hover:text-gray-700 text-[1.1vmax]"
                >
                  <i className="fa-solid text-white fa-newspaper text-[1.1vmax]"></i>
                  &ensp;Source
                </Link>
              )}
              &ensp;
              {Youtube && (
                <Link
                  href={Youtube}
                  target="_blank"
                  className="hover:text-red-700 "
                  
                >
                  <i className="fa-brands text-red-500 fa-youtube text-[1.1vmax]"></i>
                  &ensp;Video
                </Link>
              )}
            </div>
          </div>
        </article>
      ):
         (<div className="recipeGrid  h-[98vh] relative w-[74vw]" aria-label="Login To View Recipe">
          <figure className="RecipeImg   ">
            <Image
              className="rounded-2xl  h-[199vh] w-full -z-1"
              height={700}
              width={400}
              src={MealImage}
              alt="" 
              aria-hidden
            />
          </figure>
          <div className="Cover h-full w-full bg-[rgba(0,0,0,0.6)] z-0  absolute rounded-xl " aria-hidden></div>
          <div aria-label="Lock Image " className="h-full w-full absolute bg-[rgba(0,0,0,0.4)] backdrop-blur-3xl rounded-xl flex justify-center items-center flex-col text-3xl gap-3">
            <i className="fa-solid fa-lock"></i>
            <span>Login To View Recipe</span>
          </div>
        </div>)
      }
    </section>
  );
}
