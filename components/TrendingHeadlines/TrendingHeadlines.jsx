import React from 'react'
import TrendingHeadlineCard from './TrendingHeadlineCard'
import { trendingcardData } from '@/utils/TrendingcardData'

function TrendingHeadlines() {
  return (
    <div className='w-[35%] hidden lg:block bg-[#fdfdfd] my-[10px] px-2'>
        <div id='trend-heading-container' className='w-full flex justify-between mt-2'>
            <div id='trending-text-container'>
                <p className='text-[20px] font-[Georgia]'>Trending Headlines</p>
            </div>
            <div id='trending-view-all-btn'>
                <button className='w-[85px] h-[25px] bg-[#881609] text-[12px] font-[Georgia] rounded-sm text-[#fdfdfd] px-[10px] py-[5px] flex justify-center items-center'>View All</button>
            </div>
        </div>
        <div className='w-[60%] h-0.5 bg-[#ececec] mt-1.5'></div>
        <div className='w-full'>
            {trendingcardData.map((ele,indx)=>{
                return <TrendingHeadlineCard key={indx} article_data={ele}/>
            })}
            
        </div>
    </div>
  )
}

export default TrendingHeadlines