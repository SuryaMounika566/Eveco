require("dotenv").config();
const express = require("express");
const app=express();
const cors = require("cors");
require("./db/conn")
const PORT= 6005;
const session = require("express-session");
const passport = require("passport");
const OAuth2Strategy = require("passport-google-oauth2").Strategy;
const userdb = require("./model/userSchema")

const clientid = "322280829950-b4vff9cpimna8k4079lre46t447muurn.apps.googleusercontent.com"
const clientsecret = "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"

app.use(cors({
    origin : "http://localhost:3000",
    methods:"GET,POST,PUT,DELETE",
    credentials:true
}));
app.use(express.json());

app.use(session({
    secret:"1234hmnr",
    resave:false,
    saveUninitialized:true
}))


app.get("/",(req,res)=>{
    res.status(200).json("server start")
});

//setup passport
app.use(passport.initialize());
app.use(passport.session());

passport.use(
    new OAuth2Strategy({
        clientID:clientid,
        clientSecret:clientsecret,
        callbackURL:"/auth/google/callback",
        scope:["profile","email"]
    },
    async(accessToken,refreshToken,profile,done)=>{
        console.log("profile",profile)
        try{
            let user = await userdb.findOne({googleId:profile.id});
            if(!user){
                user = new userdb({
                    googleId:profile.id,
                    displayName:profile.displayName,
                    email:profile.emails[0].value,
                    image:profile.photos[0].value
                });

                await user.save();
            }
        }catch(error){
            return done(error,null)
        }
    }
    )
)

passport.serializeUser((user,done)=>{
    done(null,user);
})

passport.deserializeUser((user,done)=>{
    done(null,user);
})

//initial google auth login
app.get("/auth/google",passport.authenticate("google",{scope:["profile","email"]}));

app.get("/auth/google/callback", passport.authenticate("google",{
    successRedirect:"http://localhost:3000/HomePage",
    failureRedirect:"http://localhost:3000/LoginPage"
}))

app.listen(PORT,()=>{
    console.log(`server start at port no ${PORT}`)
})