const slideshow = require('../model/slideshow')
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

        // res.render('user/home')
    }


    contact(req, res) {
        res.render('user/contact')
    }
}

module.exports = new HomeController;