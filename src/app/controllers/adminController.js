const slideshow = require('../model/slideshow')
const loginRegister = require('../model/loginRegister')
const {multipleMongooseToObject} = require('../../util/mongoose') 
const {MongooseToObject} = require('../../util/mongoose')
const express = require('express');
const router = express.Router();
class adminController {

    // [GET] / news
    adminHome(req, res) {
        res.render('admin/homeAdmin', {
            layout: 'admin'
        })
    }

    userManager(req, res) {
        loginRegister.find({})
        .then(loginRegister => {
            res.render('admin/userManager', {
                loginRegister:multipleMongooseToObject(loginRegister),
                layout: 'admin'
            })
        })
        .catch(error => next(error))
    }

    handleUser(req, res) {
        res.render('admin/handleUser', {
            layout: 'admin'
        })
    }

    managerPost(req, res) {
        res.render('admin/managerPost', {
            layout: 'admin'
        })
    }

   


    // [GET] slide
    edit(req, res, next) {
        slideshow.findById(req.params.id)
            .then(slideshow => res.render('admin/edit', {
                layout: 'admin',
                slideshow:MongooseToObject(slideshow)
            }))

            .catch(next)
    }

    editRegister(req, res, next) {
        loginRegister.findById(req.params.id)
        .then(loginRegister => res.render('admin/editRegister', {
            layout: 'admin',
            loginRegister:MongooseToObject(loginRegister)
        }))

        .catch(next)
    }

    // [PUT]
    update(req, res, next) {
        slideshow.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/homeAdmin/viewPosts'))
            .catch(next)
        loginRegister.updateOne({ _id: req.params.id }, req.body)
        .then(() => res.redirect('/homeAdmin/userManager'))
        .catch(next)
    }

     // [DELETE] 
    delete(req, res, next) {
        slideshow.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
        // loginRegister.delete({ _id: req.params.id })
        // .then(() => res.redirect('back'))
        // .catch(next)
    }

    // [DELETE]
    forceDelete(req, res, next) {
        slideshow.deleteOne({ _id: req.params.id })
        .then(() => res.redirect('back'))
        .catch(next)
    }

    
    viewPosts(req, res) {

        Promise.all([slideshow.find({}).sortable(req), 
            slideshow.countDocumentsDeleted()])
            .then(([slideshow, deletedSlide]) =>
                res.render('admin/viewPosts', {
                    deletedSlide,
                    slideshow:multipleMongooseToObject(slideshow),
                    layout: 'admin'
                })
            )
            .catch(error => next(error))


        // slideshow.find({})
        //     .then(slideshow => {
        //         res.render('admin/viewPosts', {
        //             slideshow:multipleMongooseToObject(slideshow),
        //             layout: 'admin'
        //         })
        //     })
        //     .catch(error => next(error))
    }

    trashViewPosts(req, res) {
        slideshow.findDeleted({})
            .then(slideshow => {
                res.render('admin/trashViewPosts', {
                    slideshow:multipleMongooseToObject(slideshow),
                    layout: 'admin'
                })
            })
        .catch(error => next(error))
    }

    
    store(req, res, next) {
       const slide = new slideshow(req.body)
       slide.save()
        .then(() => res.redirect('/homeAdmin'))
        .catch(error => {

        })
    }

    // [PATCH] restore
    restore(req, res, next) {
        slideshow.restore({ _id: req.params.id })
        .then(() => res.redirect('back'))
        .catch(next)
    }

    register(req, res, next) {
        const register = new loginRegister(req.body)
        register.save()
         .then(() => res.redirect('/homeAdmin/userManager'))
         .catch(error => {
 
         })
     }

    description(req, res, next) {
        slideshow.findOneWithDeleted({ slug: req.params.slug })
            .then(slideshow => 
                res.render('admin/description', {
                    slideshow: MongooseToObject(slideshow),
                    layout: 'admin',
                })
                )
            .catch(next)
            
    }

}

module.exports = new adminController;