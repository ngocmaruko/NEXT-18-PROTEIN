import { useEffect } from 'react';
import './Observer.css';


const Observer = (options = {}) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');

          if (options.addDelay) {
            entry.target.style.setProperty('--delay', `${index * 0.3}s`);
          }

          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });

    const items = document.querySelectorAll('[data--fadein], [data--fadedown], [data--fadeinleft],[data--fadeinright], [data--scaled]'); // Target elements with data-fadein attribute
    items.forEach(item => observer.observe(item));

    // Clean up on unmount
    return () => observer.disconnect();
  }, [options]);

  return null;
};

export default Observer;
