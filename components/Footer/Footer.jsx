import Facebook from "@/assets/icons/facebook";
import Instagram from "@/assets/icons/instagram";
import Twitter from "@/assets/icons/twitter";
import localFont from "next/font/local";
import React from "react";
import {footerList1,footerList2} from '@/utils/footerList'
import Link from "next/link";

const fondamento = localFont({
  src: "../../fonts/Fondamento.ttf",
});

function Footer() {
  return (
    <footer>
    <div id="main-footer-div" className="w-full bg-[#881609]">
      <div id="first-footer-div" className="mx-auto w-[80%] flex justify-between py-3 md:w-[85%] lg:w-[75%]">
        <div>
          <div id="footer-logo" className="">
            <h2 className="text-[12px] md:text-[25px] lg:text-[30px] xl:text-[40px] font-[AncientMedium] font-bold text-[#fffbed] p-1">
              <span className={fondamento.className}>The Eastern Gazette</span>
            </h2>
          </div>
          <div className="flex">
                <div className="w-10 h-10 flex justify-start items-center"><Facebook/></div>
                <div className="w-10 h-10 flex justify-start items-center"><Instagram/></div>
                <div className="w-10 h-10 flex justify-start items-center"><Twitter/></div>
          </div>
        </div>
        <div id="link-div-1" className="p-1">
          {footerList1.map((ele,index)=>{
            return <Link href={ele.link} key={index}>
              <div>
                <p className="text-[15px] text-[#fffbed] font-bold">{ele.item}</p>
              </div>
            </Link>
          })}
        </div>
        <div id="link-div-2" className="p-1">
          {footerList2.map((ele,index)=>{
            return <Link href={ele.link} key={index}>
              <div>
            <p className="text-[15px] text-[#fffbed] text-end font-bold">{ele.item}</p>
          </div>
            </Link>
          })}
        </div>
      </div>
      <div id="second-footer-div" className="mx-auto w-[80%] py-5">
        <p className="text-center font-[Roboto] text-[15px] text-[#fffbed]">
          © 2025 The Eastern Gazette. All rights reserved.
        </p>
      </div>
    </div>
    </footer>
  );
}

export default Footer;
