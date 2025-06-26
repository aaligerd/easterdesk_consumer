import React from "react";
import parse, { domToReact } from "html-react-parser";
import Bookmark from "@/assets/icons/bookmark";
import Share from "@/assets/icons/share";
import Comment from "@/assets/icons/comment";
import Navbar from "@/components/Navbar/Navber";
import LogoAndSearch from "@/components/LogoAndSearch/LogoAndSearch";
import ImageRenderer from "@/components/ImageRenderer/ImageRenderer";
import LatesNewsithStory from "@/components/LatestNewsWithStory/LatesNewsWithStory";

async function blogUrl({ params }) {
  const { category, subcategory, blog_url } = await params;
  const article = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/story/${blog_url}`,
    { next: { revalidate: 60 } }
  );
  const data = await article.json();
  const content = JSON.parse(data.data.content);
  return (
    <>
      <LogoAndSearch />
      <Navbar />
      <div className="flex justify-center">
        <div className="hidden p-1.5 md:block md:w-[20%]">
          <LatesNewsithStory/>
        </div>
        <div id="story-container" className="w-full md:w-[40%]">
          <div className="relative w-full h-[180px] md:h-[280px] lg:h-[380px]">
            <ImageRenderer
              url={content.blocks[0].data.url}
              alt={content.blocks[0].data.title}
              lowUrl={content.blocks[0].data.lowImageUrl || ""}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
          </div>
          <div id="story-container" className="w-[90%] mx-auto md:w-full md:pl-1">
            <div id="headline-container" className="w-full my-5">
              <h1 className="text-[26px] font-[Georgia] font-bold leading-[30px]">
                {content.blocks[1].data.text}
              </h1>
            </div>
            <div id="article-info" className="flex justify-start gap-x-6">
              <div>
                <p className="text-[12px] font-[Helvetica] font-normal">
                  By {data.data.by_line}
                </p>
              </div>
              <div>
                <p className="text-[12px] font-[Helvetica] font-normal">
                  {genDateTime(data.data.created_at)}
                </p>
              </div>
              <div>
                <p className="text-[12px] font-[Helvetica] font-normal">
                  2 min read
                </p>
              </div>
            </div>
            <div
              id="icon-container"
              className="flex justify-start gap-x-4 my-3"
            >
              <div>
                <Bookmark />
              </div>
              <div>
                <Share />
              </div>
              <div>
                <Comment />
              </div>
            </div>
            <div id="main-content" className="mt-10">
              {content.blocks.slice(2).map((block, index) => {
                switch (block.type) {
                  case "paragraph":
                    return (
                      <div
                        key={index}
                        className="mb-8 text-[18px] font-[Georgia] font-normal"
                      >
                        {parse(block.data.text, {
                          replace: (domNode) => {
                            if (domNode.name === "a") {
                              return (
                                <a
                                  href={domNode.attribs.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-600 underline hover:text-blue-800"
                                >
                                  {domToReact(domNode.children)}
                                </a>
                              );
                            }

                            if (domNode.name === "i") {
                              return (
                                <i className="italic">
                                  {domToReact(domNode.children)}
                                </i>
                              );
                            }

                            if (domNode.name === "strong") {
                              return (
                                <strong className="font-bold">
                                  {domToReact(domNode.children)}
                                </strong>
                              );
                            }

                            // Add more custom tag handlers as needed

                            return;
                          },
                        })}
                      </div>
                    );

                  case "image":
                    return (
                      <div key={index} className="w-full my-10">
                        <img
                          src={block.data.url}
                          alt={block.data.title}
                          className="w-full object-fit"
                        />
                        {block.data.caption && (
                          <p className="text-[14px] font-normal font-[Georgia] text-center mt-2">
                            {block.data.caption}
                          </p>
                        )}
                      </div>
                    );
                  case "header":
                    return (
                      <h2
                        key={index}
                        className="text-[24px] font-bold font-[Georgia] mb-4"
                      >
                        {block.data.text}
                      </h2>
                    );
                  default:
                    return (
                      <p
                        key={index}
                        className="text-[18px] font-normal font-[Georgia] mb-8"
                      >
                        Unsupported block type: {block.type}
                      </p>
                    );
                }
              })}
            </div>
          </div>
        </div>
        <div className="hidden p-1.5 md:block md:w-[20%]">
          <LatesNewsithStory/>
        </div>
      </div>
    </>
  );
}

function genDateTime(date) {
  const dateObj = new Date(date);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return dateObj.toLocaleDateString("en-US", options);
}

export default blogUrl;
