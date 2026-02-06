import './modal.css'
export default function Modal() {
  return (
    <section className="Modal w-[74vw] h-[98vh] bg-black grid grid-cols-1 fixed rounded-[0.8rem]  top-[50%] left-[50%] translate-[-50%]  place-items-center z-1">
      <div className="recipeGrid  h-[98vh] relative w-[74vw]">
        <ol className="Instructions Shimmer w-[100%] z-1  backdrop-blur-lg  relative ">
          <h2 className="italic text-xl font-semibold underline underline-offset-3 absolute top-0"></h2>
        </ol>

        <ol className="Ingredients z-1 Shimmer  bg-[rgba(228,225,225,0.4)] backdrop-blur-lg relative ">
          <h2 className="italic text-xl font-semibold underline underline-offset-3 absolute top-0"></h2>
        </ol>

        <div className="Resources w-[100%] Shimmer z-1 bg-[rgba(228,225,225,0.4)] backdrop-blur-lg relative grid grid-cols-2  gap-5">
          <h2 className="italic absolute top-1 left-4 text-[1.1rem] font-semibold underline underline-offset-3"></h2>
          <p></p>
          <p></p>
          <div className="flex gap-[0.2rem]"></div>
        </div>
      </div>
    </section>
  );
}
