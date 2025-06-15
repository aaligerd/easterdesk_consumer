import React from 'react';
import './LatestNews.css';
import LatestNewsWithExtendedText from './LatestNewsWithExtendedText';
import { latesExtendedData, latesWithoutExtendedData } from '../../utils/LatestExtendedWithTextData'
import LatestNewsWithoutExtendedText from './LatestNewsWithoutExtendedText';

function LatestNews() {
  return (
    <div id='latest-new-div' className='w-[90%] p-4 mx-auto lg:w-[65%] '>
      <div id='latest-news-header' className='flex items-center justify-between lg:justify-around lg:w-full'>
        <div id='header-text'>
          <p className='text-[20px] font-normal font-[Georgia]'>Latest News</p>
        </div>
        <div id='header-line' className='w-[60%] h-[2px] bg-[#1a1a1a] lg:w-[60%]'>
        </div>
      </div>
      <div className='flex flex-col mx-auto sm:w-[75%] md:flex-row md:flex-wrap md:w-[85%] lg:w-full'>

        {/* latest news with extended text */}
        {latesExtendedData.map((ele, indx) => {
          return <LatestNewsWithExtendedText article_data={ele} key={indx} />
        })}
      </div>

      <div className='flex flex-col mx-auto sm:w-[75%] md:flex-row md:flex-wrap md:w-[85%] md:justify-around lg:w-full'>
        {/*latest news without extended text*/}
        {latesWithoutExtendedData.map((ele, indx) => {
          return <LatestNewsWithoutExtendedText article_data={ele} key={indx} />
        })}
      </div>  
    </div>
  )
}

export default LatestNews 