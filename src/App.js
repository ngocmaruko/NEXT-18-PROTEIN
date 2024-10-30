// src/App.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import './App.css';
import Footer from './components/Footer/Footer';
import Team from './pages/Team/Team';
import BackToTop from './components/BackToTop/BackToTop';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main> {/* Wrap the Routes in a main tag */}
          <Routes>
            <Route path="/" element={<HomePage />} /> 
            <Route path='/team' element={<Team />} />
          </Routes>
         <div>
          <br />
          <br />
          <br />
         </div>
        </main>

        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
