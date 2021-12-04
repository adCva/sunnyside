import React from 'react';
import "../Scss/style.css";


function About() {
    return (
        <div className="about-wrapper card-with-text-outside" id="about">
            <div className="image-container about-image-container">
                <img src="./images/mobile/image-transform.jpg" alt="About Logo" />
            </div>
            <div className="about-text text-container">
                <h2>Transform your brand</h2>
                <p>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
                <button>Learn more</button>
            </div>
        </div>
    )
}

export default About;