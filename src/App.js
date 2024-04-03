import React from "react";
import "./App.css"
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.js";
import About from "./Pages/About.js";
import Contact from "./Pages/Contact.js";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </BrowserRouter>
      <Footer nama="Kahfi Al Ghifari"/>
    </div>
  );
}

export default App;
