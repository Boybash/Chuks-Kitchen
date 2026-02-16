import React from "react";
import Button from "../UI/button";
import { Link } from "react-router";
import { useLocation } from "react-router";
import { useEffect } from "react";

export default function DeliveryDetailsPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="w-full min-h-screen bg-[#F3F4F6] font-Inter py-10">
      <div className="max-w-3xl mx-auto px-6 bg-white py-10 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-[32px] font-bold mb-2 text-gray-800">
          Delivery Details
        </h1>
        <hr className="my-4 border-gray-200" />
        <form className="space-y-6">
          <div>
            <textarea
              placeholder="Your Delivery Details"
              className="w-full h-28 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF7A18] resize-none"
            />
          </div>
          <div>
            <label className="block  mb-2 font-semibold text-[20px]">
              Delivery Time
            </label>
            <input
              type="text"
              placeholder="Enter Delivery Time"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF7A18]"
            />
          </div>
          <div>
            <label className="block  mb-2 font-semibold text-[20px]">
              Delivery Instruction (Optional)
            </label>
            <textarea
              placeholder="Enter Any Specific Instructions for Delivery"
              className="w-full h-20 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF7A18] resize-none"
            />
          </div>
          <div>
            <label className="block  mb-2 font-semibold text-[20px]">
              Contact Address
            </label>
            <input
              type="text"
              placeholder="Enter Your Contact Address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF7A18]"
            />
          </div>
          <Link to="/payment">
            <Button className="w-full bg-[#FF7A18] text-white py-3 rounded-md font-bold hover:bg-[#e66a15]">
              Continue to Payment
            </Button>
          </Link>
        </form>
      </div>
    </div>
  );
}
