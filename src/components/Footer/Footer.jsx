import React, { useEffect } from "react";
import "./Footer.css"; 

const Footer = () => {
  useEffect(() => {
    const footer1 = document.getElementById("footer-1");

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      // Show first footer after scrolling 100px
      if (scrollPosition > 100) {
        footer1.classList.add("visible");
        footer1.classList.remove("hidden");
      } else {
        footer1.classList.add("hidden");
        footer1.classList.remove("visible");
      }

      // Hide the first footer when the user reaches the bottom
      if (scrollPosition + windowHeight >= documentHeight - 100) {
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
            <span>NEXT18の<br />ご購入はこちら</span>
          </div>
          <div className="footer-buttons">
            <div className="footer-button"><img src='/img/hongo-btn.jpg' alt="hongo 公式サイト" /></div>
            <div className="footer-button"><img src='/img/amazon-btn.jpg' alt="アマゾン" /></div>
          </div>
        </div>
      </footer>

      {/* Second Footer (at the bottom of the content, not fixed) */}
      <footer className="footer-2">
        <div className="footer-2-content">
          <span className="footer-2-item">
            <a href="/about">会社情報</a>
          </span>
          <span className="footer-2-item">
            <a href="/contact">お問い合わせ</a>
          </span>
          <span className="footer-2-item">
            <a href="/policy">プライバシーポリシー</a>
          </span>
          <span className="footer-2-item instagram-icon">
            <a
              href="https://www.instagram.com/hongo3_official/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src='/img/insta.png' alt="Instagram" />
            </a>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
