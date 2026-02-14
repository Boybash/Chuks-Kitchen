import React from "react";
import uparrow from "../assets/Up arrow.png";

export default function Footer() {
  return (
    <footer className="bg-[#FF7A18]/30 p-5 w-full flex justify-around items-start gap-10 py-[69px] relative">
      <div>
        <h1 className="text-2xl font-bold text-[#FF7A18] font-IslandMoments text-[40px]">
          Chuks Kitchen{" "}
        </h1>
        <p className="font-Jost text-[24px] text-white font-semibold w-[229px] mt-5 text-left">
          Bringing the authentic flavors of Nigerian home cooking to your table,
          with passion and care.
        </p>
        <p className="text-[12px] font-Poppins mt-10 text-white">
          © 2020 Lift Media. All rights reserved.
        </p>
      </div>
      <div className="text-white text-left flex flex-col gap-3 font-jost">
        <h1 className="font-Jost text-[24px]">Quick Links</h1>
        <a href="#">Home</a>
        <a href="#">Explore</a>
        <a href="#">My Order</a>
        <a href="#">Contact</a>
      </div>
      <div className="text-white text-left flex flex-col gap-3 font-Jost">
        <h1 className="font-Jost text-[24px]">Contact Us</h1>
        <p>+234 801 234 5678</p>
        <p>hello@chukskitchen.com</p>
        <p>123 Taste Blvd, Lagos, Nigeria</p>
      </div>
      <div className="text-white text-left flex flex-col gap-3 font-Jost">
        <h1 className="font-Jost text-[24px]">Follow Us</h1>
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">LinkedIn</a>
        <a href="#">Instagram</a>
      </div>

      <img
        src={uparrow}
        alt="Back to Top"
        className="w-[24px] h-[24px] object-cover object-fit-cover rounded-full cursor-pointer absolute bottom-17 right-25"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
    </footer>
  );
}
