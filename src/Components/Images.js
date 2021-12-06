import React, { useState, useEffect } from 'react';

function Images() {
    // State for deciding image for mobile/desktop.
    const [isMobileView, setIsMobileView ] = useState(false);

    // Load proper image for screen size.
    useEffect(() => {
        let smallerScreens = () => {
            if (window.innerWidth < 768) {
                setIsMobileView(true);
            } else {
                setIsMobileView(false);
            }
        }

        window.addEventListener("load", smallerScreens);
        window.addEventListener("resize", smallerScreens);
        return() => {
            window.removeEventListener("load", smallerScreens);
            window.removeEventListener("resize", smallerScreens);
        }
    });



    return (
        <div className="images-wrapper">
            <img src={isMobileView ? "./images/mobile/image-gallery-milkbottles.jpg" : "./images/desktop/image-gallery-milkbottles.jpg"} alt="Milkbottles" />            
            <img src={isMobileView ? "./images/mobile/image-gallery-orange.jpg" : "./images/desktop/image-gallery-orange.jpg"} alt="Orange"/>            
            <img src={isMobileView ? "./images/mobile/image-gallery-cone.jpg" : "./images/desktop/image-gallery-cone.jpg"} alt="Cone"/>            
            <img src={isMobileView ? "./images/mobile/image-gallery-sugar-cubes.jpg" : "./images/desktop/image-gallery-sugarcubes.jpg"} alt="Sugar cubes"/>            
        </div>
    )
}

export default Images;