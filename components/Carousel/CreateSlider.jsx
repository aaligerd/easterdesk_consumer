"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

function CreateSlider({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Handle touch start
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  // Handle touch move
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  // Handle touch end
  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    const threshold = 50; // Minimum swipe distance

    if (distance > threshold) {
      nextSlide(); // Swiped left
    } else if (distance < -threshold) {
      prevSlide(); // Swiped right
    }

    // Reset values
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((ele, index) => (
          <div className="w-full flex-shrink-0" key={index}>
            <Link href={`/story/${ele.category}/${ele.subcategory}/${ele.seo_url}`}>
              <div className="relative w-full h-[250px] md:h-[300px]">
                <img
                  src={ele.thumbnail_url}
                  alt={ele.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                <div className="absolute bottom-5 left-5 text-white font-bold text-lg md:text-2xl drop-shadow">
                  {ele.title}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      {/* <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black"
      >
        ›
      </button> */}

      {/* Dots */}
      <div className="absolute top-3 left-[80%] md:left-[90%] transform -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full cursor-pointer ${current === idx ? "bg-white" : "bg-gray-400/50"}`}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default CreateSlider;

