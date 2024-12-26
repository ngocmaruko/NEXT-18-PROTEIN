import React, { useEffect, useState } from 'react';
import './BackToTop.css';

const BackToTop = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);


  useEffect(() => {
    const backToTop = document.querySelector('.back-to-top');

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      if (scrollPosition > 110) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }

      if(scrollPosition + windowHeight >= documentHeight - 100){
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <button
        onClick={scrollToTop}
        className={`back-to-top ${showBackToTop ? 'show' : ''}`}
       >
      <img src="/img/pagetop.png" alt="" />
      </button>
    </>
  );
};

export default BackToTop;
