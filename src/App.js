// src/App.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import './App.css';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main> {/* Wrap the Routes in a main tag */}
          <Routes>
            <Route path="/" element={<HomePage />} /> 

          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
