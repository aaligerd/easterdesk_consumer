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
    <div className="w-[100%] sm:w-[95%] md:w-[85%] lg:w-[75%] mx-auto flex flex-col-reverse justify-center md:flex-row bg-amber-50">
      <div className="mx-auto w-[90%] sm:w-[90%] md:w-[50%] lg:w-1/2 p-4 sm:p-5 bg-amber-50 flex flex-col gap-y-4 sm:gap-y-5">
        <Carosule slides={data} />
        <div className="flex">
          <div className="headlines w-[50%]">
            <p className="pr-1.5 text-sm">
              is a long established fact that a reader will be distracted by the
              readable conten
            </p>
          </div>
          <div className="w-[50%]">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNg0fjbKwKsbZ9cEpmM3Ecpp415tNBNerdC9ns6TB8WYF16jfIXtXXFOyTybwAWr8_WaA&usqp=CAU"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="mx-auto w-full flex flex-col justify-between md:w-[50%]">
        <div className="w-full h-[50%] flex bg-[#ad371af3] items-center">
          <div className="w-[35%]">
            <p className="p-4 text-amber-50 text-sm">
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
                <p className="text-white text-s text-start"> readable English. Many desktop public</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden pb-[20px] sm:flex h-[50%] md:items-end bg-amber-50">
            <div className="w-[50%] h-[60%]">
                <img src="https://www.hindustantimes.com/ht-img/img/2025/06/11/550x309/Puri-superintendent-of-police--SP--Vinit-Agrawal-s_1749656202489.jpg" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-[1px] h-[60%] mx-2.5 bg-amber-950"></div>
            <div className="h-[60%] flex flex-col justify-between">
                <div>
                    <p className="text-sm lg:text-xl">ters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                </div>
                <div>
                    <p className="text-[12px] text-amber-700">ters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Homepagehero;
