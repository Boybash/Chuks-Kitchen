import React from "react";
import CheckIcon from "../../assets/Check icon.png";
import Button from "../UI/button";

export default function OrderCompletionPage() {
  return (
    <div className="w-full min-h-screen bg-[#F3F4F6] font-Inter py-10">
      <div className="max-w-2xl mx-auto bg-white py-10 px-8 md:px-12 rounded-2xl shadow-sm border border-gray-100 text-center">
        <img
          src={CheckIcon}
          alt="Order Completed"
          className="mx-auto mb-6 w-16 h-16"
        />
        <h1 className="text-[16px] font-medium text-gray-800 mb-2">
          Order Placed Succesfully
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Your delicious Chuks Kitchen meal is on its way!
        </p>

        <div className=" mt-30">
          <h2 className="text-[24px] font-semibold text-gray-800 mb-2">
            Order #123RGR231567Y Confirmed
          </h2>

          <Button className="bg-[#FF7A18] text-white py-3 px-6 rounded-md font-bold hover:bg-[#e66a15] w-[407px]">
            Track Your Order
          </Button>

          <p className="text-gray-600 text-sm mt-4">Generate Receipt</p>
          <p className="text-[#1E88E5] text-sm mt-4">
            Need help with your order?
          </p>
        </div>
      </div>
    </div>
  );
}
