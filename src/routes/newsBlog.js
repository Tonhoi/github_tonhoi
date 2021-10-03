const express = require('express')
const router = express.Router()

const questionController = require('../app/controllers/questionController')


router.use('/', questionController.newsBlog)
module.exports = router