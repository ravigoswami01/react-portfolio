import React from "react";
import Titile from "../Home/Titile";
import BlogCart from "./ BlogCart";
import { blog1, blog10, blog2, blog3, blog4, blog5, blog6, blog7, blog8, blog9 } from "../../assets";


const Blog = () => {
  return (
    <div>
      <Titile title="newList" subTitle="posts " />
      <div className=" grid grid-cols-2 gap-10">
        <div className="px-6">
         <BlogCart 
           image={blog1}
           title="JULY  15,2024"
           subTitle="UI & UX conferenc at live"
           category="travel"
           />
            <BlogCart 
           image={blog2}
           title="JULY  10,2024"
           subTitle="NEW YERK CITY ROAD LIVE"
           category="city usa"
           />
            <BlogCart 
           image={blog3}
           title="MARCH  20,2024"
           subTitle="K2 HILL IN GANGATOK SHIKIKAM live"
           category="Hiling Mountin"
           />
            <BlogCart 
           image={blog4}
           title="JUN  17,2024"
           subTitle="SOUTH INDIAN ACTRESS "
           category="intro"
           />
            <BlogCart 
           image={blog5}
           title="JULY  19,2024"
           subTitle="DIMAN NEW FETHER COMING "
           category="Car"
           />
        </div>
        <div className="px-6">
        <BlogCart 
           image={blog6}
           title="MAY  25,2024"
           subTitle="OPINING NEW RESTURENT POST"
           category="RESTOROOM"
           />
            <BlogCart 
           image={blog7}
           title="JULY  10,2024"
           subTitle="BHUJ-KHALIFA ABU DHABHI AUE"
           category="AUE"
           />
            <BlogCart 
           image={blog8}
           title="MARCH  01,2024"
           subTitle="GERENATIV AI CONFRENCE BUNGULURU"
           category="Ai Confrence"
           />
            <BlogCart 
           image={blog9}
           title="JUN  17,2024"
           subTitle="SIR RATAN TATA INTERVIWE" 
           category="intro"
           />
            <BlogCart 
           image={blog10}
           title="AUGUST  05,2024"
           subTitle="CODE FLOWE CODING CONTANCE "
           category="CODING"
           />
        </div>
      </div>
    </div>
  );
};

export default Blog;
