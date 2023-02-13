const express = require('express');
const passport = require('passport');
const sendToken = require('../utils/JWTtoken');
const jwt = require("jsonwebtoken");


const router = express.Router()


router.get('/login/success', (req, res) => {
    if (req.user) {
        const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET_KEY, {
            expiresIn: process.env.JWT_EXPIRE,
        })

        const options = {
            maxAge: new Date(
                Date.now() + 432000000
            ),
            httpOnly: true,
            secure: true,
            sameSite: "none"
        };

        return res.status(201).cookie("token", token, options).json({
            success: true,
            user: req.user,
            token,
        })
    }
    else {
        return res.status(401).json({
            success: false,
            message: 'Not authorized!'
        })
    }
})
router.get('/login/failed', (req, res) => {
    res.status(401).json({
        success: false,
        message: 'Login failed!'
    })
})

router.get('/google/callback', passport.authenticate("google", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "/login/failed"
}))

router.get('/google', passport.authenticate('google', ["profile", "email"]))
router.get('/logout', (req, res) => {
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect(process.env.CLIENT_URL)
    });
})

module.exports = router;

