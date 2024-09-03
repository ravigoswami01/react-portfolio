import React, { useState } from 'react'
import {motion} from "framer-motion"
import { FaUser, FaEnvelope } from 'react-icons/fa';
import {IoIosPaper} from "react-icons/io";
import {MdWork, MdOutlineClose} from "react-icons/md";
import { SiGooglechat } from 'react-icons/si';
import { BsTelephonePlusFill } from 'react-icons/bs';
import Left from './Components/Home/Left'
import About from './Components/ about/About';
import Resume from './Components/resume/Resume';
import AboutMe from './Components/ about/AboutMe';
import Porjects from './Components/ porject/Porjects';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';

const Home = () => {
   const [about, SetAbout] = useState(true);
   const [resume, SetResume] = useState(false);
   const [porject, SetPorjects] = useState(false);
   const [blog, SetBlog] = useState(false);
   const [contact, SetContact] = useState(false);
   //const [sidenav, SetSidevnav] = useState(true);

  return (
    <div className="w-[85%] h-[85%] bg-transparent text-white z-50 flex items-start justify-between"> 
       <div className="w-16 h-96 bg-transparent flex flex-col gap-4">
           <div className="w-full h-20 bg-bodyColor rounded-3xl flex justify-center items-center cursor-pointer group">
             {/*---------- home icon------------*/}
              <div className="flex flex-col gap-1.5 overflow-hidden">
               <span className="w-8 h-[2px] bg-texColor inline-block -translate-x-2 group-hover:translate-x-0
                  translate-transform group-hover:bg-designColor duration-300"></span>
               <span className="w-8 h-[2px] bg-texColor inline-block 
                    group-hover:bg-designColor duration-300"></span>
               <span className="w-8 h-[2px] bg-texColor inline-block -translate-x-2 group-hover:translate-x-0
                  translate-transform group-hover:bg-designColor duration-300
                "></span>
              </div>
           </div>
           {/*----------------othet icon--------------*/}
            <div className="w-full h-80 bg-bodyColor rounded-3xl py-6 flex flex-col
             items-center justify-between">
                   <span 

                   onClick ={()=>
                    SetAbout(true) &
                    SetResume(false) &
                    SetPorjects(false) &
                    SetBlog(false) &
                    SetContact(false)
                  }
                   className="w-full h-6 text-texColor text-xl flex
                   items-center justify-center hover:text-designColor duration-300 cursor-pointer
                   relative group"><FaUser />
                   <span
                   className="absolute text-black font-medium text-xs uppercase
                   bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-8
                   group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0
                    group-hover:opacity-100">About</span></span>

                    <span 
                    onClick={()=>
                     SetAbout(false)&
                     SetResume(true)&
                     SetPorjects(false) &
                     SetBlog(false) &
                     SetContact(false)
                    }
                    className="w-full h-6 text-texColor text-xl flex
                   items-center justify-center hover:text-designColor duration-300 cursor-pointer
                   relative group"><IoIosPaper />
                   <span
                   className="absolute text-black font-medium text-xs uppercase
                   bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-8
                   group-hover:translate-x-12 transition-all duration-300 z-20m opacity-0
                    group-hover:opacity-100">
                     Resume
                     </span>
                     </span>

                    <span 
                    onClick={()=>
                     SetAbout(false)&
                     SetResume(false)&
                     SetPorjects(true) &
                     SetBlog(false) &
                     SetContact(false)
                    }
                    className="w-full h-6 text-texColor text-xl flex
                   items-center justify-center hover:text-designColor duration-300 cursor-pointer
                   relative group"><MdWork />
                   <span
                   className="absolute text-black font-medium text-xs uppercase
                   bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-8
                   group-hover:translate-x-12 transition-all duration-300 z-20m opacity-0
                    group-hover:opacity-100">Porject</span></span>

                    <span 
                    onClick={()=>
                     SetAbout(false)&
                     SetResume(false)&
                     SetPorjects(false) &
                     SetBlog(true) &
                     SetContact(false)
                    }
                    className="w-full h-6 text-texColor text-xl flex
                   items-center justify-center hover:text-designColor duration-300 cursor-pointer
                   relative group"><SiGooglechat />
                   <span
                   className="absolute text-black font-medium text-xs uppercase
                   bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-8
                   group-hover:translate-x-12 transition-all duration-300 z-20m opacity-0
                    group-hover:opacity-100">Blog</span></span>

                    <span 
                    onClick={()=>
                     SetAbout(false)&
                     SetResume(false)&
                     SetPorjects(false) &
                     SetBlog(false) &
                     SetContact(true)
                    }
                    className="w-full h-6 text-texColor text-xl flex
                   items-center justify-center hover:text-designColor duration-300 cursor-pointer
                   relative group"><FaEnvelope />
                   <span
                   className="absolute text-black font-medium text-xs uppercase
                   bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-8
                   group-hover:translate-x-12 transition-all duration-300 z-20m opacity-0
                    group-hover:opacity-100">Contact</span></span>

                    <span className="w-full h-6 text-texColor text-xl flex
                   items-center justify-center hover:text-designColor duration-300 cursor-pointer
                   relative group"><BsTelephonePlusFill />
                   <span
                   className="absolute text-black font-medium text-xs uppercase
                   bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-8
                   group-hover:translate-x-12 transition-all duration-300 z-20m opacity-0
                    group-hover:opacity-100">Call</span></span>
            </div>
         </div>
          <div className="w-[94%] h-full bg-transparent flex items-center">
          {/*left part */}
           <Left />
          {/*Right part */}
          <div className="w-8/12 h-[95%] bg-bodyColor">
             <div className=' w-full h-[96%] overflow-y-scroll scrollbar-thin scrollbart-thumb[#646464]'>
                  {about && (
                  <motion.div
                  initial={{opacity:0}}
                  animate={{opacity:1}}
                  transition={{duration:0.5}}
                  >
                     <About />
                  </motion.div>
               )}
                 {resume && (
                  <motion.div
                  initial={{opacity:0}}
                  animate={{opacity:1}}
                  transition={{duration:0.5}}
                  >
                     <Resume />
                  </motion.div>
               )}
                 {porject && (
                  <motion.div
                  initial={{opacity:0}}
                  animate={{opacity:1}}
                  transition={{duration:0.5}}
                  >
                     <Porjects />
                  </motion.div>
               )}
                 {blog && (
                  <motion.div
                  initial={{opacity:0}}
                  animate={{opacity:1}}
                  transition={{duration:0.5}}
                  >
                     <Blog />
                  </motion.div>
               )}
               {contact && (
                  <motion.div
                  initial={{opacity:0}}
                  animate={{opacity:1}}
                  transition={{duration:0.5}}
                  >
                     < Contact />
                  </motion.div>
               )}

           </div>
          </div>
       </div>
    </div>
  )
}

export default Home
