const express = require('express')
const router = express.Router()

const HomeController = require('../app/controllers/HomeController')


router.use('/', HomeController.contact)
module.exports = router