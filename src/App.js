import { Navigate } from "react-router-dom";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./layout/Nav";
import Services from "./pages/Services";
import Products from "./pages/Products";
import AboutUs from "./pages/AboutUs";
import Portfolio from "./pages/Portfolio";
import FAQ from "./pages/FAQ";
import Contacts from "./pages/Contacts";

const App = () => {
    return (
        <>
            <Nav />
            <Routes>
                <Route path="/" element={<Navigate to="/services" />} />
                <Route path="/services" element={<Services />} />
                <Route path="/products" element={<Products />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contacts" element={<Contacts />} />
            </Routes>
        </>
    );
};

export default App;
