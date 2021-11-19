const express = require('express')
const router = express.Router()

const { forwardAuthenticated } = require('../config/db/auth');

const HomeController = require('../app/controllers/HomeController')

router.post('/blogusers', HomeController.blogusers)

router.get('/logout', HomeController.logout)
router.post('/register', forwardAuthenticated, HomeController.register)
router.post('/textlogin', forwardAuthenticated, HomeController.textlogin)

router.get('/:slug', HomeController.blogs)

router.get('/', HomeController.index)
module.exports = router