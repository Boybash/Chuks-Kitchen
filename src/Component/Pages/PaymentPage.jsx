import React, { useState, useEffect } from "react";
import { useCart } from "../Context/Context";
import Button from "../UI/button";
import Loading from "../../assets/Loading.png";
import { useLocation, useNavigate } from "react-router";

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
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
          <img src={Loading} alt="Loading" className="w-16 h-16 animate-spin" />
          <p className="text-center text-gray-600 mt-6 text-lg font-medium">
            Processing your payment, please wait...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#F3F4F6] font-Inter py-6 md:py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white py-8 md:py-10 px-4 sm:px-8 md:px-12 rounded-2xl shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-2xl md:text-[32px] font-bold text-gray-800">
            Payment
          </h1>
        </div>
        <hr className="my-4 border-gray-200" />

        <p className="text-gray-600 text-base md:text-lg mb-4 font-medium">
          Pay With:
        </p>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8">
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
                name="paymentMethod"
                checked={paymentMethod === method}
                onChange={() => setPaymentMethod(method)}
                className="w-4 h-4 accent-[#FF7A18]"
              />
            </label>
          ))}
        </div>

        <div className="space-y-6">
          {paymentMethod === "card" && (
            <div className="space-y-4 animate-in fade-in duration-300">
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

              <div className="flex flex-col sm:flex-row gap-4">
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

              <div className="flex gap-3 items-center pt-2">
                <input
                  type="checkbox"
                  id="save-card"
                  className="w-5 h-5 accent-[#FF7A18] cursor-pointer"
                />
                <label
                  htmlFor="save-card"
                  className="text-sm md:text-base text-gray-700 cursor-pointer"
                >
                  Save card details for future orders
                </label>
              </div>
            </div>
          )}

          {paymentMethod !== "card" && (
            <div className="p-6 bg-gray-50 rounded-lg border border-dashed border-gray-300 text-center">
              <p className="text-gray-600">
                Instruction for {paymentMethod} payment will be shown on the
                next step.
              </p>
            </div>
          )}

          <Button
            onClick={handlePayment}
            className="mt-6 bg-[#FF7A18] text-white w-full py-4 rounded-xl font-extrabold text-lg hover:bg-[#e66a15] transition-all shadow-lg shadow-orange-100 flex justify-center items-center gap-2 active:scale-[0.98]"
          >
            Pay ₦{grandTotal.toLocaleString()}
          </Button>

          <p className="text-[11px] md:text-xs text-gray-400 text-center leading-relaxed px-2">
            Your personal data will be used to process your order and support
            your experience. See our{" "}
            <span className="underline cursor-pointer">privacy policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
