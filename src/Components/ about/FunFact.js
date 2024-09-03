import React from 'react'
import FunCard from './FunCard'
import {BsTrophyFill }from "react-icons/bs"
import { SiAntdesign } from 'react-icons/si'
import { BiCodeAlt } from 'react-icons/bi'
import {IoLogoYoutube} from "react-icons/io"
const FunFact = () => {
  return (
    <div className=' grid grid-cols-4 pb-10'>
    <FunCard  icon={<BsTrophyFill/>} des="10 Awardswon" />
    <FunCard  icon={<SiAntdesign/>} des="20 Finished Porject" />
    <FunCard  icon={<BiCodeAlt/>} des="100 Hours of Coding" />
    <FunCard  icon={<IoLogoYoutube/>} des="50 subcription" />
    </div>
  )
}

export default FunFact
