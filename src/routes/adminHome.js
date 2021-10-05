const express = require('express')
const router = express.Router()

const adminController = require('../app/controllers/adminController')


router.get('/', adminController.adminHome)
module.exports = router