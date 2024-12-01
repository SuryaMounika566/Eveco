import React from "react";
import "../styles/Recycle.css";
import { useNavigate } from "react-router-dom";
import logo2 from '../assets/logo2.png'
export default function Recycle() {
    const navigate = useNavigate();
    
    return (
        <div className="recycle-container">
            {/* Back Button */}
            <button className="back-button" onClick={() => navigate('/')}>
                Back to Homepage
            </button>
            <img src={logo2}/ >

            {/* Introduction Section */}
            <div className="intro-section">
                <h1>Recycle with Eveco</h1>
                <p>
                    At Eveco, we believe in transforming waste into opportunity. By recycling your used biodegradable items,
                    you help us create new products while reducing waste and protecting our planet. Join us in our mission 
                    to make a sustainable future possible.
                </p>
            </div>

            {/* How It Works Section with Timeline */}
            <div className="how-it-works">
                <h2>How It Works</h2>
                <div className="timeline">
                    <div className="timeline-step">
                        <div className="content">
                            <h3>Step 1: Share Details</h3>
                            <p>Fill out the form to tell us about the biodegradable items you’d like to recycle.</p>
                        </div>
                    </div>
                    <div className="timeline-step">
                        <div className="content">
                            <h3>Step 2: We Collect</h3>
                            <p>We will coordinate with you to collect the items from your location.</p>
                        </div>
                    </div>
                    <div className="timeline-step">
                        <div className="content">
                            <h3>Step 3: Transform</h3>
                            <p>The collected items will be processed into new eco-friendly products.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Get Started Form */}
            <div className="form-container">
                <h2>Get Started</h2>
                <form className="recycle-form">
                    <label>Name:
                        <input type="text" placeholder="Enter your name" required />
                    </label>
                    <label>Email:
                        <input type="email" placeholder="Enter your email" required />
                    </label>
                    <label>Location:
                        <input type="text" placeholder="Enter your location" required />
                    </label>
                    <label>Describe Items:
                        <textarea placeholder="Provide details about the items you want to recycle" required />
                    </label>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        </div>
    );
}
