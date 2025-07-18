// Navbar.js
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import navbarItems from "@/utils/navbarItems";

function Navbar() {
  const pathname = usePathname();

  
  const generatePath = (label) =>
    label=="Home"?"/":"/category/" + label.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-");

  return (
    <nav
      className="
        w-full
        bg-[#881609]
        overflow-x-auto 
        whitespace-nowrap 
        snap-x snap-mandatory 
        scrollbar-thin scrollbar-thumb-amber-700 scrollbar-track-amber-200
        "
      aria-label="Primary navigation"
    >
      <div className="flex mx-auto w-full lg:w-[75%] md:w-[85%] sm:w-[95%] overflow-x-auto">
        {navbarItems.map((item) => {
          const path = generatePath(item);
          const isActive = pathname === path;
          return (
            <div
              key={item}
              className={`
                snap-start 
                px-3 py-2 
                cursor-pointer 
                hover:bg-[#530000] 
                text-white
              `}
              //${isActive ? "font-bold text-black bg-amber-300" : "text-white"}
            >
              <Link href={path}>
                <span className="text-xs select-none font-alatsi font-[400] lg:text-[17px]">{item}</span>
              </Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;
