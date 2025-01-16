import React, { useEffect } from 'react';
import './HomePage.css';
import { useLocation } from 'react-router-dom'; 
import Splash from '../../components/Splash/Splash';
import Hero from '../../components/Hero/Hero';
import Next18 from '../../components/Next18/Next18';
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

  const backgroundStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    zIndex: '-1',
    background: 'url("/img/bg_main.webp") no-repeat 50% 50% / cover',
    content: "''",
  };

  return (
    <section className='l-body'>

      <div style={backgroundStyle}></div>
      
      {showSplash && <Splash />} {/* Render Splash only when pathname is '/' and no hash */}
      <Hero />
      <Next18 />
      <Dedication />
      <Safety />
      <ProductLine />
    </section>
  );
};

export default HomePage;
