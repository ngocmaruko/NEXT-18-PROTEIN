import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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
          <li>
            {location.pathname === '/' ? (
              <HashLink smooth to="#about">NEXT18について</HashLink>
            ) : (
              <HashLink smooth to="/#about">NEXT18について</HashLink>
            )}
          </li>
          <li>
            {location.pathname === '/' ? (
              <HashLink smooth to="#dedication">こだわり</HashLink>
            ) : (
              <HashLink smooth to="/#dedication">こだわり</HashLink>
            )}
          </li>
          <li>
            {location.pathname === '/' ? (
              <HashLink smooth to="#safety">安心・安全</HashLink>
            ) : (
              <HashLink smooth to="/#safety">安心・安全</HashLink>
            )}
          </li>
          <li>
            {location.pathname === '/' ? (
              <HashLink smooth to="#productline">商品ラインナップ</HashLink>
            ) : (
              <HashLink smooth to="/#productline">商品ラインナップ</HashLink>
            )}
          </li>
          <li>
            <Link to="/team">協賛・導入チーム</Link>
          </li>
          {/* Render the nav-sp section inside the menu for stacking effect */}
         {isMenuOpen && (
          <div className="nav-sp">
          <ul className="company-info">
            <li>会社情報</li>
            <li>プライバシーポリシー</li>
            <li>お問い合わせ</li>
            <li>Instagram</li>
          </ul>
        </div>
         )}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
