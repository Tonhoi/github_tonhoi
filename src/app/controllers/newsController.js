const slideshow = require('../model/slideshow')
const {multipleMongooseToObject} = require('../../util/mongoose') 
class newsController {
    // [GET] / news
    news(req, res) {
        const { user: { fullname, image, role } = {} } = req;

        if (role === 'admin') {
            slideshow.find({classify: 5})
                .then(slideshow5 => {
                    res.render('user/news', {
                        slideshow5:multipleMongooseToObject(slideshow5),
                        fullname,
                        image,
                        role,
                    })
                })
            .catch(error => next(error))
        }else {
            slideshow.find({classify: 5})
                .then(slideshow5 => {
                    res.render('user/news', {
                        slideshow5:multipleMongooseToObject(slideshow5),
                        fullname,
                        image,
                    })
                })
            .catch(error => next(error))
        }
    }
}

module.exports = new newsController;