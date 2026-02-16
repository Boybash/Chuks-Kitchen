import React from "react";
import Button from "../UI/button";
import product from "../Data/product";
import ProductCard from "../UI/productcard";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useCart } from "../Context/Context";

export default function ProductDisplay() {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const handleProductClick = (id) => {
    navigate(`/singleproduct/${id}`);
    console.log("Product clicked:", item);
  };

  return (
    <div className="w-full bg-[#F3F4F6] flex flex-col justify-center items-center gap-[50px] py-20 font-Inter">
      <h1 className="text-[32px] font-bold font-Inter">Chef's Specials</h1>
      {/* <div className="text-4xl">{count}</div> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[50px] justify-items-center mx-auto max-w-7xl w-full my-10 px-4 z-30">
        {product.map((item) => (
          <ProductCard
            key={item.id}
            className="w-full max-w-[390px] shadow-md  rounded-md"
          >
            <img
              src={item.image}
              alt={item.name}
              onClick={() => handleProductClick(item.id)}
              className="w-full h-[250px] object-cover object-fit-cover rounded-t-md cursor-pointer"
            />
            <div className="p-4 flex flex-col justify-center min-h-[150px] text-left">
              <h2 className="text-[24px] font-semibold text-black text-left font-Inter">
                {item.name}
              </h2>
              <h2 className="text-[16px] font-">{item.description}</h2>
            </div>
            <div className="flex justify-center items-center gap-40 mb-[46px]">
              <p className="text-[#FF7A18] text-[16px] font-Inter font-bold">
                {item.price}
              </p>
              <Button
                onClick={() => {
                  addToCart(item);
                  handleAddToCart(item);
                }}
                className="bg-[#FF7A18] text-white px-4 py-2 rounded-md"
              >
                Add to Cart
              </Button>
            </div>
          </ProductCard>
        ))}
      </div>
    </div>
  );
}
