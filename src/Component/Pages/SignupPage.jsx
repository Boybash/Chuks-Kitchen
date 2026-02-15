import React from "react";
import Button from "../UI/button";
import Google from "../../assets/google.png";
import Facebook from "../../assets/Facebook.png";
import mailicon from "../../assets/mailicon.svg";
import lockicon from "../../assets/lockicon.svg";
import eyeicons from "../../assets/eyeicons.png";
import Phoneicon from "../../assets/phoneicon.png";
import { useEffect } from "react";
import { Link } from "react-router";

export default function SignupPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center overflow-hidden">
        {/* LEFT SIDE: BANNER */}
        <div className="bg-[linear-gradient(to_bottom,rgba(255,122,24,0.7),rgba(255,122,24,0.7)),url('/src/assets/loginimage.png')] bg-cover bg-center w-[710px] h-screen relative hidden lg:block">
          <div className="font-Inter flex flex-col justify-center items-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full px-10">
            <h1 className="text-[48px] font-bold text-white text-center">
              Chuks Kitchen
            </h1>
            <p className="w-[404px] text-center text-white text-[16px]">
              Your journey to delicious, authentic Nigerian meals starts here.
              Sign up or log in to order your favorites today!
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: FORM */}
        <div className="bg-[#F3F4F6] flex-1 h-screen flex flex-col justify-center items-center p-8 overflow-y-auto">
          <div className="flex flex-col justify-center items-center pt-25 text-center">
            <h1 className="text-[#FF7A18] font-IslandMoments text-[40px] font-bold leading-none">
              Chuks Kitchen
            </h1>
            <h2 className="font-Inter text-[24px] font-bold">
              Create Your Account
            </h2>
          </div>

          <form className="font-Inter w-full max-w-[450px]">
            <div className="mb-4 relative">
              <label
                htmlFor="email"
                className="block text-gray-700 mb-1 text-[14px] font-medium"
              >
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  placeholder="name@gmail.com"
                  className="w-full h-[54px] pl-12 pr-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF7A18]"
                />
                <img
                  src={mailicon}
                  alt=""
                  className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 opacity-60"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="mb-4 relative">
              <label
                htmlFor="phone"
                className="block text-gray-700 mb-1 text-[14px] font-medium"
              >
                Phone Number
              </label>
              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  placeholder="+234..."
                  className="w-full h-[54px] pl-12 pr-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF7A18]"
                />
                <img
                  src={Phoneicon}
                  alt=""
                  className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 opacity-60"
                />
              </div>
            </div>

            {/* Password */}
            <div className="mb-4 relative">
              <label
                htmlFor="password"
                className="block text-gray-700 mb-1 text-[14px] font-medium"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  placeholder="*******"
                  className="w-full h-[54px] pl-12 pr-12 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF7A18]"
                />
                <img
                  src={lockicon}
                  alt=""
                  className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 opacity-60"
                />
                <img
                  src={eyeicons}
                  alt="Toggle Visibility"
                  className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div className="mb-4 relative">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 mb-1 text-[14px] font-medium"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="*******"
                  className="w-full h-[54px] pl-12 pr-12 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF7A18]"
                />
                <img
                  src={lockicon}
                  alt=""
                  className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 opacity-60"
                />
                <img
                  src={eyeicons}
                  alt="Toggle Visibility"
                  className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                />
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-2 mb-6">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 accent-[#FF7A18]"
              />
              <label htmlFor="terms" className="text-[14px] text-gray-600">
                I agree to the{" "}
                <span className="text-[#1E88E5] cursor-pointer">
                  Terms & Conditions
                </span>{" "}
                and{" "}
                <span className="text-[#1E88E5] cursor-pointer">
                  Privacy Policy
                </span>
              </label>
            </div>
            <Link to="/welcome">
              <Button
                type="submit"
                className="w-full h-[54px] bg-[#FF7A18] text-white font-bold rounded-md hover:bg-[#e66a15] transition duration-300"
              >
                Continue
              </Button>
            </Link>

            <p className="text-center my-4 text-gray-400 text-sm">
              or continue with
            </p>

            <div className="flex flex-col gap-3">
              <div className="relative">
                <Button className="w-full h-[54px] bg-white text-black border border-black hover:bg-gray-50 flex justify-center items-center">
                  Continue with Google
                </Button>
                <img
                  src={Google}
                  alt=""
                  className="w-5 h-5 absolute left-25 top-1/2 -translate-y-1/2"
                />
              </div>

              <div className="relative">
                <Button className="w-full h-[54px] bg-white text-black border border-black hover:bg-gray-50 flex justify-center items-center">
                  Continue with Facebook
                </Button>
                <img
                  src={Facebook}
                  alt=""
                  className="w-10 h-10 absolute left-22 top-1/2 -translate-y-1/2"
                />
              </div>
            </div>

            <p className="text-center mt-6 text-sm">
              Already have an account?{" "}
              <span className="text-blue-500 font-bold cursor-pointer hover:underline">
                <Link to="/login">Sign in</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
