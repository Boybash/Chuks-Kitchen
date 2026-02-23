import React, { useState } from "react";
import Button from "../UI/button";
import Google from "../../assets/google.png";
import Facebook from "../../assets/Facebook.png";
import mailicon from "../../assets/mailicon.svg";
import lockicon from "../../assets/lockicon.svg";
import eyeicons from "../../assets/eyeicons.png";
import eyeicons2 from "../../assets/eyeicons2.png"
import Phoneicon from "../../assets/phoneicon.png";
import { useEffect } from "react";
import { Link, useLocation } from "react-router";
import { signupSchema } from "../Validations/Validations";
import { useNavigate } from "react-router";

export default function SignupPage() {
  const location = useLocation();
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    terms: "",
  })
  const [errors, setErrors] = useState({})
   const [showPasword, setShowPassword] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault()
    try {
      await signupSchema.validate(formData, {abortEarly: false})
      navigate("/welcome")
    } catch (err) {
      const validationsError = {}
      err.inner.forEach((error) => {
        validationsError[error.path] = error.message
      })
      setErrors(validationsError)
    }
  }

  function togglePasswordVisibility() {
    setShowPassword(!showPasword);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="w-full h-screen flex justify-center items-center overflow-hidden bg-[#F3F4F6]">
      {/* LEFT SIDE: BANNER */}
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

      {/* RIGHT SIDE: FORM */}
      <div className="flex-1 h-screen flex flex-col  items-center p-4 sm:p-8 md:p-12 overflow-y-auto">
        <div className="flex flex-col justify-center items-center text-center py-2">
          <h1 className="text-[#FF7A18] font-IslandMoments text-[40px] font-bold">
            Chuks Kitchen
          </h1>
          <h2 className="font-Inter text-[20px] sm:text-[24px] font-bold">
            Create Your Account
          </h2>
        </div>

        <form onSubmit={handleSignUp} className="font-Inter w-full max-w-[450px]">
          {/* Email */}
          <div className="mb-4">
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
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <img
                src={mailicon}
                alt=""
                className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 opacity-60"
              />
            </div>
            {errors.email && (<p className="text-red-500 text-sm mt-1">{errors.email}</p>)}
          </div>

          {/* Phone */}
          <div className="mb-4">
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
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
              <img
                src={Phoneicon}
                alt=""
                className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 opacity-60"
              />
            </div>
            {errors.phone && (<p className="text-red-500 text-sm mt-1">{errors.phone}</p>)}

          </div>

          {/* Password */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 mb-1 text-[14px] font-medium"
            >
              Password
            </label>
            <div className="relative">
              <input
              type={`${showPasword ? "text" : "password"}`}
                id="password"
                placeholder="*******"
                className="w-full h-[54px] pl-12 pr-12 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF7A18]"
                onChange={(e) => setFormData({...formData, password: e.target.value})}

              />
              <img
                src={lockicon}
                alt=""
                className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 opacity-60"
              />
              <img
                onClick={togglePasswordVisibility}
                src={`${showPasword ? eyeicons : eyeicons2}`}
                alt="Toggle"
                className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
              />
            </div>
            {errors.password && (<p className="text-red-500 text-sm mt-1">{errors.password}</p>)}

          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 mb-1 text-[14px] font-medium"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                 type={`${showPasword ? "text" : "password"}`}
                id="confirmPassword"
                placeholder="*******"
                className="w-full h-[54px] pl-12 pr-12 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF7A18]"
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}

              />
              <img
                src={lockicon}
                alt=""
                className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 opacity-60"
              />
              <img
               onClick={togglePasswordVisibility}
                src={`${showPasword ? eyeicons : eyeicons2}`}
                alt="Toggle"
                className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
              />
            </div>
            {errors.confirmPassword && (<p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>)}
          </div>

          {/* Terms */}
          <div >
            <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="terms"
              className="mt-1 accent-[#FF7A18] h-4 w-4"
              onChange={(e) => setFormData({...formData, terms: e.target.checked})}
            />
            <label
              htmlFor="terms"
              className="text-[13px] sm:text-[14px] text-gray-600"
            >
              I agree to the{" "}
              <span className="text-[#1E88E5] cursor-pointer hover:underline">
                Terms & Conditions
              </span>{" "}
              and{" "}
              <span className="text-[#1E88E5] cursor-pointer hover:underline">
                Privacy Policy
              </span>
            </label>
            </div>
            {errors.terms && (<p className="text-red-500 text-sm mt-1">{errors.terms}</p>)}
          </div>


            <Button
              type="submit"
              className="w-full h-[54px] bg-[#FF7A18] text-white font-bold rounded-md hover:bg-[#e66a15] transition duration-300 mt-8"
            >
              Continue
            </Button>

          <p className="text-center my-4 text-gray-400 text-sm">
            or continue with
          </p>

          <div className="flex flex-col gap-3">
            <Button className="w-full h-[54px] bg-white text-black border border-black hover:bg-gray-50 flex justify-center items-center gap-3 relative">
              <img
                src={Google}
                alt=""
                className="w-5 h-5 sm:absolute sm:left-6"
              />
              <span>Continue with Google</span>
            </Button>

            <Button className="w-full h-[54px] bg-white text-black border border-black hover:bg-gray-50 flex justify-center items-center gap-3 relative">
              <img
                src={Facebook}
                alt=""
                className="w-8 h-8 sm:absolute sm:left-5"
              />
              <span>Continue with Facebook</span>
            </Button>
          </div>

          <p className="text-center mt-6 text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-500 font-bold hover:underline"
            >
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
