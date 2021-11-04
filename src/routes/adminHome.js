const express = require('express')
const router = express.Router()

const adminController = require('../app/controllers/adminController')


router.post('/store', adminController.store)
router.post('/register', adminController.register)
router.get('/:id/edit', adminController.edit)
router.get('/:id/editRegister', adminController.editRegister)
router.put('/:id', adminController.update)
router.delete('/:id', adminController.delete)
router.get('/handleUser', adminController.handleUser)
router.get('/userManager', adminController.userManager)
router.get('/viewPosts', adminController.viewPosts)
router.get('/:slug', adminController.description)
router.get('/', adminController.adminHome)
module.exports = router