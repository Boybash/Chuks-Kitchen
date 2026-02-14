import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Home from "./Component/Pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
