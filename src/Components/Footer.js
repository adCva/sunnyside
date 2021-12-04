import React from 'react';
import { FaFacebookSquare, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";



function Footer() {
    return (
        <div className="footer-wrapper">
            <h3>sunnyside</h3>
            <div className="footer-links">
                <a href="#" className="footer-link">About</a>
                <a href="#" className="footer-link">Services</a>
                <a href="#" className="footer-link">Projects</a>
            </div>
            <div className="footer-social-icons">
                <button><FaFacebookSquare/></button>
                <button><FaInstagram/></button>
                <button><FaTwitter/></button>
                <button><FaPinterest/></button>
            </div>
        </div>
    )
}

export default Footer;