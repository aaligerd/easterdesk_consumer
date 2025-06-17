import React from 'react'
import Bookmark from '@/assets/icons/bookmark'
import Share from '@/assets/icons/share'
import Comment from '@/assets/icons/comment'
import Navber from '@/components/Navbar/Navber'
import LogoAndSearch from '@/components/LogoAndSearch/LogoAndSearch'
function blogUrl() {
  return (
    <>
    <LogoAndSearch/>
    <Navber/>
    <div id='story-container'>
      <div className="relative w-full h-full">
        <img
          className="w-full h-full object-cover"
          src="https://www.tennessean.com/gcdn/authoring/authoring-images/2024/07/15/PMJS/74417484007-mjs-20240714-usat-rnc-day-one-mks-4.JPG?crop=3555,2666,x0,y0"
          alt="Tiger"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
      </div>
      <div id='story-container' className='w-[90%] mx-auto'>
        <div id='headline-container' className='w-full my-5'>
          <h1 className='text-[26px] font-[Georgia] font-bold leading-[30px]'>JD Vance in Nashville: Why is he visiting and what to know about Trump's VP</h1>
        </div>
        <div id='article-info' className='flex justify-start gap-x-6'>
          <div><p className='text-[12px] font-[Helvetica] font-normal'>By Author</p></div>
          <div><p className='text-[12px] font-[Helvetica] font-normal'>Feb 06,2025</p></div>
          <div><p className='text-[12px] font-[Helvetica] font-normal'>2 min read</p></div>
        </div>
        <div id='icon-container' className='flex justify-start gap-x-4 my-3'>
          <div>
            <Bookmark/>
          </div>
          <div>
            <Share/>
          </div>
          <div>
            <Comment/>
          </div>
        </div>
        <div id='main-content' className='mt-10'>
          <p className='text-[18px] font-normal font-[Georgia] mb-8'>The Pentagon called the object, which has flown from Montana to Kansas, an “intelligence gathering” balloon. Beijing said it was used mainly for weather research and had strayed off course.</p>
          <p className='text-[18px] font-normal font-[Georgia] mb-8'>WASHINGTON — Secretary of State Antony J. Blinken on Friday canceled a weekend trip to Beijing after a Chinese spy balloon was sighted above the Rocky Mountain state of Montana, igniting a frenzy of media coverage and political commentary over a machine that the Pentagon said posed no threat to the United States.</p>
          <p className='text-[18px] font-normal font-[Georgia] mb-8'>Mr. Blinken canceled the trip after civilians in Montana this week began spotting the balloon, which the Pentagon said was an “intelligence-gathering” airship. Military officials had been monitoring the balloon for days, and Mr. Blinken and a deputy secretly confronted Chinese diplomats in Washington on Wednesday. But it became a diplomatic crisis only as media attention mounted on Thursday night and Republican politicians called for President Biden and Mr. Blinken to act.</p>
          <div className='w-full my-10'>
            <img src="https://c.ndtvimg.com/2024-07/hrtbmc38_usha-chilukuri-vance-jd-vance-afp_625x300_18_July_24.jpeg?im=FaceCrop,algorithm=dnn,width=1200,height=738" alt="" className='w-full object-fit' />
          </div>

          <p className='text-[18px] font-normal font-[Georgia] mb-8'>Mr. Blinken canceled the trip after civilians in Montana this week began spotting the balloon, which the Pentagon said was an “intelligence-gathering” airship. Military officials had been monitoring the balloon for days, and Mr. Blinken and a deputy secretly confronted Chinese diplomats in Washington on Wednesday. But it became a diplomatic crisis only as media attention mounted on Thursday night and Republican politicians called for President Biden and Mr. Blinken to act.</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default blogUrl