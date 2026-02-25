import { lazy, Suspense } from "react"; // 1. Import lazy and Suspense
import { Route, Routes, useLocation } from "react-router";
import "./App.css";

// 2. Standard imports for global components (Always needed)
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";

// 3. Lazy imports for Page components
const HomePage = lazy(() => import("./Component/Pages/HomePage"));
const LoginPage = lazy(() => import("./Component/Pages/LoginPage"));
const SignupPage = lazy(() => import("./Component/Pages/SignupPage"));
const WelcomePage = lazy(() => import("./Component/Pages/WelcomePage"));
const SingleProductPage = lazy(
  () => import("./Component/Pages/SingleProductPage"),
);
const OrderPage = lazy(() => import("./Component/Pages/OrderPage"));
const OrderSummaryPage = lazy(
  () => import("./Component/Pages/OrderSummaryPage"),
);
const DeliveryDetailsPage = lazy(
  () => import("./Component/Pages/DeliveryDetailsPage"),
);
const PaymentPage = lazy(() => import("./Component/Pages/PaymentPage"));
const OrderCompletionPage = lazy(
  () => import("./Component/Pages/OrderCompletionPage"),
);

// A simple loading placeholder
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen text-[#FF7A18] font-bold">
    Loading...
  </div>
);

function App() {
  const location = useLocation();
  const blacklistPage =
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/welcome";

  return (
    <>
      {!blacklistPage && <Navbar />}

      {/* 4. Wrap your Routes in Suspense */}
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/orderpage" element={<OrderPage />} />
          <Route path="/ordersummary" element={<OrderSummaryPage />} />
          <Route path="/deliverydetails" element={<DeliveryDetailsPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/ordercomplete" element={<OrderCompletionPage />} />
          <Route
            path="/singleproduct/:productid"
            element={<SingleProductPage />}
          />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}

export default App;
