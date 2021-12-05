import React, { useState, useEffect, useRef } from 'react';
import "../Scss/style.css";
import { Link } from 'react-scroll';
import { useTransition, animated } from 'react-spring';



function Nav() {
    // State.
    const [mobileMenu, setMobileMenu] = useState(false)
    const mobileBtn = useRef();
    const menuRef = useRef();

    // React Spring.
    const transitions = useTransition(mobileMenu, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });

    // Open/close mobile menu.
    const toggleMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    // Close mobile menu on link click.
    const closeMenu = () => {
        if (window.innerWidth < 768) {
            setMobileMenu(false);
        }
    };

    // Contact btn message.
    const onClickMessage = () => {
        alert("This button does nothing.")
    };

    // Display menu on screens > 768px & close menu on outside click.
    useEffect(() => {
        let isNotMobile = () => {
            if (window.innerWidth > 767) {
                setMobileMenu(true);
            } 
        }

        let closeOutsideClick = (event) => {
            if (window.innerWidth < 767 && mobileMenu) {
                if (mobileBtn.current.contains(event.target)) {
                    return null;
                } else if (!menuRef.current.contains(event.target)) {
                     setMobileMenu(false);
                }
            }
        }
        
        document.addEventListener("click", closeOutsideClick);
        window.addEventListener("resize", isNotMobile);
        window.addEventListener("load", isNotMobile);

        return() => {
            document.removeEventListener("click", closeOutsideClick);
            window.removeEventListener("resize", isNotMobile);
            window.removeEventListener("load", isNotMobile);
        }
    })





    return (
        <nav className="nav-wrapper">
            <img src="./images/logo.svg" alt="Page Logo" className="logo" />
            <img src="./images/icon-hamburger.svg" alt="Mobile Button" className="mobile-button" onClick={toggleMenu} ref={mobileBtn} />
            {transitions((style, mobileMenu) => mobileMenu ? (
                <animated.div style={style} className="nav-menu" ref={menuRef}>
                    <Link to='about' smooth={true} duration={500} spy={true} exact='true' className="nav-link" onClick={closeMenu}>About</Link>
                    <Link to='services' smooth={true} duration={500} spy={true} exact='true' className="nav-link" onClick={closeMenu}>Services</Link>
                    <Link to='projects' smooth={true} duration={500} spy={true} exact='true' className="nav-link" onClick={closeMenu}>Projects</Link>
                    <button className="contact-btn" onClick={onClickMessage}>Contact</button>
                </animated.div>
            ) : null)}
        </nav>
    )
}

export default Nav;