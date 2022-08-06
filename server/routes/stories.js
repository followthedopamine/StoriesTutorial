const express = require('express')
const router = express.Router()
const {ensureAuth, ensureGuest} = require('../middleware/auth')
const Story = require('../models/Story')

const url = process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : ''

// @desc    Process add form
// @route   POST /api/stories/add

router.post('/add', ensureAuth, async (req, res) => {
    try {
        req.body.user = req.user.id 
        await Story.create(req.body)
        res.redirect(url + '/dashboard')
    } catch (err) {
        console.error(err)
    }
})

// @desc    Get public stories
// @route   GET /api/stories

router.get('/', ensureAuth, async (req, res) => {
    try {
        const stories = await Story.find({status:'public'})
        .populate({
            path: 'user',
            model: "User"
        })
        .sort({createdAt: 'desc'})
        .lean()
        
        res.json(stories)
    } catch (err) {
        console.error(err)
    }
    
})

module.exports = router