import React from "react";
import Hero from "../Sections/Hero";
import Intro from "../Sections/intro";
import PopularDisplay from "../Sections/PopularDisplay";
import ProductDisplay from "../Sections/ProductDisplay";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Hero />
      <PopularDisplay />
      <ProductDisplay />
      <Intro />
    </>
  );
}
