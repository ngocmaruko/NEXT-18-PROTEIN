import { useEffect } from 'react';

const Observer = (options = {}) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');

          // Apply custom delay only for Next18 component
          if (options.addDelay) {
            entry.target.style.setProperty('--delay', `${index * 0.3}s`);
          }

          observer.unobserve(entry.target); // Stop observing once the item is visible
        }
      });
    }, { threshold: 0.5 });

    const items = document.querySelectorAll(options.selector);
    items.forEach(item => observer.observe(item));

    // Clean up on unmount
    return () => observer.disconnect();
  }, [options]);

  return null;
};

export default Observer;
