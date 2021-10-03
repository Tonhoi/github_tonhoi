class adminController {

    // [GET] / news
    adminHome(req, res) {
        res.render('admin/homeAdmin', {
            layout: 'admin'
        })
    }

    userManager(req, res) {
        res.render('admin/userManager', {
            layout: 'admin'
        })
    }
}

module.exports = new adminController;