import LogoAndSearch from '@/components/LogoAndSearch/LogoAndSearch';
import Navbar from '@/components/Navbar/Navber';
import CategorisedPageContent from '@/components/CategorisedPageContent/CategorisedPageContent'
import React from 'react'

async function Category({params}) {
  const {category}=await params;
  return (
    <>
      <LogoAndSearch/>
      <header className="bg-navbarbg text-[#FDFDFD] ">
          <Navbar/>
      </header>
      <CategorisedPageContent category={category}/>
    </>
  )
}

export default Category