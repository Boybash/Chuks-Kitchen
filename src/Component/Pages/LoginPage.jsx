import React from "react";
import Button from "../UI/button";
import { Link, useLocation } from "react-router";
import Google from "../../assets/google.png";
import Facebook from "../../assets/Facebook.png";
import mailicon from "../../assets/mailicon.svg";
import lockicon from "../../assets/lockicon.svg";
import eyeicons from "../../assets/eyeicons.png";
import { useEffect } from "react";

export default function LoginPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-[#F3F4F6]">
      <div className="bg-[linear-gradient(to_bottom,rgba(255,122,24,0.7),rgba(255,122,24,0.7)),url('/src/assets/loginimage.png')] bg-cover bg-center w-[50%] h-screen relative hidden lg:block">
        <div className="font-Inter flex flex-col justify-center items-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full px-10">
          <h1 className="text-[48px] font-bold text-white text-center">
            Chuks Kitchen
          </h1>
          <p className="max-w-[404px] text-center text-white text-[16px]">
            Your journey to delicious, authentic Nigerian meals starts here.
            Sign up or log in to order your favorites today!
          </p>
        </div>
      </div>

      <div className="flex-1 min-h-screen flex flex-col justify-center items-center p-4 sm:p-8">
        <div className="flex flex-col justify-center items-center mb-6">
          <h1 className="text-[#FF7A18] font-IslandMoments text-[40px] font-bold">
            Chuks Kitchen
          </h1>
          <h2 className="font-Inter text-[20px] sm:text-[24px] font-bold">
            Login Your Account
          </h2>
        </div>

        <form className="font-Inter w-full max-w-[450px]">
          <div className="mb-4 relative">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email or Phone Number
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
                alt="Mail Icon"
                className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 mb-2">
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
                alt="Lock Icon"
                className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2"
              />
              <img
                src={eyeicons}
                alt="Eye Icon"
                className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
              />
            </div>
            <p className="text-right text-blue-500 mt-2 cursor-pointer text-sm">
              Forgot Password?
            </p>
          </div>

          <Button
            type="submit"
            className="w-full h-[54px] bg-[#FF7A18] text-white py-2 rounded-md hover:bg-[#e66a15] transition duration-300"
          >
            Continue
          </Button>

          <p className="text-center my-6 text-gray-500">or continue with</p>

          <div className="flex flex-col gap-4">
            <div className="relative">
              <Button className="w-full h-[54px] bg-[#FFFFFF] text-black py-2 rounded-md border border-black hover:bg-gray-50 flex items-center justify-center gap-3">
                <img src={Google} alt="Google" className="w-5 h-5" />
                Continue with Google
              </Button>
            </div>

            <div className="relative">
              <Button className="w-full h-[54px] bg-[#FFFFFF] text-black py-2 rounded-md border border-black hover:bg-gray-50 flex items-center justify-center gap-3">
                <img src={Facebook} alt="Facebook" className="w-6 h-6" />
                Continue with Facebook
              </Button>
            </div>

            <p className="text-center text-sm sm:text-base mt-2">
              Don't have an account?{" "}
              <Link to="/signup">
                <span className="text-blue-500 font-semibold cursor-pointer">
                  Create an account
                </span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
