import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type category = {
  idCategory: string;
  strCategory: string;
  strCategoryDescription: string;
  strCategoryThumb: string;
};

export default function MobileSidebar({
  menuState,
  setMenuState,
}: {
  menuState: boolean;
  setMenuState: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [queryKey, setQueryKey] = useState<string>();
  const router = useRouter();
  const asideEle = useRef<HTMLElement>(null);
  if (menuState) {
    asideEle.current?.style.setProperty("--Menuslide", "0%");
  } else {
    asideEle.current?.style.setProperty("--Menuslide", "100%");
  }

  useEffect(() => {
    const fetchdata = async (): Promise<void> => {
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
  return (
    <aside
      ref={asideEle}
      className="h-screen w-[40vw] max-sm:w-[70vw] md:hidden flex flex-col gap-6 items-center -translate-x-(--Menuslide,100%) absolute top-0 left-0 z-20 bg-[#131212] duration-200 ease-in "
    >
      <button
        onClick={() => setMenuState(false)}
        className="w-[95%] h-[5%] text-xl flex group justify-end items-center"
      >
        <i className="fa-solid fa-xmark group-active:text-(--COLOR)"></i>
        <span className="sr-only">Close Menu</span>
      </button>
      <form
        className="h-fit w-[90%] flex gap-2 border-1 rounded-sm border-white"
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
        <ul className=" categoryList w-full h-[50%] max-xl:h-[80%] overflow-scroll flex flex-col gap-5 items-center ">
          {categories.map((category: category, idx: number) => (
            <li
              key={category?.idCategory + idx}
              aria-label={`go to ${category.strCategory} recipes page `}
              className="w-fit h-[4vmax] bg-white relative overflow-hidden hover:bg-(--COLOR) duration-200 ease-out rounded-md text-center "
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
