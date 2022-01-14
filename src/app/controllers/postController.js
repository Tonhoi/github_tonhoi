const slideshow = require('../model/slideshow')
const {MongooseToObject} = require('../../util/mongoose') 
class postController {

    // [GET] / home / :slug
    post(req, res, next) {
        const { user: { fullname, image, role } = {} } = req;
        if (role === 'admin') {
            slideshow.findOne({ slug: req.params.slug })
                .then(slideshow => 
                    res.render('user/post', {
                            slideshow: MongooseToObject(slideshow),
                            fullname,
                            role
                        }),  
                    )
                .catch(next)
        }else {
            slideshow.findOne({ slug: req.params.slug })
                .then(slideshow => 
                    res.render('user/post',
                        {
                            slideshow: MongooseToObject(slideshow),
                            fullname
                        }),  
                    )
                .catch(next)
        }
    }
}

module.exports = new postController;
