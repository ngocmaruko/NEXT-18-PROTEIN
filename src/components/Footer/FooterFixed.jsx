import React, { useState, useEffect } from "react";
import "./Footer.css";

const FooterFixed = () => {
  const [showFooter, setShowFooter] = useState(false);
  const [stopFooter, setStopFooter] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0); // To track last scroll position
  const [isScrollingUp, setIsScrollingUp] = useState(false); // To check scroll direction

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show the footer after scrolling past 600px
      if (currentScrollY >= 600) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }

      // Check if the user is scrolling up or down
      if (currentScrollY < lastScrollY) {
        setIsScrollingUp(true);  // User is scrolling up
      } else {
        setIsScrollingUp(false); // User is scrolling down
      }

      // Stop the footer 50px from the bottom when the user scrolls past
      const footerHeight = document.querySelector(".footer-fixed").offsetHeight;
      const distanceFromBottom = document.documentElement.scrollHeight - window.scrollY - window.innerHeight;

      if (distanceFromBottom <= footerHeight + 10) {
        setStopFooter(true); // Footer should stop 50px from the bottom
      } else {
        setStopFooter(false); // Footer should continue moving
      }

      // Update last scroll position
      setLastScrollY(currentScrollY);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <footer
      className={`footer-fixed ${!showFooter ? "hidden" : "visible"} ${stopFooter ? "stopped" : ""} ${
        isScrollingUp ? "scrolling-up" : ""
      }`}
    >
      <div className="footer-content">
        <div className="footer-item">
          <span>NEXT18のご購入はこちら</span>
        </div>
        <div className="footer-buttons">
          <button className="footer-button">HONGO公式サイト</button>
          <button className="footer-button">Amazon</button>
        </div>
      </div>
    </footer>
  );
};

export default FooterFixed;
