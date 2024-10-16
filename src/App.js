// src/App.js
import React from 'react';
import './App.css'; // Import the main CSS file
import Navbar from './components/Navbar'; // Import the Navbar component
import Hero from './components/Hero'; // Import the Hero component
import Footer from './components/Footer'; // Import the Footer component

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <div className="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel turpis ut justo bibendum dignissim. Nullam interdum, eros a feugiat dapibus, nisi dui ullamcorper libero, eu dignissim felis nunc non magna.</p>
                <p style={{ height: '800px' }}>Scroll down to see the second footer.</p>
            </div>
            <Footer />
        </div>
    );
}

export default App;
