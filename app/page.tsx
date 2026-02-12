import Categories from "./components/Home/Categories";
import HeroBg from "./components/Home/HeroBg";
import Search from "./components/Home/Search";
import './global.css'

export default function Home() {
  return (
    <main className="h-fit w-full grid grid-cols-1 grid-rows-1 place-items-end-safe overflow-hidden">
      <HeroBg />
      <Categories />
    </main>
  );
}
