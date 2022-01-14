const express = require('express')
const router = express.Router()

const adminController = require('../app/controllers/adminController')


// method update
router.put('/:id', adminController.update)


// viewpost
router.post('/store', adminController.store)
router.post('/getUser', adminController.getUser)

router.get('/viewPosts', adminController.viewPosts)
router.post('/GetViewPosts', adminController.GetViewPosts)
router.post('/getSlide', adminController.getSlide)

router.get('/trashViewPosts', adminController.trashViewPosts)
router.get('/handleUser', adminController.handleUser)
router.patch('/:id/restore', adminController.restore)
router.patch('/:id/restoreSlide', adminController.restoreSlide)

router.delete('/:id/force', adminController.forceDelete)
router.delete('/:id/forceSlide', adminController.forceDeleteSlide)

router.get('/:id/edit', adminController.edit)

// mehtod delete
router.delete('/:id', adminController.delete)
router.delete('/:id/deleteSlide', adminController.deleteSlide)



// quản lý người dùng
router.get('/:id/editRegister', adminController.editRegister)
// router.delete('/:id/user', adminController.deleteUser)
router.get('/userManager', adminController.userManager)
// method create
router.post('/register', adminController.register)
router.get('/trashUserManager', adminController.trashUserManager)




// quản lý bài viết
// router.delete('/:id/posts', adminController.deletePosts)
router.get('/managerPost', adminController.managerPost)
router.get('/:id/editPost', adminController.editPost)
router.get('/trashManagerPost', adminController.trashManagerPost)




// slug view
router.get('/:slug', adminController.description)
router.get('/user/:infoUser', adminController.infoUser)
router.get('/user/blog/:slug', adminController.infodescription)




router.get('/', adminController.adminHome)

module.exports = router