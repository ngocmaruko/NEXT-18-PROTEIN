// src/components/FooterFixed.jsx
import React from 'react';
import './Footer.css';

const FooterFixed = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer-fixed">
            <div className="footer-content">
                <div className="footer-item">
                    <span>NEXT18の<br /> ご購入はこちら</span>
                </div>
                <button className="footer-button">HONGO公式サイト</button>
                <button className="footer-button">Amazon</button>
                <button className="footer-button" onClick={scrollToTop}>ページトップ</button>
            </div>
        </footer>
    );
};

export default FooterFixed;
