import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ instaIcon }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navbarRef = useRef(null); // Create a ref for the Navbar

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsMenuOpen(false); // Close the menu
      }
    };

    // Attach the click event listener
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close the menu when the location changes to the homepage
  useEffect(() => {
    if (location.pathname === "/") {
      setIsMenuOpen(false); // Close the menu
    }
  }, [location]);

  return (
    <header className="navbar" ref={navbarRef}>
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div
          className="menu-toggle"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              toggleMenu();
            }
          }}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul
          className={`menu ${isMenuOpen ? "active" : ""}`}
          onClick={() => setIsMenuOpen(false)}
        >
          <li>
            {location.pathname === "/" ? (
              <HashLink smooth to="#next18">
                NEXT18について
              </HashLink>
            ) : (
              <HashLink smooth to="/#next18">
                NEXT18について
              </HashLink>
            )}
          </li>
          <li>
            {location.pathname === "/" ? (
              <HashLink smooth to="#dedication">
                こだわり
              </HashLink>
            ) : (
              <HashLink smooth to="/#dedication">
                こだわり
              </HashLink>
            )}
          </li>
          <li>
            {location.pathname === "/" ? (
              <HashLink smooth to="#safety">
                安心・安全
              </HashLink>
            ) : (
              <HashLink smooth to="/#safety">
                安心・安全
              </HashLink>
            )}
          </li>
          <li>
            {location.pathname === "/" ? (
              <HashLink smooth to="#productline">
                商品ラインナップ
              </HashLink>
            ) : (
              <HashLink smooth to="/#productline">
                商品ラインナップ
              </HashLink>
            )}
          </li>
          <li>
            <Link to="/team">協賛・導入チーム</Link>
          </li>
          {isMenuOpen && (
            <li className="nav-sp">
              <ul className="company-info">
                <li>
                  <Link to="/about">会社情報</Link>
                </li>
                <li>
                  <Link to="/privacy">プライバシーポリシー</Link>
                </li>
                <li>
                  <Link to="/contact">お問い合わせ</Link>
                </li>
                <li>
                  <Link to="https://www.instagram.com/hongo3_official/" target="_blank">
                    <img src={instaIcon} alt="インスタグラム" />
                  </Link>
                </li>
              </ul>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
