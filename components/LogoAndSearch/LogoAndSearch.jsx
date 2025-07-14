'use client';
import React, { useEffect } from "react";
import localFont from "next/font/local";
import Link from "next/link";
import LogoSvg from "./LogoSvg";

const ancientFont = localFont({
  src: "../../fonts/AncientMedium.ttf",
});

const fondamento = localFont({
  src: "../../fonts/Fondamento.ttf",
});

const chomsky = localFont({
  src: "../../fonts/Chomsky.otf",
});

const italianno = localFont({
  src: "../../fonts/Italianno.ttf",
});

const lucidaCalligraphy = localFont({
  src: "../../fonts/Lucida-Calligraphy.ttf",
});
const ptserif = localFont({
  src: "../../fonts/PTSerif-Italic.ttf",
});

function LogoAndSearch() {
  useEffect(() => {
    alert("The site is under development, some features may not work as expected.");
  }, []);
  
  return (
    <div className="flex items-center justify-between gap-4 py-3 px-4 md:flex-row flex-col mx-auto w-[85%] lg:w-[75%]">
      {" "}
      {/* Stack on mobile, row on desktop */}
      <div className="w-full md:w-[50%] flex justify-center items-center gap-x-5 md:justify-start">
        {/* <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12">
          <Link href="/">
            <img className="w-full h-full" src="/logo/logo.png" alt="" />
          </Link>
        </div> */}
        {/* <h1 className="text-[25px] md:text-[25px] lg:text-[30px] xl:text-[40px] font-[AncientMedium] font-bold text-[#310803]"> */}
          <Link href="/">
          {/* <span className={fondamento.className}>The Eastern Gazette</span> */}
          <LogoSvg className="w-full h-auto md:w-[250px] lg:w-[400px]"/>
          </Link>
        {/* </h1> */}
      </div>
      <form>
        <div className="w-full flex">
          {" "}
          {/* Full width on mobile, 70% on desktop */}
          <div className="w-[70%]">
            <input
              type="text"
              placeholder="Search for headlines"
              className="flex-grow  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary bg-[#660707] text-[#ffffffd0] placeholder-[#F7F7F459] font-[MaryToddW00-Regular] font-[400] text-[16px] md:w-full"
              aria-label="Search"
            />
          </div>
          <div className="w-[30%]">
            <button
              type="submit"
              className="bg-[#8E4042] text-[#F7F7F4] px-4 py-2 hover:bg-primary/90 transition-colors duration-200 uppercase font-[MaryToddW00-Black] font-normal text-[14px] h-full w-full"
              aria-label="Submit search"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LogoAndSearch;
