class questionController {
    // [GET] / news
    question(req, res) {
        res.render('user/question')
    }
}

module.exports = new questionController;