const express = require('express')
const router = express.Router()
const {ensureAuth, ensureGuest} = require('../middleware/auth')
const Story = require('../models/Story')

// @desc    Login/landing page
// @route   GET /
router.get('/api/login', ensureGuest, (req, res) => {
    res.send('Login test')
})

// @desc    Dashboard
// @route   GET /dashboard
router.get('/api/profile', ensureAuth, (req, res) => {
    
    res.json(req.user)
})

router.get('/api/userStories', ensureAuth, async (req, res) => {
    try {
        const stories = await Story.find({user:req.user.id}).lean()
        res.json(stories)
    } catch (err) {
        console.error(err)
    }
})

router.get('/api/publicUserStories/:id', ensureAuth, async (req, res) => {
    try {
        const stories = await Story.find({user:req.params.id, status:"public"}).lean()
        res.json(stories)
    } catch (err) {
        console.error(err)
    }
})

module.exports = router