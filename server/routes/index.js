const express = require('express')
const router = express.Router()
const {ensureAuth, ensureGuest} = require('../middleware/auth')

// @desc    Login/landing page
// @route   GET /
router.get('/api/login', ensureGuest, (req, res) => {
    res.send('Login test')
})

// @desc    Dashboard
// @route   GET /dashboard
router.get('/dashboard', ensureAuth, (req, res) => {
    res.send('Dashboard')
})

module.exports = router