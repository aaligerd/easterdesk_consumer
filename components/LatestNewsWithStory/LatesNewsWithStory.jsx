import Link from "next/link";
import React from "react";

function LatesNewsithStory() {
  const headlines = [
    {
      category: "World News",
      headlines:
        "Iran's retaliatory attack against US strikes ‘possible in a day or two’: Report",
      link: "/link",
    },
    {
      category: "India",
      headlines:
        "Israel Iran war LIVE: Israeli army asks Tehran residents to evacuate",
      link: "/link",
    },
    {
      category: "World News",
      headlines:
        "‘Step down, you’ll get a fair trial’: Exiled Iranian Crown Prince to Khamenei",
      link: "/link",
    },
    {
      category: "World News",
      headlines:
        "Iran's retaliatory attack against US strikes ‘possible in a day or two’: Report",
      link: "/link",
    },
    {
      category: "World News",
      headlines:
        "Rishabh Pant etched his name in history books with twin centuries in the Leeds Test against England.",
      link: "/link",
    },
  ];

  return (
    <div className="flex flex-col">
      {headlines.map((lines, index) => 
        <div id="latest-news-cards" className="bg-[#fdfdfd] px-3 py-5" key={index}>
        <Link href={lines.link}>
        
          <p className="text-[14px] font-bold uppercase text-[#881609]">{lines.category}</p>
          <p className="text-[12px] text-[#3c0904]">{lines.headlines}</p>
          <div className="w-[95%] bg-[#881609] h-[1px] mx-auto my-1.5"></div>
        
        </Link>
        </div>
      )}
    </div>
  );
}

export default LatesNewsithStory;
