// src/components/Footer.js
import React from 'react';
import FooterFixed from './FooterFixed'; // Import the fixed footer component
import FooterScroll from './FooterScroll'; // Import the scroll footer component

const Footer = () => {
    return (
        <>
            <FooterScroll />
            <FooterFixed />
        </>
    );
};

export default Footer;
