import localFont from "next/font/local";
import Image from "next/image";
import React from "react";
import { formatDateForArticles } from '@/utils/dateFormater';
import Footer from "../Footer/Footer";
const georgia = localFont({
  src: "../../fonts/georgia.ttf",
});

const data=[
  {thumbnail:"https://images.timesnownews.com/thumb/msid-152187822,thumbsize-2104248,width-400,height-225,resizemode-75/152187822.jpg",
    headline:"Maa Box Office Collection Day 4: Kajol's Horror Film Takes HUGE Dip, Earns Rs 2.25 Crore On Monday",
    date:"2025-06-10 12:23:44",
    seo_link:"my-seo-link",
  },
  {thumbnail:"https://images.timesnownews.com/thumb/msid-152175083,thumbsize-1500916,width-1280,height-720,resizemode-75/152175083.jpg",
    headline:"Kanappa Box Office Collection Day 2: Vishnu Manchu's Release Earns Rs 7 Crore On First Saturday",
    date:"2025-06-11 12:23:44",
    seo_link:"my-seo-link",
  },
  {thumbnail:"https://images.timesnownews.com/thumb/msid-152168106,thumbsize-105760,width-1280,height-720,resizemode-75/152168106.jpg",
    headline:"Sitaare Zameen Par Box Office Collection Day 8: Aamir Khan's Sports Drama Inches Closer To Rs 100 Crore Mark",
    date:"2025-06-02 12:23:44",
    seo_link:"my-seo-link",
  },
  {thumbnail:"https://images.timesnownews.com/thumb/msid-152160572,thumbsize-1244646,width-1280,height-720,resizemode-75/152160572.jpg",
    headline:"Housefull 5 Box Office Collection Day 21: Akshay Kumar's Comic Caper Crosses Rs 80 Crore Despite Losing Momentum",
    date:"2025-06-09 12:23:44",
    seo_link:"my-seo-link",
  },
];

function CategorisedPageContent({ category }) {
  return (
    <div
      id="main-container"
      className="flex flex-col mx-auto sm:w-[95%] md:w-[85%] lg:w-[75%]"
    >
      <div id="first-news">
        <div className="relative w-full h-[250px] md:h-[300px]">
          <img
            src="https://res.cloudinary.com/dc4g2nhmq/image/upload/v1750157739/editorjs/rvyvbh6d34a7rjp93yxv.webp"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
          <div className="absolute bottom-5 left-5 text-white font-bold text-lg md:text-2xl drop-shadow">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
        </div>
      </div>
      <div id="second-news" className="w-full mt-3 bg-[#fdfdfd]">
        {data.map((ele,i)=>{
          return <div id={`story_${i+1}`} key={i}>
            <div id="small-news-conatiner" className="w-full flex p-2">
          <div id="small-img-container" className="w-[30%]">
            <img
              src={ele.thumbnail}
              alt={ele.headline} className="w-full h-full"
            />
          </div>
          <div id="small-news-container" className="w-[70%] px-1 pb-1 flex flex-col justify-between">
            <div id="small-news">
              <p className="text-[15px] font-normal"><span className={georgia.className}>{ele.headline}</span>
              </p>
            </div>
            <div id="small-news-data">
              <p className="text-[15px]"><span className={georgia.className}>{formatDateForArticles(ele.date)}</span></p>
            </div>
          </div>
            </div>
            <div className="w-[90%] h-[1px] bg-[#b1b1b1] mx-auto"></div>
          </div>
        })}
        
      </div>
      <Footer/>
    </div>
  );
}

export default CategorisedPageContent;
