import React from "react";
import Button from "../UI/button";
import Search from "../../assets/search-sm.png";
import { SearchContext } from "../Context/SearchContext";
import { useContext } from "react";

export default function Hero() {
  const { setSearchTerm } = useContext(SearchContext);

  function handleSearch(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <div className="bg-[linear-gradient(to_bottom,rgba(0,0,0,0.45),rgba(0,0,0,0.45)),url('src/assets/Welcome.png')] bg-cover bg-center w-full h-[600px] md:h-[941px] relative flex items-center">
      <div className="flex flex-col justify-center items-start font-bold text-white text-left gap-6 px-6 md:ml-[48px] w-full max-w-7xl mx-auto">
        <h1 className="text-[32px] md:text-[48px] font-bold w-full md:w-[650px] leading-tight">
          The Heart of Nigerian Home Cooking
        </h1>

        <h2 className="font-bold text-[20px] md:text-[32px] w-full md:w-[750px] opacity-90">
          Handcrafted with passion, delivered with care.
        </h2>

        <Button className="w-full sm:w-[215px]">Discover what's new</Button>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 z-10 w-[90%] md:w-auto">
        <div className="relative w-full max-w-[700px]">
          <input
            onChange={handleSearch}
            type="text"
            placeholder="What are you craving for today?"
            className="bg-white w-full md:w-[700px] py-4 rounded-md text-gray-700 font-bold font-Inter pl-14 pr-4 md:px-20 shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#FF7A18] border border-gray-100 text-sm md:text-base"
          />
          <img
            src={Search}
            alt="search"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-[24px] md:w-[40px]"
          />
        </div>
      </div>
    </div>
  );
}
