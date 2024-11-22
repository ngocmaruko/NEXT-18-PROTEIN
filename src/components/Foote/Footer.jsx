import React from 'react';
import FooterFixed from './FooterFixed';
import FooterScroll from './FooterScroll';

const Footer = ({instaIcon}) => {
    return (
        <>
            <FooterScroll instaIcon={instaIcon}/>
            <FooterFixed />
        </>
    );
};

export default Footer;
