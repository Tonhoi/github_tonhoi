class adminHomeController {

    // [GET] / news
    adminHome(req, res) {
        res.render('user/home')
    }

}

module.exports = new adminHomeController;