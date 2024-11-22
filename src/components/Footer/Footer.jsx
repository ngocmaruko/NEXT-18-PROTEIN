import React, { useEffect } from "react";
import "./Footer.css"; // Ensure you import the CSS file for styling
import {assets} from '../../assets/assets'

const Footer = () => {
  useEffect(() => {
    const footer1 = document.getElementById("footer-1");

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      // Show first footer after scrolling 600px
      if (scrollPosition > 100) {
        footer1.classList.add("visible");
        footer1.classList.remove("hidden");
      } else {
        footer1.classList.add("hidden");
        footer1.classList.remove("visible");
      }

      // Hide the first footer when the user reaches the bottom
      if (scrollPosition + windowHeight >= documentHeight - footer1.offsetHeight) {
        footer1.classList.add("hidden");
        footer1.classList.remove("visible");
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* First Footer (appears after scrolling 600px) */}
      <footer id="footer-1" className="footer-fixed hidden">
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

      {/* Second Footer (at the bottom of the content, not fixed) */}
      <footer className="footer-scroll">
        <div className="footer-scroll-content">
          <span className="footer-scroll-item">
            <a href="/about">会社情報</a>
          </span>
          <span className="footer-scroll-item">
            <a href="/contact">お問い合わせ</a>
          </span>
          <span className="footer-scroll-item">
            <a href="/policy">プライバシーポリシー</a>
          </span>
          <span className="footer-scroll-item instagram-icon">
            <a
              href="https://www.instagram.com/hongo3_official/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.instaIcon} alt="Instagram" />
            </a>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
