// HomePage.jsx
import React, { useEffect } from 'react';
import Splash from '../../components/Splash/Splash';
import Hero from '../Hero/Hero';
import About from '../../components/About/About';
import Dedication from '../../components/Dedication/Dedication';
import Safety from '../../components/Safety/Safety';
import ProducLine from '../../components/ProductLine/ProductLine';

const HomePage = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <Splash>
      <Hero />
      <About />
      <Dedication />
      <Safety />
      <ProducLine />
    </Splash>
  );
};

export default HomePage;
