import Link from "next/link";
import Categories from "./components/Categories";
import HeroSection from "./components/HeroSection";
import Search from "./components/Search";
import Authentication from "./components/Authentication";

export default function Home() {
  return (
    <main className="h-fit w-full grid grid-cols-1 grid-rows-1 place-items-end-safe">
      <HeroSection/>
      <Search />
      <Categories/>
      <Authentication/>
    </main>
  )
} 