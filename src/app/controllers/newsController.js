class newsController {
    // [GET] / news
    news(req, res) {
        const { user: { fullname, image } = {} } = req;
        res.render('user/news', {
            fullname,
            image
        })
    }
}

module.exports = new newsController;