import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

// Import Components
import Navbar from "./landing_page/Navbar.jsx";
import Footer from "./landing_page/Footer.jsx";
import NotFound from "./landing_page/NotFound.jsx";
import Homepage from "./landing_page/home/Homepage.jsx";
import Signup from "./landing_page/signup/Signup.jsx";
import Login from "./landing_page/signup/Login.jsx";
import Dashboard from "./landing_page/components/Dashboard.jsx";
import AboutPage from "./landing_page/about/Aboutpage.jsx";
import ProductPage from "./landing_page/products/ProductPage.jsx";
import PricingPage from "./landing_page/pricing/PricingPage.jsx";
import SupportPage from "./landing_page/support/SupportPage.jsx";
import Home from "./landing_page/components/Home";



const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
       
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />

        
        <Route path="/dashboard/*" element={<Dashboard />} />

        
        <Route path="/*" element={<Home />} />

        
        <Route path="*" element={<NotFound />} />
      
      </Routes>
      
      <Footer />
      
    </BrowserRouter>
   
  </StrictMode>
);
