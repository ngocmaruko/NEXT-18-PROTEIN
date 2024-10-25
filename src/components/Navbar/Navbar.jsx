// Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import { HashLink } from 'react-router-hash-link';
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get the current location

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="navbar">
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
        <ul className={`menu ${isMenuOpen ? "active" : ""}`} onClick={() => setIsMenuOpen(false)}>
          {/* Use HashLink only on the HomePage */}
          <li>
            {location.pathname === '/' ? (
              <HashLink smooth to="#about">NEXT18について</HashLink>
            ) : (
              <Link to="/">NEXT18について</Link>
            )}
          </li>
          <li>
            {location.pathname === '/' ? (
              <HashLink smooth to="#dedication">こだわり</HashLink>
            ) : (
              <Link to="/">こだわり</Link>
            )}
          </li>
          <li>
            {location.pathname === '/' ? (
              <HashLink smooth to="#safety">安心・安全</HashLink>
            ) : (
              <Link to="/">安心・安全</Link>
            )}
          </li>
          <li>
            {location.pathname === '/' ? (
              <HashLink smooth to="#productline">商品ラインナップ</HashLink>
            ) : (
              <Link to="/">商品ラインナップ</Link>
            )}
          </li>
          <li>
            <Link to="/team">協賛・導入チーム</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
