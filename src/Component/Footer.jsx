import React from "react";
import uparrow from "../assets/Up arrow.png";

export default function Footer() {
  return (
    <footer className="bg-[#FF7A184D] p-6 md:p-10 w-full py-[60px] md:py-[69px] relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="flex flex-col items-start">
          <h1 className="font-bold text-[#FF7A18] font-IslandMoments text-[36px] md:text-[40px]">
            Chuks Kitchen
          </h1>
          <p className="font-Jost text-[18px] md:text-[22px] text-white font-semibold max-w-[280px] mt-4 text-left leading-tight">
            Bringing the authentic flavors of Nigerian home cooking to your
            table, with passion and care.
          </p>
          <p className="text-[12px] font-Poppins mt-8 text-white opacity-80">
            © 2020 Lift Media. All rights reserved.
          </p>
        </div>

        <div className="text-white text-left flex flex-col gap-3 font-Jost">
          <h1 className="font-Jost text-[22px] font-bold md:font-normal">
            Quick Links
          </h1>
          <a href="#" className="hover:text-[#FF7A18] transition-colors">
            Home
          </a>
          <a href="#" className="hover:text-[#FF7A18] transition-colors">
            Explore
          </a>
          <a href="#" className="hover:text-[#FF7A18] transition-colors">
            My Order
          </a>
          <a href="#" className="hover:text-[#FF7A18] transition-colors">
            Contact
          </a>
        </div>

        <div className="text-white text-left flex flex-col gap-3 font-Jost">
          <h1 className="font-Jost text-[22px] font-bold md:font-normal">
            Contact Us
          </h1>
          <p className="break-words">+234 801 234 5678</p>
          <p className="break-all">hello@chukskitchen.com</p>
          <p>123 Taste Blvd, Lagos, Nigeria</p>
        </div>

        <div className="text-white text-left flex flex-col gap-3 font-Jost">
          <h1 className="font-Jost text-[22px] font-bold md:font-normal">
            Follow Us
          </h1>
          <a href="#" className="hover:text-[#FF7A18] transition-colors">
            Facebook
          </a>
          <a href="#" className="hover:text-[#FF7A18] transition-colors">
            Twitter
          </a>
          <a href="#" className="hover:text-[#FF7A18] transition-colors">
            LinkedIn
          </a>
          <a href="#" className="hover:text-[#FF7A18] transition-colors">
            Instagram
          </a>
        </div>
      </div>

      <div
        className="absolute bottom-10 right-6 md:right-10 bg-white p-2 rounded-full cursor-pointer hover:scale-110 transition-transform shadow-lg"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img
          src={uparrow}
          alt="Back to Top"
          className="w-[20px] h-[20px] object-contain"
        />
      </div>
    </footer>
  );
}
