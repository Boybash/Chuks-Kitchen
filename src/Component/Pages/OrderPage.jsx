import { useCart } from "../Context/Context";
import { useEffect } from "react";
import Button from "../UI/button";
import { Link } from "react-router";

export default function OrderPage() {
  const { cart, removeFromCart } = useCart();

  const totalPrice = cart.reduce((acc, item) => {
    const numericPrice = parseFloat(item.price.replace(/[^\d.]/g, ""));
    return acc + (numericPrice || 0) * (item.quantity || 1);
  }, 0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="w-full min-h-screen bg-[#F3F4F6] font-Inter py-10">
      <div className="max-w-5xl mx-auto px-4">
        {cart.length === 0 ? (
          <div className="bg-white p-10 rounded-xl shadow text-center">
            <p className="text-gray-500 text-lg">Your cart is empty.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {/* CART ITEMS LIST */}
            <div className="space-y-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h1 className="text-[32px] font-bold mb-2 text-gray-800">
                Your Cart
              </h1>
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center bg-white p-6 shadow-sm rounded-xl w-full hover:shadow-md transition-shadow border border-gray-100"
                >
                  <div className="flex items-center gap-6">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 rounded-lg object-cover bg-gray-100"
                    />
                    <h3 className="text-xl font-bold text-gray-800">
                      {item.name}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between gap-10">
                    <button className="bg-[#BDBDBD] py-2 px-3 rounded-md text-sm">
                      +
                    </button>

                    <p className="text-[30px]">{item.quantity}</p>

                    <button className="bg-[#BDBDBD] py-2 px-3 rounded-md text-sm">
                      -
                    </button>
                  </div>

                  <div className="flex justify-between items-center gap-10">
                    <p className="font-bold text-[#FF7A18] text-xl">
                      {item.price}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-white text-sm font-medium hover:underline cursor-pointer py-1 px-2 bg-[#FF7A18] transition-colors"
                    >
                      x
                    </button>
                  </div>
                </div>
              ))}
              <Link
                to="/"
                className="text-16px text-[#1E88E5] cursor-pointer font-medium hover:underline"
              >
                + Add more items from Chuks Kitchen{" "}
              </Link>
            </div>

            {/* SUMMARY SECTION */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-end">
              <div className="flex justify-between w-full max-w-xs mb-4">
                <span className="text-gray-500">Subtotal: </span>
                <span className="font-bold text-gray-800">
                  ₦{" "}
                  {totalPrice.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                  })}
                </span>
              </div>
              <div className="border-t border-gray-100 w-full max-w-xs pt-4 flex justify-between">
                <span className="text-xl font-bold">Total:</span>
                <span className="text-2xl font-extrabold text-[#FF7A18]">
                  ₦ {totalPrice.toLocaleString()}
                </span>
              </div>

              <Link
                to="/ordersummary"
                className="cursor-pointer mt-8 bg-[#FF7A18] text-white px-10 py-4 rounded-lg font-bold hover:bg-[#e66a15] transition-colors w-full md:w-auto"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
