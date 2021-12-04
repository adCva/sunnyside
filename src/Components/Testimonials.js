import React from 'react';
import "../Scss/style.css";




function Testimonials() {
    return (
        <div className="testimonials-wrapper">
            <h3>Client testimonials</h3>
            <div className="testimonials-people-group">
                <div className="testimonials-people-card">
                    <img src="./images/image-emily.jpg" alt="Emily R." />
                    <p>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
                    <div className="testimonials-people-name">
                        <h5>Emily R.</h5>
                        <p>Marketing Director</p>
                    </div>
                </div>
                <div className="testimonials-people-card">
                    <img src="./images/image-thomas.jpg" alt="Thomas S." />
                    <p>Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
                    <div className="testimonials-people-name">
                        <h5>Thomas S.</h5>
                        <p>Chief Operating Officer</p>
                    </div>
                </div>
                <div className="testimonials-people-card">
                    <img src="./images/image-jennie.jpg" alt="Jennie F." />
                    <p>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
                    <div className="testimonials-people-name">
                        <h5>Jennie F.</h5>
                        <p>Business Owner</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;