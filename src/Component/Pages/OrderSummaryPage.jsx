import React, { useEffect } from "react";
import { useCart } from "../Context/Context";
import { useLocation } from "react-router";
import Button from "../UI/button";
import { Link } from "react-router";

export default function OrderSummaryPage() {
  const { cart } = useCart();
  const location = useLocation();

  const subtotal = cart.reduce((acc, item) => {
    const numericPrice = parseFloat(item.price.replace(/[^\d.]/g, ""));
    return acc + (numericPrice || 0) * (item.quantity || 1);
  }, 0);

  const deliveryFee = subtotal > 0 ? 500 : 0;
  const serviceFee = subtotal > 0 ? 200 : 0;
  const tax = subtotal * 0.05;
  const grandTotal = subtotal + deliveryFee + serviceFee + tax;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="w-full min-h-screen bg-[#F3F4F6] font-Inter py-6 md:py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white py-8 md:py-10 px-4 md:px-12 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-2xl md:text-[32px] font-bold mb-2 text-gray-800">
          Order Summary
        </h1>
        <hr className="my-4 border-gray-200" />

        <div className="mb-8">
          <p className="mb-2 text-lg md:text-[24px] font-medium">
            Add a Promo Code
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="text"
              placeholder="Enter Code Here"
              className="w-full flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF7A18]"
            />
            <Button className="w-full sm:w-auto bg-[#FF7A18] text-white px-8 py-3 rounded-md hover:bg-[#e66a15]">
              Apply
            </Button>
          </div>
        </div>

        <div className="space-y-4 text-gray-700">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p className="font-semibold">₦{subtotal.toLocaleString()}</p>
          </div>
          <div className="flex justify-between text-sm">
            <p>Delivery Fee</p>
            <p className="font-semibold">₦{deliveryFee.toLocaleString()}</p>
          </div>
          <div className="flex justify-between text-sm">
            <p>Service Fee</p>
            <p className="font-semibold">₦{serviceFee.toLocaleString()}</p>
          </div>
          <div className="flex justify-between text-sm">
            <p>Tax (5%)</p>
            <p className="font-semibold">₦{tax.toLocaleString()}</p>
          </div>

          <hr className="my-4 border-gray-200" />

          <div className="flex justify-between items-center text-xl md:text-2xl font-bold text-gray-900">
            <h1>Total</h1>
            <p className="text-[#FF7A18]">₦{grandTotal.toLocaleString()}</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Button className="flex-1 bg-[#FF7A18] text-white py-3 rounded-md font-bold shadow-md shadow-orange-100">
            Delivery
          </Button>
          <Button className="bg-[#BDBDBD] flex-1 text-white py-3 rounded-md font-bold">
            Pick up
          </Button>
        </div>

        <div className="mt-8">
          <h2 className="font-bold text-gray-800 mb-2">
            Special Instructions For Restaurant
          </h2>
          <textarea
            placeholder="Any special instructions for your order?"
            className="w-full h-28 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF7A18] resize-none"
          />
        </div>

        <Link to="/deliverydetails" className="block mt-10">
          <Button className="bg-[#FF7A18] text-white w-full py-4 rounded-xl font-extrabold text-lg hover:bg-[#e66a15] transition-all transform hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-orange-200">
            Proceed to Checkout
          </Button>
        </Link>
      </div>
    </div>
  );
}
