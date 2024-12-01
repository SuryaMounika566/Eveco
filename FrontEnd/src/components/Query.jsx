import React, { useState } from "react";
import "../styles/Query.css";

const Query = () => {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email) {
            setError("Email is required!");
            return;
        }

        if (!validateEmail(email)) {
            setError("Please enter a valid email address!");
            return;
        }

        setError("");

        try {
            const response = await fetch("http://localhost:3001/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(`Failed to send email: ${data.error || 'Unknown error'}`);
            }

            setSubmitted(true);
            console.log("Email submitted successfully");
        } catch (err) {
            console.error(err.message);
            setError("There was an issue submitting your email. Please try again.");
        }
    };

    return (
        <div className="query-container">
            <h2 className="query-title">Have a Query?</h2>
            <p className="query-description">
                Leave your email, and we will contact you shortly!
            </p>
            {!submitted ? (
                <form className="query-form" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        className={`query-input ${error ? "input-error" : ""}`}
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {error && <p className="query-error">{error}</p>}
                    <button type="submit" className="query-button">
                        Submit
                    </button>
                </form>
            ) : (
                <div className="query-success">
                    <h3>Thank you!</h3>
                    <p>We've received your query and will get back to you soon.</p>
                </div>
            )}
        </div>
    );
};

export default Query;
