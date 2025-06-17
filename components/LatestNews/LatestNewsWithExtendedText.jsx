import React from 'react'
import './LatestNewsWithExtendedText.css';
import { formatDateForArticles } from '@/utils/dateFormater';

function LatestNewsWithExtendedText({article_data}) {
  return (
    <div id='card-container' className='my-4 mx-auto w-full md:w-[40%]' >
        <div id='image-container' className='w-full h-[200px] lg:h-[180px]'>
            <img src={article_data.image} alt=""  className='w-full h-full object-fill'/>
        </div>
        <div id='extended-text-container' className='bg-[#FDFDFD] p-[15px]'>
            <div id='extended-text-headline'>
                <p className='font-[Georgia] text-[16px] h-[100px] line-clamp-6'>{article_data.headline}</p>
            </div>
            <div id='article-data' className='flex justify-start gap-x-3 py-[5px] mb-[5px] border-b-2 border-b-[#ececec]'>
                <div id='author'>
                    <p className='text-[10px] font-[Helvetica] text-[#676767] '>By {article_data.author}</p>
                </div>
                <div id='article-date'>
                    <p className='text-[10px] font-[Helvetica] text-[#676767]'>{formatDateForArticles(article_data.published_date)}</p>
                </div>
            </div>
            <div id='extended-text' className='h-[100px] line-clamp-6'>
                <p className='text-[12px] font-[Georgia] text-[#881609]'>{extendedTextExtractor(article_data.extended_text)}</p>
            </div>
        </div>
    </div>
  )
}

const extendedTextExtractor=(text="")=>{
    let trimmed_text=text.trim();
    let maxLength=300;
    if(trimmed_text===""){
        return "";
    }
    if(trimmed_text.length>maxLength){
        return trimmed_text.substring(0,maxLength)+"..."
    }else{
        return text;
    }
        
}

export default LatestNewsWithExtendedText