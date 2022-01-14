const slideshow = require('../model/slideshow')
const User = require('../model/loginRegister')
const blogUser = require('../model/blogUser')
const {multipleMongooseToObject} = require('../../util/mongoose')
const {MongooseToObject} = require('../../util/mongoose')
const bcrypt = require('bcryptjs');
const passport = require('passport');
const nodemailer = require('nodemailer')

// ramdom router

var cron = require('node-cron');

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
        passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/login',
            failureFlash: true,
        })(req, res, next);
    }

    // logout
    logout(req, res, next) {
        // req.logout();
        req.session.destroy();
        res.redirect('/');
    }

     // [GET] / Index
    index(req, res, next) {        
        const { user: { fullname, image, role } = {} } = req;
        if (role === 'admin') {
            Promise.all([
                slideshow.find({classify: 1}),
                slideshow.find({classify: 21}),
                slideshow.find({classify: 22}),
                slideshow.find({classify: 31}),
                slideshow.find({classify: 32}),
                slideshow.find({classify: 41}),
                slideshow.find({classify: 42}),
                slideshow.find({classify: 5})
            ])
                .then(([slideshow, slideshow21, slideshow22, slideshow31, slideshow32, slideshow41, slideshow42, slideshow5]) =>
                    res.render('user/home', {
                        slideshow:multipleMongooseToObject(slideshow),
                        slideshow21:multipleMongooseToObject(slideshow21),
                        slideshow22:multipleMongooseToObject(slideshow22),
                        slideshow31:multipleMongooseToObject(slideshow31),
                        slideshow32:multipleMongooseToObject(slideshow32),
                        slideshow41:multipleMongooseToObject(slideshow41),
                        slideshow42:multipleMongooseToObject(slideshow42),
                        slideshow5:multipleMongooseToObject(slideshow5),
                        fullname,
                        image,
                        role
                    })
                )
                .catch(error => next(error))
        }else {
            Promise.all([
                slideshow.find({classify: 1}),
                slideshow.find({classify: 21}),
                slideshow.find({classify: 22}),
                slideshow.find({classify: 31}),
                slideshow.find({classify: 32}),
                slideshow.find({classify: 41}),
                slideshow.find({classify: 42}),
                slideshow.find({classify: 5})
            ])
                .then(([slideshow, slideshow21, slideshow22, slideshow31, slideshow32, slideshow41, slideshow42, slideshow5]) =>
                    res.render('user/home', {
                        slideshow:multipleMongooseToObject(slideshow),
                        slideshow21:multipleMongooseToObject(slideshow21),
                        slideshow22:multipleMongooseToObject(slideshow22),
                        slideshow31:multipleMongooseToObject(slideshow31),
                        slideshow32:multipleMongooseToObject(slideshow32),
                        slideshow41:multipleMongooseToObject(slideshow41),
                        slideshow42:multipleMongooseToObject(slideshow42),
                        slideshow5:multipleMongooseToObject(slideshow5),
                        fullname,
                        image,
                    })
                )
                .catch(error => next(error))
        }

    }

    writeBlogs(req, res) {
        const { user: { fullname, image } = {} } = req;
            res.render('user/writeBlogs', {
                layout: 'blogs',
                fullname,
                image,
            })
    }

    blogusers(req, res, next) {
       const blog = new blogUser(req.body)
       blog.save()
        .then(() => res.redirect('/me/myblogs'))
        .catch(error => {})
    }

    blogs(req, res, next) {
        const { user: { fullname, image, role } = {} } = req;
        if (role === 'admin') {
            blogUser.findOne({ slug: req.params.slug })
            .then(blogUser => 
                res.render('user/newsBlog', {
                    blogUser: MongooseToObject(blogUser),
                    fullname,
                    role
                })
                )
            .catch(next)
        }else {
            blogUser.findOne({ slug: req.params.slug })
                .then(blogUser => 
                    res.render('user/newsBlog', {
                        blogUser: MongooseToObject(blogUser),
                        fullname,
                    })
                    )
                .catch(next)
        }
    }

    myblogs(req, res, next) {

        const { user: { fullname, username, image, role } = {} } = req;
        if (role === 'admin') {
            blogUser.find({username: fullname})
            .then(myBlogs => {
                res.render('user/myblogs', {
                    myBlogs:multipleMongooseToObject(myBlogs),
                    fullname,
                    role,
                    layout: 'blogs'
                })
            })
            .catch(error => next(error))
        }else {
            blogUser.find({username: fullname})
            .then(myBlogs => {
                res.render('user/myblogs', {
                    myBlogs:multipleMongooseToObject(myBlogs),
                    fullname,
                    layout: 'blogs'
                })
            })
            .catch(error => next(error))
        }
    }

    forceDestroy(req, res, next) {
        blogUser.deleteOne({ _id: req.params.id })
        .then(() => res.redirect('back')) 
        .catch(error => next(error))
    }

    // edit

    editMyBlogs(req, res, next) {
        const { user: { role, fullname } = {} } = req;
        if (role === 'admin') {
            blogUser.findById(req.params.id)
                .then(blogUser => res.render('user/editMyBlogs', {
                    layout: 'blogs',
                    blogUser:MongooseToObject(blogUser),
                    fullname,
                    role,
                }))

                .catch(next)
        }else {
            blogUser.findById(req.params.id)
                .then(blogUser => res.render('user/editMyBlogs', {
                    layout: 'blogs',
                    blogUser:MongooseToObject(blogUser),
                    fullname,
                }))

                .catch(next)
        }
    }

    updateMyBlogs(req, res, next) {
        const { user: { role, fullname, image } = {} } = req;
            blogUser.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/myBlogs'))
            .catch(next)
    }

    contact(req, res) {
        const { user: { fullname, image, role } = {} } = req;
        if(role === 'admin') {
            res.render('user/contact', {
                fullname,
                image,
                role
            })
        }else {
            res.render('user/contact', {
                fullname,
                image
            })
        }
    }

    sendmail(req, res, next) {
        console.log(req.body)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'quocloi21072007@gmail.com',
                pass: 'tonthathoi'
            }
        })
        const mailOptions = {
            from: req.body.email,
            to: 'quocloi21072007@gmail.com',
            subject: `Message from ${req.body.email}: ${req.body.subject}`,
            text: req.body.description

        }

        transporter.sendMail(mailOptions, (error, info) => {
            if(error) {
                console.log(error)
                res.send('error')
            }else {
                console.log('email. sent: ' + info.response)
                res.send('success')
            }

        })
    }


    system(req, res) {
        const { user: { fullname, image, email, role } = {} } = req;
        if(role === 'admin') {
            res.render('user/system', {
                fullname,
                image,
                email,
                role
            })
        }else {
            res.render('user/system', {
                fullname,
                image,
                email,
            })
        }
    }

    login(req, res) {
      res.render('user/login', {
        layout: 'login',
      })
    }

    introduce(req, res) {
        res.render('user/introduce', {
            layout: 'main',
        })
    }

    async getPost(req, res, next) {
        let payload = req.body.payload.trim()
        let blog = await blogUser.find({tittle: {$regex: new RegExp('^' + payload + '.*', 'i')}}).exec()
        
        blog = blog.slice(0, 10)
        res.send({payload: blog})
    }
    randomRoute(req, res, next) {
        function randomString(length) {
            var result = '';
            var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            for (var i = length; i > 0; --i) 
                result += chars[Math.floor(Math.random() * chars.length)];
            return result;
          }

        var rString = randomString(12);
        cron.schedule('15,30,45 * * * * *', function(){
            rString = randomString(12);
        }); 
        if(req.params.randomStr === rString)
            res.render("user/error", {
                layout: 'login'
            });
        else
            res.render("user/error", {
                layout: 'login'
            });
    }
}

module.exports = new HomeController;