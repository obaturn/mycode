import React from 'react';
import "./Sec.css"
import { useNavigate } from 'react-router-dom';

const Section = () => {
    const navigate = useNavigate();

    return (
        <footer className="footer">
            <div className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                Back to top
            </div>

            <div className="footer-content">
                <div className="footer-section">
                    <h3>Get To Know Us</h3>
                    <ul className="nav">


                        <li onClick={() => navigate("/Careers")} style={{cursor: "pointer"}}>Career</li>
                        <li onClick={() => navigate("/AboutUs")} style={{cursor: "pointer"}}>About Us</li>


                        <li>Blog</li>
                        <li>About Us</li>
                        <li>Investors Relations</li>
                        <li>KingsStore Devices</li>
                        <li>KingsStore Science</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Make Money with Us</h3>
                    <ul className="nav">
                        <li>Sell products on KingsStore</li>
                        <li>Become an Affiliate</li>
                        <li>Advertise Your Products</li>
                        <li>Self-Publish with Us</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Let Us Help You</h3>
                    <ul className="nav">
                        <li>Your Account</li>
                        <li>Your Orders</li>
                        <li>Returns & Replacements</li>
                        <li>Help</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Section;
