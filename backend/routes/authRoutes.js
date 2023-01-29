const express = require('express');
const passport = require('passport');

const router = express.Router()


router.route('login/success').get(async (res, res) => {
    if (req.user) {
        res.status(200).json({ success: true, user: req.user })
    }
    else {
        res.status(401).json({ success: false, message: "Not Authorized!" })
    }
})
router.route('/login/failed').get((req, res) => {
    res.status(401).json({ success: false, message: "Something went Wrong!" })
})

router.route('/logout').get((req, res) => {
    req.logOut({}, (err) => {
        if (err) {
            return res.status(500).json({ success: false, message: "Something went Wrogn!" })
        }
        res.redirect("http://localhost:5173")
    })
})

router.route('/google').get(passport.authenticate("google", ["profile", "email"]))
router.route('/google/callback').get(passport.authenticate(
    "google",
    {
        successRedirect: "http://localhost:5173",
        failureRedirect: "/login/failed"

    }
))

export default router;
