const express = require('express');
const passport = require('passport');

const router = express.Router()


router.get('/login/success', (req, res) => {
    if (req.user) {
        res.status(200).json({
            success: true,
            user: req.user
        })
    }
    else {
        res.status(403).json({
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

