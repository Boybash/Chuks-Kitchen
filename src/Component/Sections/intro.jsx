import React from "react";
import Button from "../UI/button";

export default function Intro() {
  return (
    <div className="bg-[linear-gradient(to_bottom,rgba(0,0,0,0.45),rgba(0,0,0,0.45)),url('src/assets/beansbg.png')] bg-cover bg-center w-full min-h-[500px] md:h-[610px] flex items-center">
      <div className="flex flex-col justify-center items-start font-bold text-white text-left gap-6 px-6 md:ml-[48px] max-w-7xl">
        <h1 className="text-[32px] md:text-[48px] font-extrabold w-full md:max-w-[1000px] leading-tight">
          Introducing Our New Menu Additions!
        </h1>

        <h2 className="font-semibold text-[18px] md:text-[24px] w-full md:max-w-[750px] leading-relaxed opacity-90">
          Explore exciting new dishes, crafted with the freshest ingredients and
          authentic Nigerian flavors. Limited time offer!
        </h2>

        <Button className="w-full sm:w-[215px]">Discover what's new</Button>
      </div>
    </div>
  );
}
