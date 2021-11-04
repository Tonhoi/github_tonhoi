const express = require('express')
const router = express.Router()

const HomeController = require('../app/controllers/HomeController')

router.post('/register', HomeController.register)
router.post('/login', HomeController.login)
router.get('/', HomeController.index)
module.exports = router