import React, { useState, useEffect } from 'react';


function CardOutside(props) {
    // State for deciding image for mobile/desktop.
    const [isMobileView, setIsMobileView ] = useState(false);

    // Learn more btn onClick message.
    const onClickMessage = () => {
        alert("This button does nothing.")
    };

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
        <div className={`${props.cardName}-wrapper card-with-text-outside`} id={props.cardName}>
            <div className={`image-container ${props.cardName}-image-container`}>
                <img src={isMobileView ? props.images[0] : props.images[1]} alt="About Logo" />
            </div>
            <div className={`${props.cardName}-text text-container`}>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <button className={`${props.cardName}-btn`} onClick={onClickMessage}>Learn more</button>
            </div>
        </div>
    )
}

export default CardOutside;