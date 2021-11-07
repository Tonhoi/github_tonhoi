const slideshow = require('../model/slideshow')
const loginRegister = require('../model/loginRegister')
const {multipleMongooseToObject} = require('../../util/mongoose') 

class HomeController {

    // [GET] / news
    index(req, res, next) {
        slideshow.find({})
            .then(slideshow => {
                res.render('user/home', {
                    slideshow:multipleMongooseToObject(slideshow)
                })
            })
            .catch(error => next(error))
    }

    // [POST] register

    register(req, res, next) {
        const Loginregister = new loginRegister(req.body)
        Loginregister.save()
        .then(() => res.redirect('/'))
        .catch(error => {})
    }

    login(req, res, next) {

        const username = req.body.username
        const password = req.body.password

        const Usename = loginRegister.findOne({username:username})

        if(Usename.password === password) {
            res.status(201).render('/')
        }else {
            res.send('Mày đã nhập sai -_-')
        }

    }

    writeBlogs(req, res) {
        res.render('user/writeBlogs', {
            layout: 'blogs'
        })
    }

    contact(req, res) {
        res.render('user/contact')
    }

    system(req, res) {
        res.render('user/system')
    }


}

module.exports = new HomeController;