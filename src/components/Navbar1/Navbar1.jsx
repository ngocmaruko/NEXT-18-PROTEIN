import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Navbar1.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navbarRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (location.pathname === "/") {
      setIsMenuOpen(false);
    }
  }, [location]);

  return (
    <header className="navbar" ref={navbarRef}>
      <div className="logo">
        <a href="/">
          <img src='/img/logo.png' alt="Logo" />
        </a>
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
            <a href="/#next18">NEXT18について</a>
          )}
        </li>
        <li>
          {location.pathname === "/" ? (
            <HashLink smooth to="#dedication">
              こだわり
            </HashLink>
          ) : (
            <a href="/#dedication">こだわり</a>
          )}
        </li>
        <li>
          {location.pathname === "/" ? (
            <HashLink smooth to="#safety">
              安心・安全
            </HashLink>
          ) : (
            <a href="/#safety">安心・安全</a>
          )}
        </li>
        <li>
          {location.pathname === "/" ? (
            <HashLink smooth to="#productline">
              商品ラインナップ
            </HashLink>
          ) : (
            <a href="/#productline">商品ラインナップ</a>
          )}
        </li>
        <li>
          <a href="/team">協賛・導入チーム</a>
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
              >
                <img src='/img/insta.png'alt="インスタグラム" />
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </header>
  );
};

export default Navbar1;
