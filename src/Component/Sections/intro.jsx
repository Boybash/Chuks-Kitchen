import React from "react";
import Button from "../UI/button";
export default function Intro() {
  return (
    <div className="bg-[linear-gradient(to_bottom,rgba(0,0,0,0.45),rgba(0,0,0,0.45)),url('src/assets/beansbg.png')] bg-cover bg-center w-full h-[610px]">
      <div className="flex flex-col justify-between  font-bold text-white text-center gap-5 ml-[48px] pt-[200px]">
        <h1 className="text-[48px] font-extrabold text-left w-[1000px]">
          Introducing Our New Menu Additions!
        </h1>

        <h2 className="font-semi-bold text-[24px] text-left w-[750px]">
          Explore exciting new dishes, crafted with the freshest ingredients and
          authentic Nigerian flavors. Limited time offer!
        </h2>

        <Button className="w-[215px]">Discover what's new</Button>
      </div>
    </div>
  );
}
