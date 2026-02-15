import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { useLocation } from "react-router";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import HomePage from "./Component/Pages/HomePage";
import LoginPage from "./Component/Pages/LoginPage";
import SignupPage from "./Component/Pages/SignupPage";
import WelcomePage from "./Component/Pages/WelcomePage";
import SingleProductPage from "./Component/Pages/SingleProductPage";

function App() {
  const location = useLocation();
  const blacklistPage =
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/welcome";
  return (
    <>
      {!blacklistPage && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route
          path="/singleproduct/:productid"
          element={<SingleProductPage />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
