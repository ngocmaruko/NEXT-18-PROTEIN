import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <Link to="#next18">NEXT18について</Link>
      </li>
      <li>
        <Link to="#forproduct">こだわり</Link>
      </li>
      <li>
        <Link to="#safety">安心・安全</Link>
      </li>
      <li>
        <Link to="#products">商品ラインナップ</Link>
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
