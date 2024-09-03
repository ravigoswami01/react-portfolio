import React from "react";

const ResumeCart = ({badge,title,subtitle,des}) => {
  return (
    <div className="w-full py-6 flex flex-col gap-2.5 border-b-[1px]
        border-b-zinc-800">
            {badge === ""?(
                <h6 className="w-28 text-center text-sm py-[1px] text-designColor
                border-[1px] border-designColor rounded-sm">2024-Present</h6>
            ):(
                <h6 className="w-24 text-center text-sm py-[1px] text-[#999]
               border-[1px] border-zinc-600 rounded-sm">2024-Present</h6>
            )}
              
              <h2 className="text-lg font-titleFont text-gray-200 font-medium">{title}</h2>
              <p className="text-sm text-[#999] -mt-2">{subtitle}</p>
              <p className="text-base text-[#999] font-medium pr-10">
                {des}
              </p>
            </div>
  );
};

export default ResumeCart;
