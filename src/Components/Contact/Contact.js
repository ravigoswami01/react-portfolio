import React, { useState } from "react";
import Titile from "../Home/Titile";
import { FiSend } from "react-icons/fi";
import axios from "axios"

const Contact = () => {
    const[clientName, setclientName] =useState("");
    const[email, setemail] = useState("");
    const[massages, setMassages]=useState("");
    
    const[errClientName, seterrclientName]=useState(false);
    const [erremail, seterremail] =useState(false);
    const [errmassage, seterrmassage] =useState(false);

    const [seuccessMsg, setseuccessMsg] = useState("");
    //==============gmail.vlied===================//
    const EmailValidatino =(email)=>{
      return String(email)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    }

     
      const handalName =(e)=>{
        setclientName(e.target.value)
        seterrclientName(false)
      };
      const handalemail =(e)=>{
        setemail(e.target.value)
        seterremail(false)
      };
      const handalMessages =(e)=>{
        setMassages(e.target.value)
        seterrmassage(false)
      };

    const handalSend=(e)=>{
       e.preventDefault()
       if(!clientName){
        seterrclientName(true)
       }
       if(!email){
        seterremail(true)
       }else{
        if(!EmailValidatino(email)){
          seterremail(true)
        }
       }
       if(!massages){
        seterrmassage(true)
       }
       if(clientName && email && EmailValidatino(email) && massages){
        axios.post("https://getform.io/f/ajjevqpa",{
          name:clientName,
          email:email,
          massages: massages
        })
        setseuccessMsg(
          `hello dear${clientName}, your massage has been sent successfully.thanku you for your time!`
        );
        setclientName("")
        setemail("")
        setMassages("")
       }
}
  return (
    <div>
      <Titile title="Get" subTitle="in Touch" />
      <div className="p-6 flex justify-between gap-20">
        <div className="w-1/2">
          <p
            className="flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px]
            border-b-zinc-800"
          >
            <span
              className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 
             rounded-md flex items-center justify-center"
            >
              Address:
            </span>
            Arrha Bihar
          </p>
          <p
            className="flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px]
            border-b-zinc-800"
          >
            <span
              className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 
             rounded-md flex items-center justify-center"
            >
              Phone:
            </span>
            +91-6394732716
          </p>
        </div>
        <div className="w-1/2">
          <p
            className="flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px]
            border-b-zinc-800"
          >
            <span
              className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 
             rounded-md flex items-center justify-center"
            >
              Email:
            </span>
            raviroa25@gmail.com
          </p>
          <p
            className="flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px]
            border-b-zinc-800"
          >
            <span
              className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 
             rounded-md flex items-center justify-center"
            >
              Freelance:
            </span>
            Abailable
          </p>
        </div>
      </div>
      <div className="w-full mt-10">
        <Titile title="send" subTitle="Massages"/>
       {
        seuccessMsg ? 
        (<p className="text-center text-base font-titleFont p-20 text-designColor">
          {seuccessMsg}</p>
        ):(
          <form
           id="form"
           action="https://getform.io/f/ajjevqpa"
           method="POST"
           className="p-6 flex flex-col gap-6">
            <div className="w-full flex gap-10 justify-between">
              <input
              onChange={handalName}
              value={clientName}
              className="w-full bg-transparent border-2 px-4 text-base text-gray-200
              border-zinc-600 focus-visible:border-designColor duration-300"
              type="text"
              placeholder="Full Name"
              />
              <input 
              onChange={handalemail}
              value={email}
              className={` ${clientName}?" border-red-600 focus-visible:border-red-600"
              :"border-zinc-600 focus-visible:border-designColor"
              }w-full bg-transparent border-2 px-4 text-base text-gray-200
              duration-300`}
              type="email"
              placeholder="email id"
              />
            </div>
            <textarea 
            onChange={handalMessages}
            value={massages}
              className="w-full bg-transparent border-2 px-4 py-2 text-base text-gray-400
              border-zinc-600  focus-visible:border-designColor outline-none duration-300 resize-none"
              placeholder="Your Massage"
              cols="40"
              rows="6"
            ></textarea>
            <button
            onClick={handalSend}
             className="text-base w-44 flex items-center gap-1 text-gray-200 hover:text-designColor
            duration-200">
              Massages Send{""}
              <span className="mt-1 text-designColor">{<FiSend />}</span></button>
           </form>
        ) }
      </div>
    </div>
  )
}

export default Contact
