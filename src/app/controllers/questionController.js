class questionController {
    // [GET] / news
    question(req, res) {
        res.render('user/question')
    }
    newsBlog(req, res) {
        res.render('user/newsBlog')
    }
}

module.exports = new questionController;