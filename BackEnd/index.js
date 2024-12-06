require('dotenv').config(); // Load environment variables from a .env file

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
const passport = require('passport');
const session = require('express-session');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const UserModel = require('./models/Users');

const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/Users")
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

// Passport setup
app.use(session({ secret: process.env.SESSION_SECRET || 'secret', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Endpoint for registering a user
app.post('/register', (req, res) => {
    UserModel.create(req.body)
        .then(user => res.json(user))
        .catch(err => res.status(500).json(err));
});

// Endpoint for logging in a user
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email, password })
        .then(user => {
            if (user) {
                res.json({ success: true, name: user.name });
            } else {
                res.status(401).json({ success: false, message: 'Invalid credentials' });
            }
        })
        .catch(err => res.status(500).json(err));
});

// Configure Google strategy
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:3001/auth/google/callback'
}, async (accessToken, refreshToken, profile, done) => {
    try {
        let user = await UserModel.findOne({ googleId: profile.id }); 
        if (!user) {
            user = new UserModel({
                name: profile.displayName,
                email: profile.emails[0].value,
                googleId: profile.id
            });
            await user.save(); // Save to MongoDB
        }
        done(null, user); // Return the user object
    } catch (err) {
        done(err, null); // Handle error
    }
}));

// Serialize user into session
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// Deserialize user from session
passport.deserializeUser(async (id, done) => {
    try {
        const user = await UserModel.findById(id);
        done(null, user);
    } catch (err) {
        done(err, null);
    }
});

// Nodemailer configuration for sending emails
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // App Password or regular password if 2FA is not enabled
    },
});

// Endpoint for sending an email
app.post('/send-query-email', (req, res) => {
    console.log("Received a POST request to /send-query-email");
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.RECIPIENT_EMAIL,
        subject: 'New Query Submitted',
        text: `A new query has been submitted by: ${email}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ error: 'Failed to send email' });
        }
        console.log('Email sent:', info.response);
        res.status(200).json({ message: 'Email sent successfully!' });
    });
});

app.post('/send-recycle-email', (req, res) => {
    console.log("Received a POST request to /send-recycle-email");
    const { name, email, location, items } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.RECIPIENT_EMAIL,
        subject: 'New Recycle Form Submission',
        text: `
            New form submission details:
            
            Name: ${name}
            Email: ${email}
            Location: ${location}
            Items to Recycle: ${items}
        `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ error: 'Failed to send email' });
        }
        console.log('Email sent:', info.response);
        res.status(200).json({ message: 'Email sent successfully!' });
    });
});

app.post('/reset-password/:id', (req, res) => {
    const { id } = req.params; // Get the user ID from the URL parameters
    const { password } = req.body; // Get the new password from the request body

    // Hash the password before storing it in the database
    bcrypt.hash(password, 10)
        .then(hash => {
            // Update the user's password in the database
            UserModel.findByIdAndUpdate({ _id: id }, { password: hash })
                .then(() => res.send({ Status: "Success" }))
                .catch(err => res.send({ Status: "Error updating password", Error: err }));
        })
        .catch(err => res.send({ Status: "Error hashing password", Error: err }));
});

app.post('/forgot-password', (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    // Example: Find the user and send a reset password email (dummy response here)
    UserModel.findOne({ email })
        .then(user => {
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.json({ message: 'Reset link sent (dummy response)' });
        })
        .catch(err => res.status(500).json(err));
});

// Start the server
app.listen(3001, () => {
    console.log("Server is running on http://localhost:3001");
});
