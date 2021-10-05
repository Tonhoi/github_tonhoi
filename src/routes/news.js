const express = require('express')
const router = express.Router()

const newsController = require('../app/controllers/newsController')
router.get('/', newsController.news)
module.exports = router