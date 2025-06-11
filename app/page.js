import Navber from "@/components/Navbar/Navber";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Logo and Search Bar - Responsive */}
      <div className="flex items-center gap-4 p-3 md:flex-row flex-col"> {/* Stack on mobile, row on desktop */}
        <div className="w-full md:w-[30%] flex justify-center md:justify-start">
          {/* Full width on mobile, 30% on desktop */}
          <img
            src="/your-logo.svg"
            alt="Logo"
            className="h-8 object-contain"
          />
        </div>

        <div className="w-full md:w-[70%]"> {/* Full width on mobile, 70% on desktop */}
          <form className="flex">
            <input
              type="text"
              placeholder="Search for headlines"
              className="flex-grow border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary bg-amber-900 text-white"
              aria-label="Search"
            />
            <button
              type="submit"
              className="bg-[#ad371af3] text-white px-4 py-2 hover:bg-primary/90 transition-colors duration-200 uppercase"
              aria-label="Submit search"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      <header className="bg-navbarbg text-white ">
        <Navber />
      </header>

      {/* Main Content - Responsive */}
      <main className="flex-grow flex flex-col items-center sm:items-start p-4 sm:p-8 gap-8"> {/* Centered on mobile, left-aligned on small screens and up */}
        <h1 className="text-xl sm:text-3xl">Welcome to the Home Page</h1>
      </main>

      <footer className="h-5 text-center text-xs text-gray-500 mb-2">
        © 2025 YourSite
      </footer>
    </div>
  );
}
