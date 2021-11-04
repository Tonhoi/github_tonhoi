const express = require('express')
const router = express.Router()

const postController = require('../app/controllers/postController')

router.get('/:slug', postController.post)
module.exports = router