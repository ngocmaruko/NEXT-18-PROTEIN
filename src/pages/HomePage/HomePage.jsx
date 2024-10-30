import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation for accessing the current URL
import Splash from '../../components/Splash/Splash';
import Hero from '../Hero/Hero';
import About from '../../components/About/About';
import Dedication from '../../components/Dedication/Dedication';
import Safety from '../../components/Safety/Safety';
import ProductLine from '../../components/ProductLine/ProductLine';

const HomePage = () => {
  const location = useLocation(); // Get the current location

  useEffect(() => {
    // Check if there is a hash in the URL
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        // Scroll into view if hash is present
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]); // Add location as a dependency

  // Determine if we should show the Splash component
  const showSplash = location.pathname === '/' && !location.hash;

  return (
    <>
      {showSplash && <Splash />} {/* Render Splash only when pathname is '/' and no hash */}
      <Hero />
      <About />
      <Dedication />
      <Safety />
      <ProductLine />
    </>
  );
};

export default HomePage;
