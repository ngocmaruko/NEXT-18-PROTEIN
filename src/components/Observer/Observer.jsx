import React, { useEffect, useState, useRef } from 'react';
import './Observer.css';

const Observer = ({ children, animationClass, threshold = 0.5 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold }
    );

    const currentElement = elementRef.current;
    if (currentElement) observer.observe(currentElement);

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={elementRef} className={isVisible ? animationClass : ''}>
      {children}
    </div>
  );
};

export default Observer;
