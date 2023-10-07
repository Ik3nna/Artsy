import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import Header from "./components/header";
import Footer from "./components/footer";

// pages
import Home from "./pages/home";
import Marketplace from "./pages/marketplace";
import MarketplaceId from "./pages/marketplace/id";
import Checkout from "./pages/marketplace/checkout";
import Auctions from "./pages/auctions";
import Drop from "./pages/drop";

const App: React.FC =()=> {

  return (
   <>
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/marketplace/:id" element={<MarketplaceId />} />
        <Route path="/marketplace/checkout" element={<Checkout /> } />
        <Route path="/auctions" element={<Auctions />} />
        <Route path="/drop" element={<Drop />} />
        <Route path="/" element= {<Navigate replace to="/home" />} />
      </Routes>

      <Footer />
    </BrowserRouter>
   </>
  )
}

export default App
