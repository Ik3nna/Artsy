import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import Header from "./components/header";

// pages
import Home from "./pages/home";

const App: React.FC =()=> {

  return (
   <>
    <BrowserRouter>

      <Header />
      
      <Routes>
        <Route path="/home" element={<Home />} />

        <Route path="/" element= {<Navigate replace to="/home" />} />
      </Routes>

    </BrowserRouter>
   </>
  )
}

export default App
