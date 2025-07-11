import Footer from "@/components/Footer/Footer";
import Homepagehero from "@/components/Homepagehero/Homepagehero";
import LatestNews from "@/components/LatestNews/LatestNews";
import LogoAndSearch from "@/components/LogoAndSearch/LogoAndSearch";
import Navber from "@/components/Navbar/Navber";
import TrendingHeadlines from "@/components/TrendingHeadlines/TrendingHeadlines";

const siteDesc=`Sooo… in the heart of Kolkata, where the Hooghly whispers stories of the past and the city hums from Tagore to Floyd, The Eastern Gazette was born, from the mind of five. We are not just another news portal, but we are narrators, voyeurs, truth-seekers, who strive to ensure that we provide a clear picture, within the context of Bengal, India and the world. Blurring the boundary between the local and the universal, The Eastern Gazette, in a mere instance, veers from the political arena of Bengal to the roaring stadiums of the game, the glittering lure of the entertainment industry, to world affairs. We are a company that has roots in the bylanes of North Kolkata and branches that reach so far as the skyscrapers of New York, so that all stories told, whether based in the regional context or the global one, are told in all the integrity and flair of our voices.Our journalism is a beacon for those who seek more than the noise of the hour. The Eastern Gazette is not just a platform; it is a conversation, it's a voice from Bengal to the World.`;

export const metadata = {
  title:"Home | The Eastern Gazette",
  description: siteDesc,
  keywords: ['the eastern gazette','eastern gazette','world news', 'bengal news'],
  openGraph: {
    title: 'The Eastern Gazette',
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
    title: 'The Eastern Gazette',
    description:siteDesc,
    images: ['https://res.cloudinary.com/dc4g2nhmq/image/upload/v1750750397/The_Easern_Gazette_og_image_gdgsz3.png'],
  },
    robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: process.env.PUBLIC_DOMAIN_URL,
  },
};



export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
    <LogoAndSearch/>
      <header className="bg-navbarbg text-[#FDFDFD] ">
        <Navber/>
      </header>
      <Homepagehero/>
      <div className="flex mx-auto sm:w-[95%] md:w-[85%] lg:w-[75%]  bg-[#fdfdfd]">
      <LatestNews/>
      <TrendingHeadlines/>
      </div>
      <Footer/>
    </div>
  );
}
