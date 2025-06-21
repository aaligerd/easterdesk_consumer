import Homepagehero from "@/components/Homepagehero/Homepagehero";
import LatestNews from "@/components/LatestNews/LatestNews";
import LogoAndSearch from "@/components/LogoAndSearch/LogoAndSearch";
import Navber from "@/components/Navbar/Navber";
import TrendingHeadlines from "@/components/TrendingHeadlines/TrendingHeadlines";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Logo and Search Bar - Responsive */}
      
    <LogoAndSearch/>
      <header className="bg-navbarbg text-[#FDFDFD] ">
        <Navber/>
      </header>
      <Homepagehero/>
      <div className="flex mx-auto sm:w-[95%] md:w-[85%] lg:w-[75%]  bg-[#fdfdfd]">
      <LatestNews/>
      <TrendingHeadlines/>
      </div>
      <footer className="h-5 text-center text-xs text-gray-500 mb-2">
        © 2025 YourSite
      </footer>
    </div>
  );
}
