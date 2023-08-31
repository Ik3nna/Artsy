import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import Header from "./components/header";

const App: React.FC =()=> {

  return (
   <>
    <BrowserRouter>

      <Header />
      
      <Routes>

      </Routes>

    </BrowserRouter>
   </>
  )
}

export default App
