import React from 'react'
import ResumeTitle from './ResumeTitle'
import { MdWork } from 'react-icons/md'
import ResumeCart from './ResumeCart'


const Eduection = () => {
  return (
    <div className='w-full grid grid-cols-9 px-6'>
        <div className=' col-span-4'>
         <ResumeTitle title="Experience" icon={<MdWork />} />
           <ResumeCart 
             badge=""
             title="web Developer"
             subtitle="Facebook ind"
             des="A web developer or programmer is a
              professional who translates web design into a language that a computer understands,"
           />
           <ResumeCart 
             badge="Present"
             title="web Developer"
             subtitle="Facebook ind"
             des="Web Developer is responsible for server-side web 
             application logic and integration of 
              the work front-end web developers do,"
           />
           <ResumeCart 
             badge="2024-Present"
             title="web Developer"
             subtitle="Facebook ind"
             des="A web developer or programmer is a
              professional who translates web design into a language that a computer understands,"
           />
           <ResumeCart 
             badge="2024-Present"
             title="web Developer"
             subtitle="Facebook ind"
             des="A web developer or programmer is a
              professional who translates web design into a language that a computer understands,"
           />
        </div>
        <div className='w-full h-full flex justify-center items-center'>
            <span className='w-[1px] h-full bg-zinc-800 inline-flex'></span>
        </div>
        <div className='col-span-4'>
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCart 
             badge="2021-2024"
             title="V.K.S.University"
             subtitle="Arrha Bihar"
             des="B.sc With 75%
             an undergraduate academic degree awarded upon completion of a science-focused programme."
           />
            <ResumeCart 
             badge="2019-2021"
             title="+2 high school"
             subtitle="Arrha"
             des="2nd With 57.5%"
           />
            <ResumeCart 
             badge="2024-Present"
             title="web Developer"
             subtitle="Facebook ind"
             des="A web developer or programmer is a
              professional who translates web design into a language that a computer understands,"
           />
            <ResumeCart 
             badge="2024-Present"
             title="web Developer"
             subtitle="Facebook ind"
             des="A web developer or programmer is a
              professional who translates web design into a language that a computer understands,"
           />
        </div>
    </div>
  )
}

export default Eduection
