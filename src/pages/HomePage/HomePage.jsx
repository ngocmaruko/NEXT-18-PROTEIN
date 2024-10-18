import React from 'react';
import Splash from '../../components/Splash/Splash';
import Hero from '../Hero/Hero';
import About from '../../components/About/About';

const HomePage = () => {
  return (
    <Splash>
      {/* Content that should be shown after the splash animation */}
    <Hero />
    <About />
    </Splash>
  );
};

export default HomePage;
