// Navbar.js
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import navbarItems from "@/utils/navbarItems";

function Navber() {
  const pathname = usePathname();

  const generatePath = (label) =>
    "/" + label.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-");

  return (
    <nav
      className="
        bg-[#881609] 
        overflow-x-auto 
        whitespace-nowrap 
        snap-x snap-mandatory 
        scrollbar-thin scrollbar-thumb-amber-700 scrollbar-track-amber-200
        "
      aria-label="Primary navigation"
    >
      <div className="inline-flex px-4">
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
                ${isActive ? "font-bold text-black bg-amber-300" : "text-white"}
              `}
            >
              <Link href={path}>
                <span className="text-xs select-none font-[Alatsi] font-[400] lg:text-[17px]">{item}</span>
              </Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
}

export default Navber;
