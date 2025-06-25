"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import Link from 'next/link';

export default function Carousel({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1,
    },
    loop: true,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel); 
    },
  });

  return (
    <div className="relative">
      <div ref={sliderRef} className="keen-slider">
        {slides.map((ele, indx) => (
          <div className="keen-slider__slide relative" key={indx}>
            <Link href={`/story/${ele.category}/${ele.subcategory}/${ele.seo_url}`}>
            <div className="relative w-full h-full">
              <img
                className="w-full h-full object-cover"
                src={ele.thumbnail_url}
                alt="carousel-slide"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
              <div className="absolute bottom-5 left-5 text-white font-[Georgia] font-bold lg:text-[20px] text-xs drop-shadow-lg  md:text-[16px]">
                {/* <Link href={`/story/${ele.category}/${ele.subcategory}/${ele.seo_url}`}> */}
                  {ele.title}
                {/* </Link> */}
              </div>
            </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Navigation Dots in Top Right */}
      <div className="absolute top-3 right-3 flex gap-1">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-[9px] h-[9px] rounded-full ${currentSlide === index ? "bg-[#FDFDFD]" : "bg-white/40"
              } transition-all duration-300`}
          ></span>
        ))}
      </div>
    </div>
  );
}


// export default function Carousel({ slides }) {
//   const [sliderRef] = useKeenSlider({
//     slides: {
//       perView: 1,
//     },
//     loop: true,
//   });

//   return (
//     <div ref={sliderRef} className="keen-slider w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
//       {slides.map((ele, indx) => (
//         <div className="keen-slider__slide w-full h-full relative" key={indx}>
//           <div className="relative w-full h-full">
//             <img
//               className="w-full h-full object-cover"
//               src={ele.image}
//               alt="slide"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
//             <div className="absolute bottom-5 left-5 text-white text-xl font-semibold drop-shadow-lg">
//               {ele.text}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }