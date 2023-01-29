const passport = require('passport')
const passportGoolgeAuth = require("passport-google-oauth20")
const User = require('../model/userModel')


let googleStrategy = passportGoolgeAuth.Strategy;

passport.use(
    new googleStrategy({
        clientID: `${process.env.GOOGLE_CLIENT_ID}`,
        clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
        callbackURL: "/auth/google/callback",
        scope: ["profile", "email"]
    },
        async (_accessToken, _refreshToken, profile, done) => {
            const user = await User.findByOne({ email: profile.emails[0].value })
            if (user) {
                return done(null, user);
            }
            else {
                const newUser = await User.create({
                    name: profile.name,
                    email: profile.emails[0].value,
                    googleID: profile.id
                })
                return done(null, newUser);
            }
        }
    )
)

passport.serializeUser(function (user, done) {
    done(null, user.googleID);
});
passport.deserializeUser( async function (user, done) {
    const user = await User.findOne({ googleID : user.googleID })
    done(null, user);
});
