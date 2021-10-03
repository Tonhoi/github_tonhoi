const express = require('express')
const router = express.Router()

const adminController = require('../app/controllers/adminController')


router.use('/', adminController.userManager)
module.exports = router