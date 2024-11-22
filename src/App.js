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
import Contact from "./pages/Contact/Contact";
import Confirmation from "./pages/Confirmation/Confirmation";
import ThankYou from "./pages/ThankYou/ThankYou";
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
          <Route path="/contact" element={<Contact />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/thankyou" element={<ThankYou />} />
        </Routes>
      </main>

      <BackToTop />
      <Footer />
    </div>
  );
}

export default App;
