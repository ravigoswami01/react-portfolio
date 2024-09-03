import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsCloudLightningFill, BsFacebook } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiYoutubmusic } from "react-icons/si";
import { FiInstagram, FiMail, FiSend } from "react-icons/fi";
import { bannerImg } from "../../assets/index";
import CV from "../../assets/RaviRanjanKumarGiriResume.pdf";


const Left = () => {
        const [text]=useTypewriter({
          words:["Web Developer", "Frontend-Developer", "Ui Desgner"],
          loop:true,
          typeSpeed:30,
          deleteSpeed:20,
          delaySpeed :2000,
        });  
  return(
    <div className="w-5/12 h-full bg-bodyColor rounded-2xl shadow-testShadow ">
      <div className=" w-full h-3/5">
             <img 
               className="w-full h-full object-cover rounded-2xl" 
                src={bannerImg}
                alt="bannerImg"
                loading="priority"
               />
      </div>
      <div className="w-full h-2/5 ">
           {/*content intro.....*/}
           <div className="flex flex-col items-center gap-2 py-10">
              <h1 className="text-textColor text-3xl font-semibold">Ravi Dev.</h1>
              <p className=" text-base text-designColor tracking-wide">{text}<Cursor cursorBlinking="false" cursorStyle="|"></Cursor></p>
               <div className=" flex justify-center gap-2 mt-2">
                  <span className=" hover:text-designColor duration-300 cursor-pointer text-xl"><FaGithub /></span>
                  <span className=" hover:text-designColor duration-300 cursor-pointer text-xl"><FaLinkedin/></span>
                  <span className=" hover:text-designColor duration-300 cursor-pointer text-xl"><FiSend /></span>
                  <span className=" hover:text-designColor duration-300 cursor-pointer text-xl"><BsFacebook /></span>
                  <span className=" hover:text-designColor duration-300 cursor-pointer text-xl"><FiInstagram /></span>
               </div>
           </div>
           {/*butten ...................*/}
           <div className="flex h-12">
            <a 
               className="w-1/2 border-t-[1px] border-t-zinc-800
                text-sm tracking-wide uppercase gap-2 hover:text-designColor
                 duration-300"
                  href={CV}
                  target="_blank"
                  rel="noreferrer"
                >
               <button className="w-full h-full flex justify-center uppercase items-center gap-2" >
                 Download CV<BsCloudLightningFill />
                </button>
              </a>
            <button className=" w-1/2 border-t-[1px] border-t-zinc-800 text-sm
                  tracking-wide uppercase flex justify-center items-center gap-2 hover:
                   text-designColor duration-300">
                  Contact Me<FiSend />
            </button>
           </div>
      </div>
    </div>
  )
}

export default Left;
