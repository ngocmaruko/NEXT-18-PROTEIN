// src/components/FooterFixed.jsx
import React from "react";
import "./Footer.css";

const FooterFixed = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-fixed">
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
