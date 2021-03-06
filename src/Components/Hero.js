import React from 'react';
import { Link } from 'react-scroll';


function Hero() {
    return (
        <div className="hero-wrapper">
            <h1>We are creatives</h1>
            <Link to='about' smooth={true} duration={500} spy={true} exact='true'>
                <img src="./images/icon-arrow-down.svg" alt="Down Arrow" className="icon-down-arrow" />
            </Link>
        </div>
    )
}

export default Hero;