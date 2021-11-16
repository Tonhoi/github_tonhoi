const slideshow = require('../model/slideshow')
const User = require('../model/loginRegister')
const blogUser = require('../model/blogUser')
const {multipleMongooseToObject} = require('../../util/mongoose')
const {MongooseToObject} = require('../../util/mongoose')
const bcrypt = require('bcryptjs');
const passport = require('passport');

class HomeController {

    // [POST] register

    register(req, res, next) {
        const { fullname, email, username, password, password2 } = req.body;
        const newUser = new User({
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
                    req.flash(
                    'success_msg',
                    'You are now registered and can log in'
                    );
                    res.redirect('/login');
                })
                .catch(err => console.log(err));
            });
        });
    }


    // login
    textlogin(req, res, next) {
        const username = req.body.username
        const password = req.body.password
        if (username === 'admin' && password === 'admin') {
            res.redirect('/homeAdmin');
        }else {
            passport.authenticate('local', {
                successRedirect: '/',
                failureRedirect: '/login',
                failureFlash: true
            })(req, res, next);
        }
    }

    // logout
    logout(req, res, next) {
        // req.logout();
        req.session.destroy();
        res.redirect('/');
    }

     // [GET] / news
     index(req, res, next) {
         
        const { user: { fullname, image } = {} } = req;
        slideshow.find({})
            .then(slideshow => {
                res.render('user/home', {
                slideshow:multipleMongooseToObject(slideshow),
                fullname,
                image
                })
            })
        .catch(error => next(error))   
    
    }

    writeBlogs(req, res) {
        const { user: { fullname, image } = {} } = req;
        res.render('user/writeBlogs', {
            layout: 'blogs',
            fullname,
            image
        })
    }

    blogusers(req, res, next) {
       const blog = new blogUser(req.body)
       blog.save()
        .then(() => res.redirect('/'))
        .catch(error => {})
    }

    blogs(req, res, next) {
        const { user: { fullname, image } = {} } = req;
        blogUser.findOne({ slug: req.params.slug })
            .then(blogUser => 
                res.render('user/newsBlog', {
                    blogUser: MongooseToObject(blogUser),
                    fullname,
                })
                )
            .catch(next)     
    }

    contact(req, res) {
        const { user: { fullname, image } = {} } = req;
        res.render('user/contact', {
            fullname,
            image
        })
        
    }

    system(req, res) {
        const { user: { fullname, image, email } = {} } = req;
        res.render('user/system', {
            fullname,
            image,
            email
        })
    }

    login(req, res) {
      res.render('user/login', {
        layout: 'login',
      })
    }

}

module.exports = new HomeController;