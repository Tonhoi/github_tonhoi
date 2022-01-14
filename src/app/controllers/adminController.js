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
        const { user: { role, fullname } = {} } = req;
        if (role === 'admin') {
            res.render('admin/homeAdmin', {
                layout: 'admin',
                fullname
            })
        }else {
            res.render('user/error', {
                layout: 'login'
            })
        }
    }

    userManager(req, res) {
        const { user: { role, fullname } = {} } = req;
        if (role === 'admin') {
            Promise.all([loginRegister.find({}).sortable(req), 
                loginRegister.countDocumentsDeleted()])
                .then(([loginRegister, deleteusers]) =>
                    res.render('admin/userManager', {
                        deleteusers,
                        loginRegister:multipleMongooseToObject(loginRegister),
                        layout: 'admin',
                        fullname
                    })
                )
                .catch(error => next(error))
        }else {
            res.render('user/error', {
                layout: 'login'
            })
        }
    }


    // search
    async getUser(req, res, next) {
        let payload = req.body.payload.trim()

        console.log(payload)
        let search = await loginRegister.find({fullname: {$regex: new RegExp('^' + payload + '.*', 'i')}}).exec()

        search = search.slice(0, 10)
        res.send({payload: search})
    }

    trashUserManager(req, res) {
        const { user: { role, fullname } = {} } = req;
        if (role === 'admin') {
            loginRegister.findDeleted({})
                .then(loginRegister => {
                    res.render('admin/trashUserManager', {
                        loginRegister:multipleMongooseToObject(loginRegister),
                        layout: 'admin',
                        fullname
                    })
                })
            .catch(error => next(error))
        }else {
            res.render('user/error', {
                layout: 'login'
            })
        }
    }

    handleUser(req, res) {
        const { user: { role, fullname } = {} } = req;
        if (role === 'admin') {
            res.render('admin/handleUser', {
                layout: 'admin',
                fullname
            })
        }else {
            res.render('user/error', {
                layout: 'login'
            })
        }
    }

    managerPost(req, res) {
        const { user: { role, fullname } = {} } = req;
        if (role === 'admin') {
            Promise.all([blogUser.find({}).sortable(req), 
                blogUser.countDocumentsDeleted()])
                .then(([blogUser, deleteblogs]) =>
                    res.render('admin/managerPost', {
                        deleteblogs,
                        blogUser:multipleMongooseToObject(blogUser),
                        layout: 'admin',
                        fullname
                    })
                )
                .catch(error => next(error))
        }else {
            res.render('user/error', {
                layout: 'login'
            })
        }
    }

    trashManagerPost(req, res) {
        const { user: { role, fullname } = {} } = req;
        if (role === 'admin') {
            blogUser.findDeleted({})
                .then(blogUser => {
                    res.render('admin/trashManagerPost', {
                        blogUser:multipleMongooseToObject(blogUser),
                        layout: 'admin',
                        fullname
                    })
                })
            .catch(error => next(error))
        }else {
            res.render('user/error', {
                layout: 'login'
            })
        }
    }



    // [GET] slide
    edit(req, res, next) {
        const { user: { role, fullname } = {} } = req;
        if (role === 'admin') {
            slideshow.findById(req.params.id)
                .then(slideshow => res.render('admin/edit', {
                    layout: 'admin',
                    slideshow:MongooseToObject(slideshow),
                    fullname
                }))

                .catch(next)
        }else {
            res.render('user/error', {
                layout: 'login'
            })
        }
    }

    editPost(req, res, next) {
        const { user: { role, fullname } = {} } = req;
        if (role === 'admin') {
            blogUser.findById(req.params.id)
                .then(blogUser => res.render('admin/editPost', {
                    layout: 'admin',
                    blogUser:MongooseToObject(blogUser),
                    fullname
                }))

                .catch(next)
        }else {
            res.render('user/error', {
                layout: 'login'
            })
        }
    }

    editRegister(req, res, next) {
        const { user: { role, fullname } = {} } = req;
        if (role === 'admin') {
            loginRegister.findById(req.params.id)
            .then(loginRegister => res.render('admin/editRegister', {
                layout: 'admin',
                loginRegister:MongooseToObject(loginRegister),
                fullname
            }))

            .catch(next)
        }else {
            res.render('user/error', {
                layout: 'login'
            })
        }
    }

    // [PUT]
    update(req, res, next) {
        const { user: { role, fullname } = {} } = req;
        if (role === 'admin') {
            
            slideshow.updateOne({ _id: req.params.id }, req.body)
                .then(() => res.redirect('/homeAdmin/viewPosts'))
                .catch(next)
            loginRegister.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/homeAdmin/userManager'))
            .catch(next)
            blogUser.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/homeAdmin/managerPost'))
            .catch(next)
        }else {
            res.render('user/error', {
                layout: 'login'
            })
        }
    }

     // [DELETE] 
    delete(req, res, next) {
        Promise.all([blogUser.delete({ _id: req.params.id }),
            loginRegister.delete({ _id: req.params.id })])
            .then(([blogUser, loginRegister]) =>
                res.redirect('back')
            )
            .catch(error => next(error))
    }

    deleteSlide(req, res, next) {
        slideshow.delete({ _id:req.params.id })
        .then(slideshow => {
            res.redirect('back')
        })
        .catch(error => next(error))
    }

    // [DELETE]
    forceDelete(req, res, next) {
        Promise.all([blogUser.deleteOne({ _id: req.params.id }),
            loginRegister.deleteOne({ _id: req.params.id })])
            .then(([blogUser, loginRegister]) =>
                res.redirect('back')
            )
            .catch(error => next(error))
    }

    forceDeleteSlide(req, res, next) {
        slideshow.deleteOne({ _id: req.params.id })
        .then(slideshow => {
            res.redirect('back')
        })
        .catch(error => next(error))
    }

    
    viewPosts(req, res, next) {
        const { user: { role, fullname } = {} } = req;
        var page = req.query.page
        if(page) {
            page = parseInt(page)
            if(page < 1 || Number.isNaN(page)) {
                page = 1
            }
            var soluongboqua = (page - 1) * 4

            slideshow.find({}).sortable(req)
            .skip(soluongboqua)
            .limit(4)
            .then(slideshow => {
                res.render('admin/viewPosts', {
                    slideshow:multipleMongooseToObject(slideshow),
                    layout: 'admin',
                    fullname
                })
            })

            .catch(error => next(error))

        }else {
            if (role === 'admin') {
                Promise.all([slideshow.find({}).sortable(req), 
                    slideshow.countDocumentsDeleted()])
                    .then(([slideshow, deletedSlide]) =>
                        res.render('admin/viewPosts', {
                            deletedSlide,
                            slideshow:multipleMongooseToObject(slideshow),
                            layout: 'admin',
                            fullname
                        })
                        
                    )
                    .catch(error => next(error))
            }else {
                res.render('user/error', {
                    layout: 'login'
                })
            }
        }
    }


    async GetViewPosts(req, res, next) {
        var getViewPost = await slideshow.find({})
        res.send(getViewPost)
    }


    async getSlide(req, res, next) {
        let payload = req.body.payload.trim()
        let slides = await slideshow.find({name: {$regex: new RegExp('^' + payload + '.*', 'i')}}).exec()
        
        slides = slides.slice(0, 10)
        res.send({payload: slides})
    }

    trashViewPosts(req, res) {
        const { user: { role, fullname } = {} } = req;
        if (role === 'admin') {
            slideshow.findDeleted({})
                .then(slideshow => {
                    res.render('admin/trashViewPosts', {
                        slideshow:multipleMongooseToObject(slideshow),
                        layout: 'admin',
                        fullname
                    })
                })
            .catch(error => next(error))
        }else {
            res.render('user/error', {
                layout: 'login'
            })
        }
    }

    
    store(req, res, next) {
       const slide = new slideshow(req.body)
       slide.save()
        .then(() => res.redirect('/homeAdmin'))
        .catch(error => {})
    }

    // [PATCH] restore
    restore(req, res, next) {

        Promise.all([blogUser.restore({ _id: req.params.id }),
            loginRegister.restore({ _id: req.params.id })])
            .then(([deletedSlide, loginRegister]) =>
                res.redirect('back')
            )
            .catch(error => next(error))
    }

    restoreSlide(req, res, next) {
        slideshow.restore({ _id: req.params.id })
        .then(slideshow => {
            res.redirect('back')
        })
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
        const { user: { role, fullname } = {} } = req;
        if (role === 'admin') {
            slideshow.findOneWithDeleted({ slug: req.params.slug })
                .then(slideshow => 
                    res.render('admin/description', {
                        slideshow: MongooseToObject(slideshow),
                        layout: 'admin',
                        fullname
                    })
                    )
                .catch(next)
        }else {
            res.render('user/error', {
                layout: 'login'
            })
        }
    }

    infoUser(req, res, next) {
        const { user: { role, fullname } = {} } = req;
        if (role === 'admin') {
            loginRegister.findOne({ infoUser: req.params.infoUser })
                .then(loginRegister => 
                    res.render('admin/infoUser', {
                        loginRegister: MongooseToObject(loginRegister),
                        layout: 'admin',
                        fullname
                    })
                    )
                .catch(next)
        }else {
            res.render('user/error', {
                layout: 'login'
            })
        }
    }

    infodescription(req, res, next) {
        const { user: { role, fullname } = {} } = req;
        if (role === 'admin') {
            blogUser.findOne({ slug: req.params.slug })
                .then(blogUser => 
                    res.render('admin/infodescription', {
                        blogUser: MongooseToObject(blogUser),
                        layout: 'admin',
                        fullname
                    })
                    )
                .catch(next)
        }else {
            res.render('user/error', {
                layout: 'login'
            })
        }    
    }

}

module.exports = new adminController;