import React from 'react';
import '../styles/About.css';
import logo from "../assets/eveco.png";
import { useNavigate } from 'react-router-dom';

export default function AboutUs() {
    const navigate = useNavigate(); 
    return (
        <div className="about-container">
            {/* Back Button */}
            

            {/* About Us Section */}
            <div className="about-us-section">
                <div className="about-image">
                    <img 
                        src={logo} 
                        alt="About Us" 
                        className="about-img"
                    />
                </div>
                <div className="about-text">
                    <h2>About Us</h2>
                    <p>
                        Welcome to Eveco, where sustainability meets style. At Eveco, we are committed to creating
                        eco-friendly, biodegradable products that enhance your lifestyle while helping the planet. 
                        Our focus is on creating innovative and sustainable solutions for everyday needs, ensuring that 
                        future generations inherit a healthier Earth.
                    </p>
                </div>
            </div>

            {/* Our Mission Section */}
            <div className="our-mission-section">
                <h2>Our Mission</h2>
                <p>
                    Our mission is to revolutionize the way we consume and live by promoting eco-conscious practices.
                    We aim to provide high-quality, biodegradable products that reduce waste and protect our environment.
                    Together, we can create a sustainable future for everyone.
                </p>
            </div>

            {/* Why Choose Us Section */}
            <div className="why-choose-us-section">
                <h2>Why Choose Us?</h2>
                <div className="features-container">
                    <div className="feature-item">
                        <h3>🌿 Quality Assurance</h3>
                        <p>
                            Every product we create is crafted with the highest standards to ensure durability, functionality, and environmental safety.
                        </p>
                    </div>
                    <div className="feature-item">
                        <h3>⏱️ Convenience</h3>
                        <p>
                            Our products are designed to integrate seamlessly into your lifestyle, combining ease of use with sustainability.
                        </p>
                    </div>
                    <div className="feature-item">
                        <h3>🌍 Sustainable & Eco-Friendly</h3>
                        <p>
                            We prioritize the use of biodegradable materials that leave a minimal carbon footprint and ensure zero waste.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
