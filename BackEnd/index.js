<<<<<<< HEAD
import express from 'express';
=======
require("dotenv").config();
const express = require("express");
const passport = require("passport");
const session = require("express-session");
const cors = require("cors");
const path = require("path");
const userdb = require("./model/userSchema.js");
require("./db/conn"); // Import the connection file to establish a DB connection
require("./config/passportSetup"); // Import the passport setup file

>>>>>>> 844bf91d4d559999dda1b82fdcadf7e6f14d71f0
const app = express();
const PORT = process.env.PORT || 5000; // Set the port to 5000 or use an environment variable

// CORS setup for allowing cross-origin requests from your frontend app
app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true
}));

// Middleware to parse JSON bodies
app.use(express.json());

// Session setup for passport
app.use(session({
    secret: process.env.SESSION_SECRET || "secret_key", // Use a secure secret from the environment
    resave: false,
    saveUninitialized: true
}));

// Passport middleware for user authentication
app.use(passport.initialize());
app.use(passport.session());

// Routes for Google Authentication
app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));
app.get("/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/" }),
    (req, res) => {
        res.redirect("/home"); // Redirect to /home after successful login
    }
);

// Route for logout
app.get("/logout", (req, res) => {
    req.logout((err) => {
        if (err) return res.status(500).send(err);
        res.redirect("/"); // Redirect to home page after logout
    });
});

// Basic route to check server status
app.get("/", (req, res) => {
    res.status(200).json("Server running...");
});

// Serve the React app's static files directly from the `src` folder
app.use(express.static(path.join(__dirname, '../FrontEnd/dist')));

// Handle all other routes to render the React app's index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../FrontEnd/dist', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

// Route to fetch logged-in user details
app.get('/api/user', (req, res) => {
    if (req.isAuthenticated()) {
        // Return only essential user details
        res.json({
            name: req.user.name,
            email: req.user.email,
        });
    } else {
        res.status(401).json({ message: 'Not authenticated' });
    }
});
