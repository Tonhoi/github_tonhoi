class newsController {
    // [GET] / news
    news(req, res) {
        res.render('user/news')
    }
}

module.exports = new newsController;