import React from "react";
import Button from "../UI/button";
import product from "../Data/product";
import { useParams, useNavigate, useLocation } from "react-router";
import { useEffect } from "react";
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
      <div className="h-screen flex flex-col justify-center items-center gap-4 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">Product not found!</h1>
        <Button
          onClick={() => navigate("/")}
          className="bg-[#FF7A18] text-white px-6 py-2 rounded-md"
        >
          Back to Home
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row font-Inter bg-[#F3F4F6]">
      <div
        className="w-full lg:w-1/2 h-[300px] lg:h-screen bg-cover bg-center sticky top-0 z-20"
        style={{ backgroundImage: `url(${productDetails.image})` }}
      >
        <button
          onClick={() => navigate(-1)}
          className="lg:hidden m-4 bg-white/80 p-2 rounded-full shadow-md"
        >
          ← Back
        </button>
      </div>

      <div className="flex-1 min-h-screen flex flex-col p-4 sm:p-6 md:p-8 lg:p-12">
        <div className="flex flex-col">
          <h1 className="text-2xl md:text-[32px] font-bold text-gray-900 leading-tight">
            {productDetails.name}
          </h1>
          <p className="text-[#FF7A18] text-xl md:text-2xl font-bold my-2">
            {productDetails.price}
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            {productDetails.description} A classic Nigerian comfort food, rich
            in flavor and satisfying. Perfect for a quick lunch or a hearty
            dinner.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6 md:my-8">
          {["Mildly spicy", "Vegetarian option", "View Allergies"].map(
            (text, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-white p-2 rounded-lg border border-gray-200"
              >
                <img src={Timer} alt="Icon" className="w-4 h-4" />
                <p className="text-xs md:text-sm text-gray-700">{text}</p>
              </div>
            ),
          )}
        </div>

        <div className="mb-8">
          <h2 className="text-lg md:text-[24px] font-semibold mb-4">
            Choose your Protein
          </h2>
          <div className="flex flex-col gap-3">
            {[
              { label: "Fried Chicken", price: "(Default)" },
              { label: "Grilled Fish", price: "+₦500" },
              { label: "Beef", price: "+₦700" },
            ].map((item, idx) => (
              <div key={idx} className="relative group">
                <Button className="bg-white w-full min-h-[56px] border border-gray-300 px-12 py-3 text-left rounded-xl hover:border-[#FF7A18] transition-all">
                  <span className="text-sm md:text-base font-medium">
                    {item.label}
                  </span>
                </Button>
                <span className="absolute top-1/2 -translate-y-1/2 right-4 text-xs md:text-sm text-gray-500">
                  {item.price}
                </span>
                <span className="w-5 h-5 border-2 border-[#FF7A18] rounded-full bg-white absolute top-1/2 -translate-y-1/2 left-4 flex items-center justify-center">
                  {idx === 0 && (
                    <span className="w-2.5 h-2.5 bg-[#FF7A18] rounded-full"></span>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-lg md:text-[24px] font-semibold mb-4">
            Extra Sides (Optional)
          </h2>
          <div className="flex flex-col gap-3">
            {[
              { label: "Fried Plantain", price: "+₦700" },
              { label: "Coleslaw", price: "+₦500" },
              { label: "Extra Pepper Sauce", price: "+₦300" },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <Button className="bg-white w-full min-h-[56px] border border-gray-300 px-12 py-3 text-left rounded-xl">
                  <span className="text-sm md:text-base font-medium">
                    {item.label}
                  </span>
                </Button>
                <span className="absolute top-1/2 -translate-y-1/2 right-4 text-xs md:text-sm text-gray-500">
                  {item.price}
                </span>
                <span className="w-5 h-5 border-2 border-gray-300 rounded-md bg-white absolute top-1/2 -translate-y-1/2 left-4"></span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-lg md:text-[24px] font-bold mb-4">
            Special Instruction
          </h2>
          <textarea
            placeholder="Any special instructions for your order?"
            className="w-full min-h-[120px] px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF7A18] bg-white resize-none"
          />
        </div>

        <div className="mt-auto pt-6 border-t border-gray-200 lg:border-none">
          <Button className="w-full bg-[#FF7A18] text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-[#e66a15] transition-colors">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
