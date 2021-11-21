const slideshow = require('../model/slideshow')
const loginRegister = require('../model/loginRegister')
const blogUser = require('../model/blogUser')
const {multipleMongooseToObject} = require('../../util/mongoose') 
const {MongooseToObject} = require('../../util/mongoose')
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
class adminController {

    // [GET] / news
    adminHome(req, res) {
        res.render('admin/homeAdmin', {
            layout: 'admin',
        })
    }

    userManager(req, res) {
        Promise.all([loginRegister.find({}).sortable(req), 
            loginRegister.countDocumentsDeleted()])
            .then(([loginRegister, deleteusers]) =>
                res.render('admin/userManager', {
                    deleteusers,
                    loginRegister:multipleMongooseToObject(loginRegister),
                    layout: 'admin'
                })
            )
            .catch(error => next(error))
    }

    trashUserManager(req, res) {
        loginRegister.findDeleted({})
            .then(loginRegister => {
                res.render('admin/trashUserManager', {
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

        Promise.all([blogUser.find({}).sortable(req), 
            blogUser.countDocumentsDeleted()])
            .then(([blogUser, deleteblogs]) =>
                res.render('admin/managerPost', {
                    deleteblogs,
                    blogUser:multipleMongooseToObject(blogUser),
                    layout: 'admin'
                })
            )
            .catch(error => next(error))
    }

    trashManagerPost(req, res) {
        blogUser.findDeleted({})
            .then(blogUser => {
                res.render('admin/trashManagerPost', {
                    blogUser:multipleMongooseToObject(blogUser),
                    layout: 'admin'
                })
            })
        .catch(error => next(error))
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

    editPost(req, res, next) {
        blogUser.findById(req.params.id)
            .then(blogUser => res.render('admin/editPost', {
                layout: 'admin',
                blogUser:MongooseToObject(blogUser)
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
        blogUser.updateOne({ _id: req.params.id }, req.body)
        .then(() => res.redirect('/homeAdmin/managerPost'))
        .catch(next)
    }

     // [DELETE] 
    delete(req, res, next) {

        Promise.all([slideshow.delete({ _id: req.params.id }), 
            blogUser.delete({ _id: req.params.id }),
            loginRegister.delete({ _id: req.params.id })])
            .then(([slideshow, blogUser, loginRegister]) =>
                res.redirect('back')
            )
            .catch(error => next(error))
    }

    // [DELETE]
    forceDelete(req, res, next) {
        Promise.all([slideshow.deleteOne({ _id: req.params.id }), 
            blogUser.deleteOne({ _id: req.params.id }),
            loginRegister.deleteOne({ _id: req.params.id })])
            .then(([slideshow, blogUser, loginRegister]) =>
                res.redirect('back')
            )
            .catch(error => next(error))
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
        .catch(error => {})
    }

    // [PATCH] restore
    restore(req, res, next) {

        Promise.all([slideshow.restore({ _id: req.params.id }), 
            blogUser.restore({ _id: req.params.id }),
            loginRegister.restore({ _id: req.params.id })])
            .then(([slideshow, deletedSlide, loginRegister]) =>
                res.redirect('back')
            )
            .catch(error => next(error))
    }

    register(req, res, next) {
        const { fullname, email, username, password} = req.body;
        const newUser = new loginRegister({
            fullname,
            email,
            username,
            password
            });
    
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                newUser.password = hash;
                newUser
                .save()
                .then(user => {
                    res.redirect('/homeAdmin/userManager');
                })
                .catch(err => console.log(err));
            });
        });
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

    infoUser(req, res, next) {
        loginRegister.findOne({ infoUser: req.params.infoUser })
            .then(loginRegister => 
                res.render('admin/infoUser', {
                    loginRegister: MongooseToObject(loginRegister),
                    layout: 'admin',
                })
                )
            .catch(next)     
    }

    infodescription(req, res, next) {
        blogUser.findOne({ slug: req.params.slug })
            .then(blogUser => 
                res.render('admin/infodescription', {
                    blogUser: MongooseToObject(blogUser),
                    layout: 'admin',
                })
                )
            .catch(next)     
    }

}

module.exports = new adminController;