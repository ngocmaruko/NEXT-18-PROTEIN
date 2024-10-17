import React from 'react';
import Splash from '../../components/Splash/Splash';
import Hero from '../Hero/Hero';

const HomePage = () => {
  return (
    <Splash>
      {/* Content that should be shown after the splash animation */}
    <Hero />
    </Splash>
  );
};

export default HomePage;
