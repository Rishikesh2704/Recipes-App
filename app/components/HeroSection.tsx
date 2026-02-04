import Image from "next/image";

function HeroSection() {
  const imgHeight = 400;
  const imgWidth = 330;
  const bgImagesSrc = [
    { id: 11, src: "/meal_11.jpg" },
    { id: 10, src: "/meal_2.jpg" },
    { id: 12, src: "/meal_3.jpeg" },
    { id: 14, src: "/meal_4.webp" },
    { id: 18, src: "/meal_12.jpg" },
  ];
  return (
    <>
      <div className="HeroImgs h-[100vh] relative w-[100vw] grid grid-cols-1 col-start-1 col-end-2 row-start-1 row-end-2 overflow-hidden rounded-[0.9rem] ">
        <figure
          className="HeroBg flex row-start-1 row-end-1 justify-center "
          aria-hidden
        >
          {bgImagesSrc.map((img) => (
            <Image
              key={img.id}
              className="object-cover"
              height={imgHeight}
              width={imgWidth}
              alt=""
              src={img.src}
              preload
            ></Image>
          ))}
        </figure>

        <div className="h-[inherit] w-[inherit] row-start-1 row-end-2  bg-[rgba(0,0,0,0.5)] "></div>

        <span className="h-[10rem] w-[60%]  z-10 text-center absolute left-[50%] top-[40%] translate-[-50%] grid  place-content-center place">
          <h1 className="HeroText text-5xl text-white text-shadow-2xl ">
            KNOW THE RECIPES OF YOU FAVORITE DISHES
          </h1>
        </span>
      </div>
    </>
  );
}

export default HeroSection;
