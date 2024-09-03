import React from "react";
import Titile from "../Home/Titile";
import PorjectCart from "./PorjectCart";
import {
  work1,
  work2,
  work3,
  work4,
  work5,
  work6,
  work7,
  work8,
  work9,
  work10,
} from "../../assets/index";

const Porjects = () => {
  return (
    <div>
      <Titile title="Recent" subTitle="Porjects" />
      <div className=" w-full grid grid-cols-2 gap-10">
        <div className="px-6">
          <PorjectCart title="Blog Website" category="Website" image={work1} />
          <PorjectCart title="Birthday Website" category="Birthday wise" image={work2} />
          <PorjectCart title="logo Website" category="logo Desing" image={work3} />
          <PorjectCart title="E-commerce Website" category="rent website" image={work4} />
          <PorjectCart title="cake Website" category=" CakeShop Website" image={work5} />
        </div>
        <div className="px-6">
        <PorjectCart title="E-com2 Website" category=" Cake Website" image={work6} />
          <PorjectCart title="Hotal Website" category="Hotal website" image={work7} />
          <PorjectCart title="travn Website" category=" trival Website" image={work8} />
          <PorjectCart title="Computer Website" category=" new luanch Website" image={work9} />
          <PorjectCart title="Aarboots Website" category=" nosie Airboots Website" image={work10} />
        </div>
      </div>
    </div>
  );
};

export default Porjects;
