import axios from "axios";
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
    categoriesList = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    ).then((list) => list.data.categories);
  } catch (err) {
    console.log(err);
  }

  
  return (
    <section
      id="categoriesWrapper"
      className="h-fit relative flex  col-start-1 col-end-2 row-start-1 row-end-2 overflow-x-scroll "
    >
   
      <div className="CategoriesMain h-fit w-fit  flex gap-4 hover:">
        {categoriesList&&[...categoriesList,...categoriesList].map((category: category,idx:number) => (
          <div
            key={category?.idCategory+idx}
            className="w-40 h-10 overflow-hidden relative border-1 border-gray-300   hover:bg-emerald-400 duration-200 cursor-pointer ease-out bg-[rgba(0,0,0,0.13)] backdrop-blur-[8px] shadow-[0px_2px_5px_black] border-[1px,solid,rgba(255,255,255,0.2)] rounded-xl text-center flex items-center"
          >
            <figure className="absolute -left-8 flex items-center justify-around">
              <Image
                className="categoryImg"
                src={category.strCategoryThumb}
                height={80}
                width={80}
                alt=""
              />
                <Link href={`/Categories/${category.strCategory}`}>
              <figcaption className="text-white min-w-28 text-shadow-[0px_2px_10px_black]  rounded-md ">
                  {category.strCategory}
              </figcaption>
                </Link>
            </figure>
          </div>
        ))}
      </div>
    </section>
  );
}

// #fbb566
