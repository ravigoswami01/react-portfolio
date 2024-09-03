import React from 'react'
import MyServiceCart from './ServiceCart'
import ServiceCart from './ServiceCart'
import { FaAppStoreIos } from 'react-icons/fa'
import {AiTwotoneAppstore} from "react-icons/ai"
import { SiAntdesign } from 'react-icons/si'
import { BiCodeAlt } from 'react-icons/bi'
const MyService = () => {
  return (
    <div className="grid grid-cols-2">
     <ServiceCart 
      icons={<BiCodeAlt />} 
      title="Web Developer" 
      subtitle= "lorem ipusm, dolor sit amet consectetur adipisicing elit porvidentAccusamus at dolorem Expedite dicte"
    />
         <ServiceCart 
      icons={<SiAntdesign />} 
      title="Web Design" 
      subtitle= "lorem ipusm, dolor sit amet consectetur adipisicing elit porvidentAccusamus at dolorem Expedite dicte"
    />
         <ServiceCart 
      icons={<AiTwotoneAppstore />} 
      title="Mobile Application" 
      subtitle= "lorem ipusm, dolor sit amet consectetur adipisicing elit porvidentAccusamus at dolorem Expedite dicte"
    />
         <ServiceCart 
      icons={<FaAppStoreIos />} 
      title="SEO" 
      subtitle= "lorem ipusm, dolor sit amet consectetur adipisicing elit porvidentAccusamus at dolorem Expedite dicte"
    />
    
    </div>
  )
}

export default MyService
