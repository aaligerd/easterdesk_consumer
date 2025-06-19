import React from 'react'

function LogoAndSearch() {
  return (
    <div className="flex items-center justify-between gap-4 py-3 px-4 md:flex-row flex-col mx-auto w-[85%] lg:w-[75%]"> {/* Stack on mobile, row on desktop */}
        <div className="w-full md:w-[50%] flex justify-center md:justify-start">
          <p className='text-[25px] md:text-[30px] lg:text-[40px] xl:text-[50px] font-[PTSerif] font-bold'>The Eastern Gazette</p>
        </div>
        <form>
          <div className="w-full flex"> {/* Full width on mobile, 70% on desktop */}

            <div className="w-[70%]">
              <input
                type="text"
                placeholder="Search for headlines"
                className="flex-grow  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary bg-[#660707] text-[#ffffffd0] placeholder-[#F7F7F459] font-[MaryToddW00-Regular] font-[400] text-[16px] md:w-full"
                aria-label="Search" />
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
  )
}

export default LogoAndSearch