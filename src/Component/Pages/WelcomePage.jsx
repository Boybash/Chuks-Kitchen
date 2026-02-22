import React from "react";
import Button from "../UI/button";
import { useEffect } from "react";
import { Link, useLocation } from "react-router";
import welcomeimage1 from "../../assets/welcomeimage1.png";
import welcomeimage2 from "../../assets/welcomeimage2.png";
import welcomeimage3 from "../../assets/welcomeimage5.png";

export default function WelcomePage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="w-full min-h-screen flex justify-center items-center font-Inter bg-[#F3F4F6]">
      <div className="bg-[url('/src/assets/loginimage.png')] bg-cover bg-center w-[50%] h-screen relative hidden lg:block"></div>

      <div className="flex-1 min-h-screen flex flex-col p-4 sm:p-8 md:p-12">
        <div className="flex justify-between items-center w-full mb-12 max-w-2xl mx-auto">
          <h1 className="text-[#FF7A18] font-IslandMoments text-[32px] sm:text-[40px] font-bold">
            Chuks Kitchen
          </h1>
          <Link to="/login">
            <Button className="bg-white text-[#1E88E5] border border-[#1E88E5] w-[100px] sm:w-[160px] h-[40px] sm:h-[45px] hover:bg-blue-50 transition-colors text-sm sm:text-base">
              Sign In
            </Button>
          </Link>
        </div>

        <div className="flex-1 flex flex-col justify-center w-full max-w-[577px] mx-auto gap-6 sm:gap-8">
          <div className="space-y-4">
            <h1 className="text-[28px] sm:text-[32px] font-bold text-gray-900 leading-tight">
              Your Authentic Taste of Nigeria
            </h1>
            <p className="text-[15px] sm:text-[16px] text-gray-700 leading-relaxed">
              Experience homemade flavors delivered fresh to your desk or home.
              We bring the rich culinary heritage of Nigeria right to your
              doorstep.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-2">
            <div className="flex items-center gap-3">
              <img
                src={welcomeimage1}
                alt="Freshly Prepared"
                className="w-10 h-10 object-contain rounded-md"
              />
              <span className="text-sm sm:text-[16px] font-medium text-gray-800">
                Freshly Prepared
              </span>
            </div>

            <div className="flex items-center gap-3">
              <img
                src={welcomeimage2}
                alt="Support Local"
                className="w-10 h-10 object-contain rounded-md"
              />
              <span className="text-sm sm:text-[16px] font-medium text-gray-800">
                Support Local
              </span>
            </div>

            <div className="flex items-center gap-3">
              <img
                src={welcomeimage3}
                alt="Fast Delivery"
                className="w-10 h-10 object-contain rounded-md"
              />
              <span className="text-sm sm:text-[16px] font-medium text-gray-800">
                Fast & Reliable Delivery
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            <Link to="/">
              <Button className="w-full h-[54px] bg-[#FF7A18] text-white font-bold rounded-md hover:bg-[#e66a15] transition duration-300 shadow-md">
                Start Your Order
              </Button>
            </Link>
            <Button className="bg-white text-[#1E88E5] border border-[#1E88E5] w-full h-[54px] font-bold rounded-md hover:bg-blue-50 transition-colors">
              Learn More About Us
            </Button>
          </div>

          <div className="mt-8 sm:mt-12 border-t border-gray-200 pt-6 flex flex-col justify-between items-center">
            <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
              © 2024 Chuks Kitchen.{" "}
              <span className="text-[#1E88E5] cursor-pointer hover:underline block sm:inline mt-1 sm:mt-0">
                Privacy Policy & Terms of Service
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
