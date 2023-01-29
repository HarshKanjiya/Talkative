const passport = require('passport')
const googleStrategy = require("passport-google-oauth20").Strategy ;
const User = require('../model/userModel')



passport.use(
    new googleStrategy({
        clientID: `${process.env.GOOGLE_CLIENT_ID}`,
        clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
        callbackURL: "/auth/google/callback",
        scope: ["profile", "email"]
    },
        async (_accessToken, _refreshToken, profile, done) => {
            const user = await User.findOne({ email: profile.emails[0].value })
            if (user) {
                return done(null, user);
            }
            else {
                const newUser = await User.create({
                    name: profile.displayName ,
                    email: profile.emails[0].value,
                    googleID: profile.id,
                    password:profile.id
                })
                return done(null, newUser);
            }
        }
    )
)

passport.serializeUser(function (user, done) {
    done(null, user);
});
passport.deserializeUser( async function (user, done) {
    done(null, user);
});
