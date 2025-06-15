import React from 'react'
import { formatDateForArticles } from '@/utils/dateFormater';

function LatestNewsWithoutExtendedText({article_data}) {
  return (
    <div className="relative w-full h-full my-6 md:w-[40%] md:h-[200px] lg:w-[40%]">
          <img
            className="w-full h-full object-fill"
            src={article_data.image}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
          <div className="absolute bottom-8 left-5  drop-shadow-lg sm:bottom-10">
             <p className='text-white text-[12px] font-[Georgia] sm:text-[16px] md:text-[18px]'>{article_data.headline}</p>
          </div>
          <div className="absolute bottom-4 left-5  drop-shadow-lg flex gap-x-4">
             <p className='text-white text-[10px] font-[Georgia] sm:text-[14px] md:text-[16px]'>{extendedTextExtractor(article_data.author)}</p>
             <p className='text-white text-[10px] font-[Helvitica] sm:text-[14px] md:text-[16px]'>{formatDateForArticles(article_data.published_date)}</p>

          </div>
        </div>
  )
}

const extendedTextExtractor=(text="")=>{
    let trimmed_text=text.trim();
    let maxLength=50;
    if(trimmed_text===""){
        return "";
    }
    if(trimmed_text.length>maxLength){
        return trimmed_text.substring(0,maxLength)+"..."
    }else{
        return text;
    }
        
}

export default LatestNewsWithoutExtendedText