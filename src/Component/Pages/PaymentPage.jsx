import React, { useState } from "react";
import { useCart } from "../Context/Context"; // Ensure path is correct
import Button from "../UI/button";
import Loading from "../../assets/Loading.png";
import { Link } from "react-router";
import { useLocation } from "react-router";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function PaymentPage() {
  const { cart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isProcessing, setIsProcessing] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  function handlePayment() {
    setIsProcessing(true);
    setTimeout(() => {
      navigate("/ordercomplete");
    }, 5000);
  }

  const subtotal = cart.reduce((acc, item) => {
    const numericPrice = parseFloat(item.price.replace(/[^\d.]/g, ""));
    return acc + (numericPrice || 0) * (item.quantity || 1);
  }, 0);

  const deliveryFee = subtotal > 0 ? 500 : 0;
  const serviceFee = subtotal > 0 ? 200 : 0;
  const tax = subtotal * 0.05;
  const grandTotal = subtotal + deliveryFee + serviceFee + tax;

  if (isProcessing) {
    return (
      <div className="w-full h-screen bg-[#F3F4F6] font-Inter py-10 px-4 flex flex-col justify-center items-center">
        <div className="w-full max-w-2xl mx-auto mt-10">
          <img
            src={Loading}
            alt="Loading"
            className="w-16 h-16 mx-auto mt-10 animate-spin"
          />
          <p className="text-center text-gray-600 mt-4 text-lg">
            Processing your payment, please wait...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#F3F4F6] font-Inter py-10 px-4">
      <div
        className={`${isProcessing ? "hidden" : ""} max-w-2xl mx-auto bg-white py-10 px-8 md:px-12 rounded-2xl shadow-sm border border-gray-100`}
      >
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-[32px] font-bold text-gray-800">Payment</h1>
        </div>
        <hr className="my-4 border-gray-200" />
        <p className="text-gray-600 text-lg mb-4 font-medium">Pay With:</p>
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {["card", "bank", "transfer"].map((method) => (
            <label
              key={method}
              className={`flex-1 flex items-center justify-between p-4 border rounded-xl cursor-pointer transition-all ${
                paymentMethod === method
                  ? "border-[#FF7A18] bg-orange-50 ring-1 ring-[#FF7A18]"
                  : "border-gray-200 hover:bg-gray-50"
              }`}
            >
              <span className="capitalize font-semibold text-gray-700">
                {method}
              </span>
              <input
                type="radio"
                checked={paymentMethod === method}
                onChange={() => setPaymentMethod(method)}
                className="w-4 h-4 accent-[#FF7A18]"
              />
            </label>
          ))}
        </div>

        <div className="space-y-6">
          {paymentMethod === "card" && (
            <>
              <div>
                <label className="block mb-2 font-semibold text-gray-700">
                  Card Number
                </label>
                <input
                  type="text"
                  placeholder="0000 0000 0000 0000"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7A18]"
                />
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block mb-2 font-semibold text-gray-700">
                    Expiration
                  </label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7A18]"
                  />
                </div>
                <div className="flex-1">
                  <label className="block mb-2 font-semibold text-gray-700">
                    CVV
                  </label>
                  <input
                    type="password"
                    placeholder="123"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7A18]"
                  />
                </div>
              </div>

              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  id="save card"
                  className="w-[16px] h-[16px]"
                />
                <label
                  htmlFor="save card"
                  className="block text-center  text-gray-700"
                >
                  Save card details
                </label>
              </div>
            </>
          )}

          {/* THE BUTTON: Now includes the grand total */}
          <Button
            onClick={handlePayment}
            className="mt-4 bg-[#FF7A18] text-white w-full py-4 rounded-xl font-extrabold text-lg hover:bg-[#e66a15] transition-all shadow-lg shadow-orange-100 flex justify-center items-center gap-2"
          >
            Pay ₦{grandTotal.toLocaleString()}
          </Button>

          <p className="text-xs text-gray-400 text-center leading-relaxed px-4">
            Your personal data will be used to process your order and support
            your experience. See our privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
}
