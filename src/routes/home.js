const express = require('express')
const router = express.Router()

const { forwardAuthenticated } = require('../config/db/auth');

const HomeController = require('../app/controllers/HomeController')

router.get('/introduce', HomeController.introduce)

router.post('/getPost', HomeController.getPost)


router.post('/sendmail', HomeController.sendmail)
router.post('/blogusers', HomeController.blogusers)

router.get('/logout', HomeController.logout)
router.post('/register', forwardAuthenticated, HomeController.register)
router.post('/textlogin', forwardAuthenticated,HomeController.textlogin)


router.get('/blogs/:slug', HomeController.blogs)
router.get('/me/myblogs', HomeController.myblogs)

router.delete('/me/myblogs/:id/forceDestroy', HomeController.forceDestroy)

router.get('/me/myblogs/:id/editMyBlogs', HomeController.editMyBlogs)

router.put('/user/myBlogs/:id', HomeController.updateMyBlogs)





router.get('/:randomStr', HomeController.randomRoute)

router.get('/', HomeController.index)
module.exports = router