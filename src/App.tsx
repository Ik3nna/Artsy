import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import Header from "./components/header";
import Footer from "./components/footer";

// pages
import Home from "./pages/home";
import Marketplace from "./pages/marketplace";

const App: React.FC =()=> {

  return (
   <>
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />

        <Route path="/" element= {<Navigate replace to="/home" />} />
      </Routes>

      <Footer />
    </BrowserRouter>
   </>
  )
}

export default App
