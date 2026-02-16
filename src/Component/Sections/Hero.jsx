import React from "react";
import Button from "../UI/button";
import Search from "../../assets/search-sm.png";

export default function Hero() {
  return (
    <div className="bg-[linear-gradient(to_bottom,rgba(0,0,0,0.45),rgba(0,0,0,0.45)),url('src/assets/Welcome.png')] bg-cover bg-center w-full h-[941px] relative">
      <div className="flex flex-col justify-between  font-bold text-white text-center gap-5 ml-[48px] pt-[200px]">
        <h1 className="text-[48px] font-bold text-left w-[650px]">
          The Heart of Nigerian Home Cooking
        </h1>

        <h2 className="font-bold text-[32px] text-left w-[750px]">
          Handcrafted with passion, delivered with care.
        </h2>

        <Button className="w-[215px]">Discover what's new</Button>
      </div>
      {/* Remove w-full and left-10, use inset-x-0 */}
      <div className="absolute bottom-0 inset-x-0 flex justify-center items-center">
        <div className="relative">
          {" "}
          <input
            type="text"
            placeholder="What are you craving for today?"
            className="bg-white w-[700px] py-3 rounded-md text-gray-700 font-bold font-Inter px-20 focus:outline-none focus:ring-2 focus:ring-[#FF7A18]"
          />
          <img
            src={Search}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-[35px]"
          />
        </div>
      </div>
    </div>
  );
}
