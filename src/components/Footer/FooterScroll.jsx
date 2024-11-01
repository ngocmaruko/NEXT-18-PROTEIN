// src/components/FooterScroll.jsx
import React, { useEffect, useState } from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';

const FooterScroll = ({instaIcon}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [footerHeight, setFooterHeight] = useState(50); // Default height

    useEffect(() => {
        const footerFixed = document.querySelector('.footer-fixed');
        if (footerFixed) {
            setFooterHeight(footerFixed.offsetHeight); // Get height dynamically
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const shouldBeVisible = window.scrollY + window.innerHeight >= document.body.offsetHeight - 100; // Adjust threshold
            setIsVisible(shouldBeVisible); // Show the scroll footer if close to bottom
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <footer className={`footer-scroll ${isVisible ? 'visible' : ''}`} style={{ bottom: `${footerHeight}px` }}>
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
                <Link to="https://www.instagram.com/hongo3_official/" target='_blank'><img src={instaIcon} alt="" /></Link>
                </span> {/* Use an icon here */}
            </div>
        </footer>
    );
};

export default FooterScroll;
