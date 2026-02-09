import Image from "next/image";
import Link from "next/link";

type category = {
  idCategory: string;
  strCategory: string;
  strCategoryDescription: string;
  strCategoryThumb: string;
};

export default async function Categories() {
  let categoriesList;
  try {
    categoriesList = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php",
    )
      .then((data) => data.json())
      .then((list) => list.categories);
  } catch (err) {
    console.log(err);
  }

  const categories = [
    "Main course",
    "Side dish",
    "Dessert",
    "Appetizer",
    "Salad",
    "Bread",
    "Breakfast",
    "Soup",
    "Beverage",
    "Sauce",
    "Marinade",
    "Fingerfood",
    "Snack",
    "Drink",
  ];

  return (
    <section
      id="categoriesWrapper"
      className="CategoriesMain h-fit gap-3 relative  flex  col-start-1 col-end-2 row-start-1 row-end-2 overflow-x-scroll  "
    >
      {categoriesList &&
        [...categoriesList, ...categoriesList].map(
          (category: category, idx: number) => (
            <div
              key={category?.idCategory + idx}
              aria-label={`go to ${category.strCategory}`}
              className="w-40 h-10 overflow-hidden  relative border-1 border-gray-300 active:bg-emerald-300  hover:bg-(--COLOR) hover:text-black duration-200 cursor-pointer ease-out bg-[rgba(0,0,0,0.13)] backdrop-blur-[8px] shadow-[0px_2px_5px_black] border-[1px,solid,rgba(255,255,255,0.2)] rounded-xl text-center flex items-center"
            >
              <figure className="absolute -left-8 flex items-center justify-around">
                <Image
                  className="categoryImg h-[80px] w-[80px]  "
                  src={category.strCategoryThumb}
                  height={80}
                  width={80}
                  alt=""
                  aria-hidden
                />
                <Link href={`/categories/${category.strCategory}`}>
                  <figcaption className="text-white min-w-28 text-shadow-[0px_2px_10px_black] bg-transparent  rounded-md ">
                    {category.strCategory}
                  </figcaption>
                </Link>
              </figure>
            </div>
          ),
        )}
    </section>
  );
}

//  <div className=" h-fit w-fit  flex gap-4 hover:">
//         {[...categories, ...categories].map((category: string, idx: number) => (
//           <div
//             key={category + idx}
//             className="w-40 h-10 overflow-hidden relative border-1 border-gray-300 text-center  hover:bg-(--COLOR) duration-200 cursor-pointer ease-out bg-[rgba(0,0,0,0.13)] backdrop-blur-[8px] shadow-[0px_2px_5px_black] border-[1px,solid,rgba(255,255,255,0.2)] rounded-xl text-center flex justify-center items-center "
//           >
//             <Link href={`/Categories/${category}`}>
//               <span className="text-white min-w-28 text-shadow-[0px_2px_10px_black]  rounded-md ">
//                 {category}
//               </span>
//             </Link>
//           </div>
//         ))}
//       </div>
