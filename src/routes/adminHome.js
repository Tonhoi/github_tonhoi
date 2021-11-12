const express = require('express')
const router = express.Router()

const adminController = require('../app/controllers/adminController')


// method create
router.post('/store', adminController.store)
router.post('/register', adminController.register)

router.get('/:id/edit', adminController.edit)
router.get('/:id/editRegister', adminController.editRegister)

// method update
router.put('/:id', adminController.update)
router.patch('/:id/restore', adminController.restore)

// mehtod delte
router.delete('/:id', adminController.delete)
router.delete('/:id/force', adminController.forceDelete)
router.delete('/:id/user', adminController.deleteUser)



router.get('/viewPosts', adminController.viewPosts)
router.get('/trashViewPosts', adminController.trashViewPosts)


router.get('/handleUser', adminController.handleUser)
router.get('/userManager', adminController.userManager)
router.get('/managerPost', adminController.managerPost)


// slug view
router.get('/:slug', adminController.description)
router.get('/user/:infoUser', adminController.infoUser)


router.get('/', adminController.adminHome)
module.exports = router