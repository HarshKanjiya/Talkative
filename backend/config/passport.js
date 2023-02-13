const passport = require('passport')
const googleStrategy = require("passport-google-oauth20").Strategy;
const User = require('../model/userModel')



passport.use(
    new googleStrategy({
        clientID: `${process.env.GOOGLE_CLIENT_ID}`,
        clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
        callbackURL: "/auth/google/callback",
        scope: ["profile", "email"]
    },
        async (_accessToken, _refreshToken, profile, done) => {
            let user = await User.findOne({ email: profile.emails[0].value })
            if (user) {
                return done(null, user);
            }
            else {
                user = await User.create({
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    specialID: profile.id,
                    authType: "google"
                })
                return done(null, user);
            }
        }
    )
)

passport.serializeUser(function (user, done) {
    done(null, user);
});
passport.deserializeUser(async function (user, done) {
    done(null, user);
});
