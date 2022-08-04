const express = require('express')
const router = express.Router()
const passport = require('passport')

const url = process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : ''

// @desc    Authenticate with Google
// @route   GET /auth/google
router.get('/google', passport.authenticate('google', {scope: ['profile']}))

// @desc    Google auth callback
// @route   GET /auth/google/callback
router.get('/google/callback', passport.authenticate('google', { failureRedirect: url + '/'}), (req, res) => {
    res.redirect(url + '/dashboard')
})

// @desc    Log out user
// @route   GET /auth/logout

router.get('/logout', (req, res) => {
    req.logout((err) => {
        if(err) {
            return next(err)
        }
    })
    res.redirect('/')
})

module.exports = router