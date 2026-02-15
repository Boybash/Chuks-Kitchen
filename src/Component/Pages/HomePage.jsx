import React from "react";
import Hero from "../Sections/Hero";
import Intro from "../Sections/intro";
import PopularDisplay from "../Sections/PopularDisplay";
import ProductDisplay from "../Sections/ProductDisplay";

export default function Home() {
  return (
    <>
      <Hero />
      <PopularDisplay />
      <ProductDisplay />
      <Intro />
    </>
  );
}
