import React from "react";
import { Route, Routes } from "react-router-dom";
import { assets } from "./assets/assets";
import HomePage from "./pages/HomePage/HomePage";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Team from "./pages/Team/Team";
import BackToTop from "./components/BackToTop/BackToTop";
import About from "./pages/About/About";
import Privacy from "./pages/Privacy/Privacy";
import Navbar1 from "./components/Navbar1/Navbar1";

function App() {
  return (
    <div className="App">
      <Navbar1 logo={assets.logo} instaIcon={assets.instaIcon} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </main>
      <BackToTop />
      <Footer />
    </div>
  );
}

export default App;
