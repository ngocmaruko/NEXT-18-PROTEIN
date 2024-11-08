// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import instaIcon from './assets/instagram.png';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import './App.css';
import Footer from './components/Footer/Footer';
import Team from './pages/Team/Team';
import BackToTop from './components/BackToTop/BackToTop';
import About from './pages/About/About';
import Privacy from './pages/Privacy/Privacy';
import Contact from './pages/Contact/Contact';
import Confirmation from './pages/Confirmation/Confirmation';
import ThankYou from './pages/ThankYou/ThankYou';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar instaIcon={instaIcon} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} /> 
            <Route path='/team' element={<Team />} />
            <Route path='/about' element={<About />} />
            <Route path='/privacy' element={<Privacy />} />
            <Route path="/contact" element={<Contact />} /> 
            <Route path="/confirm" element={<Confirmation />} />
            <Route path="/thankyou" element={<ThankYou />} />

          </Routes>
         <div>
          <br />
          <br />
          <br />
         </div>
        </main>

        <Footer instaIcon={instaIcon} />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
