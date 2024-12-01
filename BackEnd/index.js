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
mongoose.connect("mongodb://127.0.0.1:27017/Users")
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

// Passport setup
app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Configure Google strategy
passport.use(new GoogleStrategy({
    clientID: '322280829950-b4vff9cpimna8k4079lre46t447muurn.apps.googleusercontent.com',
    clientSecret: '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',
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

// Endpoint for starting Google login
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Callback endpoint for Google login
app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
        res.redirect('/');
    });

// Endpoint for logging out
app.get('/logout', (req, res) => {
    req.logout((err) => {
        if (err) { return next(err); }
        res.redirect('/');
    });
});

// Nodemailer configuration for sending emails
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'project.eveco@gmail.com', // Your Gmail address
        pass: 'fpky ggwm zmce yjey', // Use an App Password if you have 2FA enabled
    },
});

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

// Endpoint for sending an email
app.post('/send-email', (req, res) => {
    console.log("Received a POST request to /send-email");
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    const mailOptions = {
        from: 'project.eveco@gmail.com',
        to: 'project.eveco@gmail.com', // Replace with recipient's email as needed
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

// Start the server
app.listen(3001, () => {
    console.log("Server is running on http://localhost:3001");
});
