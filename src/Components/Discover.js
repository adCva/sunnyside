import React from 'react';
import "../Scss/style.css";


function Discover() {
    return (
        <div className="discover-wrapper card-with-text-outside" id="services">
             <div className="image-container">
                <img src="./images/mobile/image-stand-out.jpg" alt="About Logo" />
            </div>
            <div className="discover-text text-container">
                <h2>Stand out to the right audience</h2>
                <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
                <button>Learn more</button>
            </div>
        </div>
    )
}

export default Discover;