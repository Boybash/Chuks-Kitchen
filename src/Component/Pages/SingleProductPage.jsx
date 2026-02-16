import React from "react";
import Button from "../UI/button";
import product from "../Data/product";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useLocation } from "react-router";
import Timer from "../../assets/timer.png";

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
    <div className="w-full h-screen flex justify-center items-center font-Inter">
      <div
        className="bg-cover bg-center w-[710px] h-screen relative hidden lg:block"
        style={{ backgroundImage: `url(${productDetails.image})` }}
      ></div>
      <div className="bg-[#F3F4F6] flex-1 h-screen flex flex-col p-8 overflow-y-auto">
        <div className="flex flex-col">
          <h1 className="text-[32px] font-bold">{productDetails.name}</h1>
          <p className="text-[#FF7A18] text-[16px] font-Inter font-bold my-2">
            {productDetails.price}
          </p>
          <p
            className="
          text-[16px]"
          >
            {productDetails.description} A classic Nigerian comfort food, rich
            in flavor and satisfying. Perfect for a quick lunch or a hearty
            dinner.
          </p>
        </div>

        <div className="flex gap-2 my-5">
          <div className="flex items-center gap-1">
            <img
              src={Timer}
              alt="Timer Icon"
              className="w-5 h-5 inline-block mr-1"
            />
            <p className="text-center">Mildly spicy</p>
          </div>
          <div className="flex items-center gap-1">
            <img
              src={Timer}
              alt="Timer Icon"
              className="w-5 h-5 inline-block mr-1"
            />
            <p className="text-center">Vegetarian option available</p>
          </div>
          <div className="flex items-center gap-1">
            <img
              src={Timer}
              alt="Timer Icon"
              className="w-5 h-5 inline-block mr-1"
            />
            <p className="text-center">View Allergies</p>
          </div>
        </div>
        <div>
          <h1 className="text-[24px] font-semibold">Choose your Protein</h1>
          <div className="flex flex-col gap-4 mt-2">
            <div className="relative">
              <Button className="bg-white w-[649px] h-[50px] border border-[#BDBDBD] px-12 py-1 text-left rounded-md">
                Fried Chicken
              </Button>
              <span className="absolute top-3 right-30">(Default)</span>
              <span className="border-4 border-[#FF7A18] rounded-full bg-white p-2.5  absolute top-3 left-2"></span>
            </div>
            <div className="relative">
              <Button className="bg-white w-[649px] h-[50px] border border-[#BDBDBD] px-12 py-1 text-left rounded-md">
                Grilled Fish
              </Button>
              <span className="absolute top-3 right-30">+#500</span>
              <span className="border-4 border-[#FF7A18] rounded-full bg-white p-2.5  absolute top-3 left-2"></span>
            </div>
            <div className="relative">
              <Button className="bg-white w-[649px] h-[50px] border border-[#BDBDBD] px-12 py-1 text-left rounded-md">
                Beef
              </Button>
              <span className="absolute top-3 right-30">+#700</span>
              <span className="border-4 border-[#FF7A18] rounded-full bg-white p-2.5  absolute top-3 left-2"></span>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h1 className="text-[24px] font-semibold">Extra Sides (Optional)</h1>
          <div className="flex flex-col gap-4 mt-2">
            <div className="relative">
              <Button className="bg-white w-[649px] h-[50px] border border-[#BDBDBD] px-12 py-1 text-left rounded-md">
                Fried Plantain
              </Button>
              <span className="absolute top-3 right-30">+#700</span>
              <span className="border-4 border-[#FF7A18] rounded-full bg-white p-2.5  absolute top-3 left-2"></span>
            </div>
            <div className="relative">
              <Button className="bg-white w-[649px] h-[50px] border border-[#BDBDBD] px-12 py-1 text-left rounded-md">
                Coleslaw
              </Button>
              <span className="absolute top-3 right-30">+#500</span>
              <span className="border-4 border-[#FF7A18] rounded-full bg-white p-2.5  absolute top-3 left-2"></span>
            </div>
            <div className="relative">
              <Button className="bg-white w-[649px] h-[50px] border border-[#BDBDBD] px-12 py-1 text-left rounded-md">
                Extra Pepper Sauce
              </Button>
              <span className="absolute top-3 right-30">+#300</span>
              <span className="border-4 border-[#FF7A18] rounded-full bg-white p-2.5  absolute top-3 left-2"></span>
            </div>
          </div>
        </div>

        <div>
          <h1 className="my-3 font-bold text-[24px]">Special Instruction</h1>
          <input
            type="text"
            placeholder="Any special instructions for your order?"
            className="w-[649px] h-[112px] px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF7A18] mt-2"
          />
        </div>
      </div>
    </div>
  );
}
