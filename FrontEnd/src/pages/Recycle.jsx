import React, { useState } from "react";
import "../styles/Recycle.css";
import { useNavigate } from "react-router-dom";
import logo2 from '../assets/logo2.png';

export default function Recycle() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [items, setItems] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            name,
            email,
            location,
            items,
        };

        try {
            const response = await fetch('http://localhost:3001/send-recycle-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Your request has been submitted successfully!');
                setName('');
                setEmail('');
                setLocation('');
                setItems('');
            } else {
                alert('There was a problem submitting your request. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while sending the request.');
        }
    };

    return (
        <div className="recycle-container">
           
            <img src={logo2} alt="Eveco logo" />

            <div className="intro-section">
                <h1>Recycle with Eveco</h1>
                <p>At Eveco, we believe in transforming waste into opportunity. By recycling your used biodegradable items, you help us create new products while reducing waste and protecting our planet. Join us in our mission to make a sustainable future possible.</p>
            </div>

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

            <div className="form-container">
                <h2>Get Started</h2>
                <form className="recycle-form" onSubmit={handleSubmit}>
                    <label>Name:
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" required />
                    </label>
                    <label>Email:
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
                    </label>
                    <label>Location:
                        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Enter your location" required />
                    </label>
                    <label>Describe Items:
                        <textarea value={items} onChange={(e) => setItems(e.target.value)} placeholder="Provide details about the items you want to recycle" required />
                    </label>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        </div>
    );
}
