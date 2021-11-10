const slideshow = require('../model/slideshow')
const {MongooseToObject} = require('../../util/mongoose') 
class postController {

    // [GET] / home / :slug
    post(req, res, next) {
        slideshow.findOne({ slug: req.params.slug })
            .then(slideshow => 
                res.render('user/post',
                    {slideshow: MongooseToObject(slideshow)}),
                )
            .catch(next)
    }
}

module.exports = new postController;
