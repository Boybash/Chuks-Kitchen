import React from "react";
import popular from "../Data/popular";
import ProductCard from "../UI/productcard";

export default function Popular() {
  return (
    <div className="w-full bg-[#F3F4F6] flex flex-col justify-center items-center gap-[50px] py-20">
      <h1 className="text-[32px] font-bold font-Inter">Popular Cartegories</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[50px] justify-items-center mx-auto max-w-7xl w-full my-10 px-4 z-30">
        {popular.map((item) => (
          <ProductCard
            key={item.id}
            className="w-full max-w-[390px] shadow-md  rounded-md"
          >
            <img
              src={item.Image}
              alt={item.name}
              className="w-full h-[250px] object-cover object-fit-cover rounded-t-md"
            />
            <div className="p-4 flex flex-col items-center justify-center min-h-[150px]">
              <h2 className="text-[24px] font-semibold text-black text-center font-Inter">
                {item.name}
              </h2>
            </div>
          </ProductCard>
        ))}
      </div>
    </div>
  );
}
