import Footer from '@/components/Footer/Footer';
import LogoAndSearch from '@/components/LogoAndSearch/LogoAndSearch';
import Navbar from '@/components/Navbar/Navber';
import React from 'react'

const siteDesc=`Sooo… in the heart of Kolkata, where the Hooghly whispers stories of the past and the city hums from Tagore to Floyd, The Eastern Gazette was born, from the mind of five. We are not just another news portal, but we are narrators, voyeurs, truth-seekers, who strive to ensure that we provide a clear picture, within the context of Bengal, India and the world. Blurring the boundary between the local and the universal, The Eastern Gazette, in a mere instance, veers from the political arena of Bengal to the roaring stadiums of the game, the glittering lure of the entertainment industry, to world affairs. We are a company that has roots in the bylanes of North Kolkata and branches that reach so far as the skyscrapers of New York, so that all stories told, whether based in the regional context or the global one, are told in all the integrity and flair of our voices.Our journalism is a beacon for those who seek more than the noise of the hour. The Eastern Gazette is not just a platform; it is a conversation, it's a voice from Bengal to the World.`;

export const metadata = {
  title:"About | The Eastern Gazette",
  description: siteDesc,
  keywords: ['the eastern gazette','about eastern gazette','news', 'breaking news'],
  openGraph: {
    title: 'About | The Eastern Gazette',
    description: siteDesc,
    url: 'https://theeasterngazette.com',
    siteName: 'The Eastern Gazette',
    images: [
      {
        url: 'https://res.cloudinary.com/dc4g2nhmq/image/upload/v1750750397/The_Easern_Gazette_og_image_gdgsz3.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
    twitter: {
    card: 'summary_large_image',
    title: 'About | The Eastern Gazette',
    description:siteDesc,
    images: ['https://res.cloudinary.com/dc4g2nhmq/image/upload/v1750750397/The_Easern_Gazette_og_image_gdgsz3.png'],
  },
    robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:process.env.PUBLIC_DOMAIN_URL,
  },
};


function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
        <LogoAndSearch/>
      <header className="bg-navbarbg text-[#FDFDFD] ">
        <Navbar/>
      </header>
      <div id='main-content' className='w-[80%] mx-auto md:w-[70%] '>
        <div className='flex justify-center my-5'>
          <h1 className='text-xl font-bold font-[Georgia]'>About - The Eastern Gazette</h1>
        </div>
        <div>
          <p className='font-[Georgia] text-justify'>
            Sooo… in the heart of <span className='font-bold'>Kolkata</span>, where the Hooghly whispers stories of the past and the city hums from Tagore to Floyd, <span className='font-bold'>The Eastern Gazette</span> was born, from the mind of five. We are not just another news portal, but we are narrators, voyeurs, truth-seekers, who strive to ensure that we provide a clear picture, within the context of <span className='font-bold'>Bengal</span>, <span className='font-bold'>India</span> and the <span className='font-bold'>World</span>. Blurring the boundary between the local and the universal, <span className='font-bold'>The Eastern Gazette</span>, in a mere instance, veers from the political arena of Bengal to the roaring stadiums of the game, the glittering lure of the entertainment industry, to world affairs. We are a company that has roots in the bylanes of North Kolkata and branches that reach so far as the skyscrapers of New York, so that all stories told, whether based in the regional context or the global one, are told in all the integrity and flair of our voices.Our journalism is a beacon for those who seek more than the noise of the hour. <strong>The Eastern Gazette</strong> is not just a platform, it is a conversation, it's a voice from <strong>Bengal</strong> to the <strong>World</strong>.
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default AboutPage