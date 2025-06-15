import React from 'react'

function TrendingHeadlineCard({article_data}) {
  return (
    <div id='trendsing-card' className='flex items-center my-5 border-b-2 border-b-[#ececec] pb-5'>
        <div id='trending-image-container' className="w-[150px] h-[150px] bg-black">
            <img src={article_data.image} alt="" className='h-full object-cover' />
        </div>
        <div id='trending-headline-container' className='p-[10px] w-[50%]'>
            <div id='trending-headline'>
                <p className='text-[14px] font-[Georgia]'>{extendedTextExtractor(article_data.headline)}</p>
            </div>
            {/* <div id='article-data'>
                <div id='author-data'>
                    By Author1
                </div>
                <div id='published-date'>
                    Feb 06,2024
                </div>
            </div> */}
        </div>
    </div>
  )
}

const extendedTextExtractor=(text="")=>{
    let trimmed_text=text.trim();
    let maxLength=100;
    if(trimmed_text===""){
        return "";
    }
    if(trimmed_text.length>maxLength){
        return trimmed_text.substring(0,maxLength)+"..."
    }else{
        return text;
    }
        
}

export default TrendingHeadlineCard