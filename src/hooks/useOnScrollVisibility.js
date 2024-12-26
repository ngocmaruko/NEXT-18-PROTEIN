import { useState, useEffect, useRef } from "react";
import './useOnScrollVisibility.css'

const useOnScrollVisibility = (threshold = 0.9) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const checkVisibility = () => {
    const { top } = elementRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    setIsVisible(top < windowHeight * threshold);
  };

  useEffect(() => {
    const handleScroll = () => checkVisibility();
    window.addEventListener("scroll", handleScroll);
    
    checkVisibility();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return [elementRef, isVisible];
};

export default useOnScrollVisibility;
