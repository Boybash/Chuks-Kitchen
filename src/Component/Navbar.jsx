import React, { useState } from "react";
import Button from "./UI/button";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Link } from "react-router";
import { useCart } from "./Context/Context";

export default function Navbar() {
  const { cart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const cartItemCount = cart.reduce(
    (total, item) => total + (item.quantity || 1),
    0,
  );

  const scrollToProduct = () => {
    const skillsSection = document.getElementById("product");
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white p-2 text-black w-full sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/">
          <div className="text-[#FF7A18] font-IslandMoments text-[32px] md:text-[40px] font-bold">
            Chuks Kitchen
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-30 font-Inter text-[16px]">
          <Link to="/" className="hover:text-[#FF7A18]">
            Home
          </Link>
          <a
            onClick={scrollToProduct}
            className="hover:text-[#FF7A18] cursor-pointer"
          >
            Explore
          </a>
          <Link to="/orderpage" className="hover:text-[#FF7A18] relative">
            My Orders
            {cartItemCount > 0 && (
              <span className="absolute -top-3 -right-5 bg-[#FF7A18] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
                {cartItemCount}
              </span>
            )}
          </Link>
          <a href="#" className="hover:text-[#FF7A18]">
            Account
          </a>
        </div>

        <div className="hidden md:block">
          <Link to="/login">
            <Button className="w-[120px] text-white font-bold">Login</Button>
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-[#FF7A18] focus:outline-none"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t mt-2 flex flex-col p-4 gap-4 font-Inter">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#FF7A18]"
          >
            Home
          </Link>
          <a
            onClick={scrollToProduct}
            className="hover:text-[#FF7A18] cursor-pointer"
          >
            Explore
          </a>
          <Link
            to="/orderpage"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#FF7A18] flex justify-between"
          >
            My Orders
            {cartItemCount > 0 && (
              <span className="bg-[#FF7A18] text-white text-xs px-2 py-1 rounded-full">
                {cartItemCount}
              </span>
            )}
          </Link>
          <a href="#" className="hover:text-[#FF7A18]">
            Account
          </a>
          <Link to="/login" onClick={() => setIsOpen(false)}>
            <Button className="w-full">Login</Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
