const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const userdb = require("../model/userSchema.js");

// Passport configuration for Google OAuth
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback",
    scope: ["profile", "email"]
},
async (accessToken, refreshToken, profile, done) => {
    try {
        // Check if user already exists in the database
        let user = await userdb.findOne({ googleId: profile.id });
        if (!user) {
            // Create a new user if not found
            user = new userdb({
                googleId: profile.id,
                displayName: profile.displayName,
                email: profile.emails[0].value,
                image: profile.photos[0].value
            });
            await user.save(); // Save the new user to the database
        }
        done(null, user); // Proceed with the authenticated user
    } catch (error) {
        done(error, null);
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

// Updated deserializeUser function using await
passport.deserializeUser(async (id, done) => {
    try {
        const user = await userdb.findById(id);
        done(null, user);
    } catch (error) {
        done(error, null);
    }
});
