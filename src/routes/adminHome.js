const express = require('express')
const router = express.Router()

const adminController = require('../app/controllers/adminController')


router.post('/store', adminController.store)
router.post('/register', adminController.register)
router.get('/:id/edit', adminController.edit)
router.get('/:id/editRegister', adminController.editRegister)
router.put('/:id', adminController.update)
router.patch('/:id/restore', adminController.restore)
router.delete('/:id', adminController.delete)
router.delete('/:id/force', adminController.forceDelete)

router.get('/trashViewPosts', adminController.trashViewPosts)
router.get('/handleUser', adminController.handleUser)
router.get('/userManager', adminController.userManager)
router.get('/viewPosts', adminController.viewPosts)
router.get('/managerPost', adminController.managerPost)
router.get('/:slug', adminController.description)
router.get('/', adminController.adminHome)
module.exports = router