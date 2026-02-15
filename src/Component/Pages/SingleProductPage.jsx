import React from "react";
import Button from "../UI/button";
import product from "../Data/product";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useLocation } from "react-router";

export default function SingleProductPage() {
  const { productid } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const productDetails = product.find(
    (item) => item.id === parseInt(productid),
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  if (!productDetails) {
    return (
      <div className="h-screen flex flex-col justify-center items-center gap-4">
        <h1 className="text-4xl font-bold">Product not found!</h1>
        <Button
          onClick={() => navigate("/")}
          className="bg-[#FF7A18] text-white"
        >
          Back to Home
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#F3F4F6] flex flex-col justify-center items-center gap-[50px] py-20 font-Inter">
      <h1 className="text-[32px] font-bold font-Inter">
        {productDetails.name}
      </h1>
      <img
        src={productDetails.image}
        alt={productDetails.name}
        className="w-full max-w-[500px] h-auto object-cover rounded-md"
      />
      <p className="text-[18px] text-center max-w-2xl">
        {productDetails.description}
      </p>
      <p className="text-[#FF7A18] text-[24px] font-bold">
        {productDetails.price}
      </p>
      <Button onClick={() => navigate("/")} className="bg-[#FF7A18] text-white">
        Back to Home
      </Button>
    </div>
  );
}
