const express = require('express')
const router = express.Router()

const adminController = require('../app/controllers/adminController')

// method update
router.put('/:id', adminController.update)


// viewpost
router.post('/store', adminController.store)
router.get('/viewPosts', adminController.viewPosts)
router.get('/trashViewPosts', adminController.trashViewPosts)
router.get('/handleUser', adminController.handleUser)
router.patch('/:id/restore', adminController.restore)
router.delete('/:id/force', adminController.forceDelete)
router.get('/:id/edit', adminController.edit)
// mehtod delte
router.delete('/:id', adminController.delete)



// quản lý người dùng
router.get('/:id/editRegister', adminController.editRegister)
router.delete('/:id/user', adminController.deleteUser)
router.get('/userManager', adminController.userManager)
// method create
router.post('/register', adminController.register)



// quản lý bài viết
router.delete('/:id/posts', adminController.deletePosts)
router.get('/managerPost', adminController.managerPost)
router.get('/:id/editPost', adminController.editPost)



// slug view
router.get('/:slug', adminController.description)
router.get('/user/:infoUser', adminController.infoUser)
router.get('/user/blog/:slug', adminController.infodescription)


router.get('/', adminController.adminHome)

module.exports = router