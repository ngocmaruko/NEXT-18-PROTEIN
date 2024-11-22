import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Navbar.css";

const Navbar = ({ logo, instaIcon }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isActive, setIsActive] = useState('');
  const location = useLocation();

  // Toggle the hamburger menu open/close state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when clicking outside of it
  const handleClickOutside = (event) => {
    if (
      !event.target.closest(".navbar") &&
      !event.target.closest(".hamburger")
    ) {
      setIsMenuOpen(false);
    }
  };

  // Reset active link when pathname changes
  useEffect(() => {
    setIsActive('');
  }, [location.pathname]);

  useEffect(() => {
    // Add event listener to handle clicks outside the menu
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Smooth scroll to the target when a hash link is in the URL
  useEffect(() => {
    if (window.location.hash) {
      setTimeout(() => {
        const target = document.querySelector(window.location.hash);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }, 200); // Slight delay for smoother scrolling
    }
  }, []);

  // Close the menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Handle setting the active link on hash link click
  const handleSetActive = (section) => {
    setIsActive(section);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <ul
          className={`menu ${isMenuOpen ? "active" : ""}`}
          onClick={() => setIsMenuOpen(false)}
        >
          <li>
            {location.pathname === "/" ? (
              <HashLink
                smooth
                to="#next18"
                onClick={() => handleSetActive('next18')}
                className={isActive === 'next18' ? 'active' : ''}
              >
                NEXT18について
              </HashLink>
            ) : (
              <a href="/#next18">NEXT18について</a>
            )}
          </li>
          <li>
            {location.pathname === "/" ? (
              <HashLink
                smooth
                to="#dedication"
                onClick={() => handleSetActive('dedication')}
                className={isActive === 'dedication' ? 'active' : ''}
              >
                こだわり
              </HashLink>
            ) : (
              <a href="/#dedication">こだわり</a>
            )}
          </li>
          <li>
            {location.pathname === "/" ? (
              <HashLink
                smooth
                to="#safety"
                onClick={() => handleSetActive('safety')}
                className={isActive === 'safety' ? 'active' : ''}
              >
                安心・安全
              </HashLink>
            ) : (
              <a href="/#safety">安心・安全</a>
            )}
          </li>
          <li>
            {location.pathname === "/" ? (
              <HashLink
                smooth
                to="#productline"
                onClick={() => handleSetActive('productline')}
                className={isActive === 'productline' ? 'active' : ''}
              >
                商品ラインナップ
              </HashLink>
            ) : (
              <a href="/#productline">商品ラインナップ</a>
            )}
          </li>
          <li>
            <a
              href="/team"
              onClick={() => handleSetActive('team')}
              className={isActive === 'team' ? 'active' : ''}
            >
              協賛・導入チーム
            </a>
          </li>

          <li className="nav-sp">
            <ul className="company-info">
              <li>
                <a href="/about">会社情報</a>
              </li>
              <li>
                <a href="/privacy">プライバシーポリシー</a>
              </li>
              <li>
                <a href="/contact">お問い合わせ</a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/hongo3_official/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instaIcon} alt="インスタグラム" />
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <div
          className={`hamburger ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
