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
        <div className="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel turpis ut justo bibendum dignissim. Nullam interdum, eros a feugiat dapibus, nisi dui ullamcorper libero, eu dignissim felis nunc non magna.</p>
                <p style={{ height: '800px' }}>Scroll down to see the second footer.</p>
            </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
