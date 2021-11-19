const slideshow = require('../model/slideshow')
const {multipleMongooseToObject} = require('../../util/mongoose') 
class newsController {
    // [GET] / news
    news(req, res) {
        const { user: { fullname, image } = {} } = req;
        // res.render('user/news', {
        //     fullname,
        //     image
        // })

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

module.exports = new newsController;