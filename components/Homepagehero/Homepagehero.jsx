import React from "react";
import Carosule from "../Carousel/Carosule";

function Homepagehero() {
  const data = [
    {
      image:
        "https://cdn.britannica.com/79/230479-050-A5491A8A/US-President-Joe-Biden-delivers-remarks-about-the-Build-Back-Better-legislations-2021.jpg",
      text: "the industry's standard dummy text ever since the 1500s, when an unknown printer ",
      link: "/page1",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9DJH0iC7wrO10MhhpEqKzapJwqKMlVEv7NA&s",
      text: "ng established fact that a reader will be distracted by the readable content of a ",
      link: "/page2",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFPZwWD9i2h2uAYkYorkn1IGfgR8HGHxxPhQ&s",
      text: "hanged. It was popularised in the 1960s with the release of Letraset sheets conta",
      link: "/page3",
    }
  ];

  return (
    <div className="w-[100%] sm:w-[95%] md:w-[85%] lg:w-[75%]  mx-auto flex flex-col-reverse justify-center md:flex-row bg-[#fdfdfd]">
      <div className="mx-auto w-[90%] sm:w-[90%] md:w-[50%] lg:w-1/2 p-4 sm:p-5 bg-[#FDFDFD] flex flex-col gap-y-4 sm:gap-y-5">
        <Carosule slides={data} />
        <div className="flex">
          <div className="w-[70%] sm:w-[60%] sm:pr-3">
            <h2 className="text-lg mb-2 font-[Georgia] font-[700] text-[15px] text-[#000000]">Philomena Cunk Is Weird Enough to Take on the World</h2>
            <p className="pr-1.5 text-sm font-[Georgia] font-[400] text-[10px] text-[#881609]">
              It is a long established fact that a reader will be distracted by the
              readable content.
            </p>
          </div>

          <div className="w-[30%] sm:w-[40%] flex justify-end items-end">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNg0fjbKwKsbZ9cEpmM3Ecpp415tNBNerdC9ns6TB8WYF16jfIXtXXFOyTybwAWr8_WaA&usqp=CAU"
              alt=""
              className="w-[106px] h-[60px] sm:w-full sm:h-full object-cover"
            />
          </div>
        </div>

      </div>
      <div className="mx-auto w-full flex flex-col justify-between md:w-[50%] bg-[#FDFDFD]">
        <div className="w-full h-[50%] flex bg-[#881609] items-center">
          <div className="w-[35%]">
            <p className="p-4 text-[#D5D5D5] text-xs font-[Georgia] font-[400] lg:text-[16px] md:text-[14px]  sm:text-[16px]">
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters.
            </p>
          </div>
          <div className="w-[65%] p-4">
            <div className="relative">
              <img
                src="https://foreignpolicy.com/wp-content/uploads/2025/06/xi-jinping-GettyImages-1786604507.jpg?w=800?quality=90"
                alt=""
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
              <div className="absolute bottom-5 left-[10%] font-semibold drop-shadow-lg">
                <p className="text-[#F7F7F4] text-xs text-start font-[Georgia] font-[700] xl:text-[18px] md:text-[16px]"> readable English. Many desktop public</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:w-full pb-[20px] sm:flex md:items-end bg-[#FDFDFD] sm:mx-auto sm:w-[85%] md:w-full">
          
          <div className="w-[172px] h-[185px] pr-4 pt-4 flex-shrink-0 xl:w-[192px] xl:h-[200px]">
            <img
              src="https://www.hindustantimes.com/ht-img/img/2025/06/11/550x309/Puri-superintendent-of-police--SP--Vinit-Agrawal-s_1749656202489.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* Divider */}
          <div className="w-[1px] h-[135px] mx-2.5 bg-[#F1F0F0]"></div>

          {/* Text Section */}
          <div className="flex flex-col justify-evenly h-[185px]">
            <div>
              <p className="text-[20px] lg:text-[16px] font-[Georgia] font-[700] text-black leading-tight md:text-[14px] pt-4">
                Ters, as opposed to using 'Content here, content here', making it look like readable English.
              </p>
            </div>
            <div>
              <p className="text-[12px] text-[#881609] font-[Georgia] font-[400] leading-snug md:text-[10px]">
                Ters, as opposed to using 'Content here, content here', making it look like readable English.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Homepagehero;
