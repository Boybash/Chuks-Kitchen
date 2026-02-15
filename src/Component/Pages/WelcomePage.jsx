import React from "react";
import Button from "../UI/button";
import { useEffect } from "react";
import { Link } from "react-router";
import welcomeimage1 from "../../assets/welcomeimage1.png";
import welcomeimage2 from "../../assets/welcomeimage2.png";
import welcomeimage3 from "../../assets/welcomeimage5.png";

export default function WelcomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      {/* Left Side: Image */}
      <div className="bg-[url('/src/assets/loginimage.png')] bg-cover bg-center w-[710px] h-screen relative hidden lg:block"></div>

      {/* Right Side: Form Container */}
      <div className="bg-[#F3F4F6] flex-1 h-screen flex flex-col p-8">
        <div className="flex justify-between items-center w-full mb-6 px-4 lg:px-25">
          <h1 className="text-[#FF7A18] font-IslandMoments text-[40px] font-bold">
            Chuks Kitchen
          </h1>
          <Link to="/login">
            <Button className="bg-white text-[#1E88E5] border border-[#1E88E5] w-[160px] h-[45px] hover:bg-blue-50 transition-colors">
              Sign In
            </Button>
          </Link>
        </div>

        <div className="flex-1 flex flex-col justify-center  w-[577px] mx-auto text-center gap-6 font-Inter">
          <h1 className="text-[32px] font-bold text-left">
            Your Authentic Taste of Nigeria
          </h1>
          <p className="text-left text-[16px] text-gray-700">
            Experience homemade flavors delivered fresh to your desk or home. We
            bring the rich culinary heritage of Nigeria right to your doorstep.
          </p>

          <div className="flex gap-25 mt-5">
            <div className="flex items-center gap-2">
              <img
                src={welcomeimage1}
                alt="Welcome Image 1"
                className="w-10 h-auto  rounded-md"
              />
              <span className="text-center text-[16px]">Freshly Prepared</span>
            </div>

            <div className="flex items-center gap-2">
              <img
                src={welcomeimage2}
                alt="Welcome Image 2"
                className="w-10 h-auto  rounded-md"
              />
              <span className="text-center text-[16px]">
                Support Local Business
              </span>
            </div>
          </div>

          <div className="mb-5">
            <div className="flex items-center gap-2 ">
              <img
                src={welcomeimage3}
                alt="Welcome Image 3"
                className="w-10 h-auto rounded-md"
              />
              <span className="text-center text-[16px]">
                Fast & Reliable Delivery
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <Link to="/">
              <Button className="w-[577px] h-[54px] bg-[#FF7A18] text-white font-bold rounded-md hover:bg-[#e66a15] transition duration-300">
                Start Your Order
              </Button>
            </Link>
            <Button className="bg-white text-[#1E88E5] border border-[#1E88E5] w-[577px] h-[45px] hover:bg-blue-50 transition-colors">
              Learn More About Us
            </Button>
          </div>

          <div>
            <p className="mt-10">
              © 2024 Chuks Kitchen.{" "}
              <span className="text-[#64B5F6]">
                Privacy Policy Terms of Service
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
