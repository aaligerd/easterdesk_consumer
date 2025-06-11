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
        bg-[#ad371af3] 
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
                hover:bg-   -900 
                rounded-md
                ${isActive ? "font-bold text-black bg-amber-300" : "text-white"}
              `}
            >
              <Link href={path}>
                <span className="uppercase text-base select-none">{item}</span>
              </Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
}

export default Navber;
