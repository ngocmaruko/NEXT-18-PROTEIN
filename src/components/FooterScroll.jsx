// src/components/FooterScroll.jsx
import React, { useEffect, useState } from 'react';
import './Footer.css';

const FooterScroll = () => {
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
                <span className="footer-scroll-item">会社情報</span>
                <span className="footer-scroll-item">お問い合わせ</span>
                <span className="footer-scroll-item">プライバシーポリシー</span>
                <span className="footer-scroll-item instagram-icon">📷</span> {/* Use an icon here */}
            </div>
        </footer>
    );
};

export default FooterScroll;
