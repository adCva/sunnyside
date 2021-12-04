import React from 'react';
import "../Scss/style.css";
import { Link } from 'react-scroll';



function Hero() {
    return (
        <div className="hero-wrapper">
            <h1>We are creatives</h1>
            <Link to='about' smooth={true} duration={500} spy={true} exact='true'><img src="./images/icon-arrow-down.svg" alt="Down Arrow" /></Link>
        </div>
    )
}

export default Hero;