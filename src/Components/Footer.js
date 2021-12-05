import React from 'react';
import { FaFacebookSquare, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";



function Footer() {
    const onClickMessage = () => {
        alert("This button does nothing.")
    };


    
    return (
        <div className="footer-wrapper">
            <img src="./images/logo.svg" alt="Logo" className="footer-logo"/>
            <div className="footer-links">
                <button className="footer-link" onClick={onClickMessage}>About</button>
                <button className="footer-link" onClick={onClickMessage}>Services</button>
                <button  className="footer-link" onClick={onClickMessage}>Projects</button>
            </div>
            <div className="footer-social-icons">
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FaFacebookSquare/></a>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FaInstagram/></a>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer"><FaTwitter/></a>
                <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer"><FaPinterest/></a>
            </div>
        </div>
    )
}

export default Footer;