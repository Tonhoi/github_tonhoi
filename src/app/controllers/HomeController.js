class HomeController {

    // [GET] / news
    index(req, res) {
        res.render('user/home')
    }
    contact(req, res) {
        res.render('user/contact')
    }

}

module.exports = new HomeController;