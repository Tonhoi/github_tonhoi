class questionController {
    // [GET] / news
    question(req, res) {
        const { user: { fullname, image } = {} } = req;
        res.render('user/question', {
            fullname,
            image
        })
    }
    newsBlog(req, res) {
        const { user: { fullname, image } = {} } = req;
        res.render('user/newsBlog', {
            fullname,
            image
        })
    }
}

module.exports = new questionController;