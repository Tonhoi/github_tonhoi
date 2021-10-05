const express = require('express')
const router = express.Router()

const questionController = require('../app/controllers/questionController')


router.get('/', questionController.question)
module.exports = router