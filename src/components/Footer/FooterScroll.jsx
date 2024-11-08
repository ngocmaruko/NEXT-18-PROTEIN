import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const FooterScroll = ({ instaIcon }) => {
    return (
        <footer className="footer-scroll">
            <div className="footer-scroll-content">
                <span className="footer-scroll-item">
                    <Link to="/about">会社情報</Link>
                </span>
                <span className="footer-scroll-item">
                    <Link to="/contact">お問い合わせ</Link>
                </span>
                <span className="footer-scroll-item">
                    <Link to="/policy">プライバシーポリシー</Link>
                </span>
                <span className="footer-scroll-item instagram-icon">
                    <Link to="https://www.instagram.com/hongo3_official/" target='_blank'>
                        <img src={instaIcon} alt="Instagram" />
                    </Link>
                </span>
            </div>
        </footer>
    );
};

export default FooterScroll;
