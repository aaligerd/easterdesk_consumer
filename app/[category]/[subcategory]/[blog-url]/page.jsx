import React from 'react'
import Bookmark from '@/assets/icons/bookmark'
import Share from '@/assets/icons/share'
import Comment from '@/assets/icons/comment'
import Navber from '@/components/Navbar/Navber'
import LogoAndSearch from '@/components/LogoAndSearch/LogoAndSearch'
async function blogUrl() {
  const seo_url='jd-vance-in-nashville-why-is-he-visiting-and-what-to-know-about-trumps-vp';
  const article=await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/story/${seo_url}`,{next: { revalidate: 60 }});
  const data=await article.json();
  const content=JSON.parse(data.data.content);
  console.log(content);
  return (
    <>
    <LogoAndSearch/>
    <Navber/>
    <div id='story-container'>
      <div className="relative w-full h-full">
        <img
          className="w-full h-full object-cover"
          // src={content.blocks[0].data.file.url}
          src='https://res.cloudinary.com/dc4g2nhmq/image/upload/v1750155737/editorjs/icm9wumgja6rsfuvhhl2.webp'
          alt="Tiger"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
      </div>
      <div id='story-container' className='w-[90%] mx-auto'>
        <div id='headline-container' className='w-full my-5'>
          <h1 className='text-[26px] font-[Georgia] font-bold leading-[30px]'>{content.blocks[1].data.text}</h1>
        </div>
        <div id='article-info' className='flex justify-start gap-x-6'>
          <div><p className='text-[12px] font-[Helvetica] font-normal'>By {data.data.by_line}</p></div>
          <div><p className='text-[12px] font-[Helvetica] font-normal'>{genDateTime(data.data.created_at)}</p></div>
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
          {content.blocks.slice(2).map((block, index) => {
            switch (block.type) {
              case 'paragraph':
                return <p key={index} className='text-[18px] font-normal font-[Georgia] mb-8'>{block.data.text}</p>;
              case 'image':
                return (
                  <div key={index} className='w-full my-10'>
                    <img src={block.data.file.url} alt={block.data.caption} className='w-full object-fit' />
                    {block.data.caption && <p className='text-[14px] font-normal font-[Georgia] text-center mt-2'>{block.data.caption}</p>}
                  </div>
                );
              case 'header':
                return <h2 key={index} className='text-[24px] font-bold font-[Georgia] mb-4'>{block.data.text}</h2>;
              default:
                return null;
            }
          })}
        </div>
      </div>
    </div>
    </>
  )
}

function genDateTime(date){
  // return date in the format of "January 1, 2023"
  const dateObj = new Date(date);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return dateObj.toLocaleDateString('en-US', options);
}

export default blogUrl