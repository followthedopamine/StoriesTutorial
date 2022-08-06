const e = require('express')
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

// @desc    Get story by id
// @route   GET /api/stories/:id

router.get('/:id', ensureAuth, async (req, res) => {
    try {
        const story = await Story.findOne({_id: req.params.id})
        .populate({
            path: 'user',
            model: "User"
        })
        .sort({createdAt: 'desc'})
        .lean()
        /*if(story.user._id != req.user.id) {
            res.redirect('/')
        } else {*/
            res.json(story)
        //}
        
    } catch (err) {
        console.error(err)
    }

})

// @desc    Edit story by id
// @route   PUT /api/stories/:id

router.post('/edit/:id', ensureAuth, async (req, res) => {
    try {

        let story = await Story.findById(req.params.id).lean()

        if(!story) {
            return res.send('Error 404')
        }

        if(story.user != req.user.id) {
            res.redirect(url + '/dashboard')
        } else {
            story = await Story.findOneAndUpdate({_id: req.params.id}, req.body, {
                new: true,
                runValidators: true
            })

            res.redirect(url + '/dashboard')
        }
    } catch (err) {
        console.error(err)
    }
})

// @desc    Delete story by id
// @route   DELETE /api/stories/:id

router.post('/delete/:id', ensureAuth, async (req, res) => {
    try {
        await Story.remove({_id: req.params.id})
        res.redirect(url + '/dashboard')
    } catch (err) {
        console.error(err)
    }
})

module.exports = router