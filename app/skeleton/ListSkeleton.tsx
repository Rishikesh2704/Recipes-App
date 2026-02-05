import Image from "next/image";
import "./modal.css";

export default function ListSkeleton() {
  const listElement = (
    <li className=" Shimmer h-[12.5rem] w-[12.5rem] bg-[#e9dede] rounded-2xl relative duration-200 ease-out "></li>
  );

  const arrays = Array(21).fill(listElement);
  return (
    <section className="CategoryItems h-full w-full flex flex-col items-center justify-center gap-8 ">
      <div className="w-[95.8vw]  ">
        <h1 className="w-40 h-7 Shimmer rounded-md"></h1>
      </div>
      <ul className="grid grid-cols-7 h-full w-[97vw] place-items-center gap-y-4 ">
        {...arrays}
      </ul>
    </section>
  );
}
