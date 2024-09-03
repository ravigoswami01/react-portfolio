import React from "react";

const Titile = ({title,subTitle}) => {
  return (
    <h1
      className="font-titleFont font-bold text-xl capitalize text-texColor
         relative z-20 py-3 px-6 borderBottom group"
    >
      <span className="text-designColor"> {title}</span>{subTitle}
      <span
        className="w-8 h-8 bg-gradient-to-t grom-desiginColor to-gray-600
            inline-block rounded-full absolute left-2 top-3 opacity-10 -z-10 translate-x-0
            group-hover:translate-x-24 transition-transform duration-300"
      ></span>
    </h1>
  );
};

export default Titile;
