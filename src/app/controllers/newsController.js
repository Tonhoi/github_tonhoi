class newsController {
    // [GET] / news
    news(req, res) {
        res.render('user/news')
    }
    newsBlog(req, res) {
        res.render('user/newsBlog')
    }
}

module.exports = new newsController;