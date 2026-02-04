import Image from "next/image";

export default function ListSkeleton() {
  const listElement = (
    <li className="Item   h-[12.5rem] w-[12.5rem] bg-[#f4f0f0] rounded-2xl relative duration-200 ease-out ">hello</li>
  );
  const arrays = Array.from({ length: 30 }, (_, index) => listElement);
  return (
    <section className="CategoryItems h-full w-full flex flex-col items-center justify-center gap-8 ">
      <div className="Shimmer w-20 h-10  text-3xl  "></div>

      <ul className="grid grid-cols-7 h-full w-[97vw] place-items-center gap-y-6 ">
        {...arrays}
      </ul>

      <div className="h-[1000vh] w-[100vw]  absolute top-0 left-0  flex justify-center items-center   bg-[rgba(0,0,0,0.6)]  "></div>
    </section>
  );
}
