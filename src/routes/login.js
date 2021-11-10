const express = require('express')
const router = express.Router()

const { forwardAuthenticated } = require('../config/db/auth');


const HomeController = require('../app/controllers/HomeController')

router.get('/', HomeController.login)
module.exports = router