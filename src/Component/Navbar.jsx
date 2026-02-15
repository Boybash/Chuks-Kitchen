import React from "react";
import Button from "./UI/button";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="bg-white p-2 text-white flex justify-around items-center gap- w-full sticky top-0 z-50">
      <Link to="/">
        <div className="text-2xl font-bold text-[#FF7A18] font-IslandMoments text-[40px]">
          Chuks Kitchen
        </div>
      </Link>
      <div className=" text-black flex justify-between items-center gap-40 ml-10 font-Inter text-[16px]">
        <a href="#" className="hover:text-[#FF7A18] text-[16px]">
          Home
        </a>
        <a href="#" className="hover:text-[#FF7A18] text-[16px]">
          Explore
        </a>
        <a href="#" className="hover:text-[#FF7A18] text-[16px]">
          My Orders
        </a>
        <a href="#" className="hover:text-[#FF7A18] text-[16px]">
          Account
        </a>
      </div>

      <Link to="/login">
        <Button className="w-[160px]">Login</Button>
      </Link>
    </nav>
  );
}
