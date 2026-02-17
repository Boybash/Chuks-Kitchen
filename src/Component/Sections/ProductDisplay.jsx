import React, { useState, useContext } from "react";
import Button from "../UI/button";
import product from "../Data/product";
import ProductCard from "../UI/productcard";
import { useNavigate } from "react-router";
import { useCart } from "../Context/Context";
import { SearchContext } from "../Context/SearchContext";

export default function ProductDisplay() {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { searchTerm } = useContext(SearchContext);

  const filteredProducts = product.filter((item) => {
    const productData = `${item.name} ${item.description}`.toLowerCase();
    return productData.includes(searchTerm.toLowerCase());
  });

  const handleProductClick = (id) => {
    navigate(`/singleproduct/${id}`);
  };

  return (
    <div className="w-full bg-[#F3F4F6] flex flex-col justify-center items-center gap-[50px] py-20 font-Inter">
      <h1 className="text-[32px] font-bold">Chef's Specials</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[50px] justify-items-center mx-auto max-w-7xl w-full my-10 px-4 z-30">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <ProductCard
              key={item.id}
              className="w-full max-w-[390px] shadow-md rounded-md bg-white overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.name}
                onClick={() => handleProductClick(item.id)}
                className="w-full h-[250px] object-cover rounded-t-md cursor-pointer hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4 flex flex-col justify-center min-h-[120px] text-left">
                <h2 className="text-[24px] font-semibold text-black font-Inter">
                  {item.name}
                </h2>
                <p className="text-[16px] text-gray-600 line-clamp-2">
                  {item.description}
                </p>
              </div>

              <div className="flex justify-between items-center px-4 pb-6 mt-auto">
                <p className="text-[#FF7A18] text-[18px] font-bold font-Inter">
                  {item.price}
                </p>
                <Button
                  onClick={() => addToCart(item)}
                  className="bg-[#FF7A18] text-white px-4 py-2 rounded-md font-bold"
                >
                  Add to Cart
                </Button>
              </div>
            </ProductCard>
          ))
        ) : (
          <div className="col-span-full py-10 text-center">
            <p className="text-xl text-gray-500">
              No meals found matching "{searchTerm}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
