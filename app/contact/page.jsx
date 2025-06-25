import LogoAndSearch from '@/components/LogoAndSearch/LogoAndSearch';
import Navbar from '@/components/Navbar/Navber';
import React from 'react'

const siteDesc=`Sooo… in the heart of Kolkata, where the Hooghly whispers stories of the past and the city hums from Tagore to Floyd, The Eastern Gazette was born, from the mind of five. We are not just another news portal, but we are narrators, voyeurs, truth-seekers, who strive to ensure that we provide a clear picture, within the context of Bengal, India and the world. Blurring the boundary between the local and the universal, The Eastern Gazette, in a mere instance, veers from the political arena of Bengal to the roaring stadiums of the game, the glittering lure of the entertainment industry, to world affairs. We are a company that has roots in the bylanes of North Kolkata and branches that reach so far as the skyscrapers of New York, so that all stories told, whether based in the regional context or the global one, are told in all the integrity and flair of our voices.Our journalism is a beacon for those who seek more than the noise of the hour. The Eastern Gazette is not just a platform; it is a conversation, it's a voice from Bengal to the World.`;

export const metadata = {
  title:"Contact | The Eastern Gazette",
  description: siteDesc,
  keywords: ['the eastern gazette','contact eastern gazette','news', 'breaking news'],
  openGraph: {
    title: 'Contact | The Eastern Gazette',
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
    title: 'Contact | The Eastern Gazette',
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



function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
        <LogoAndSearch/>
      <header className="bg-navbarbg text-[#FDFDFD] ">
        <Navbar/>
      </header>
      <div id='main-content' className='w-full md:w-[40%]'>
        Contact Page
      </div>
    </div>
  )
}

export default Contact