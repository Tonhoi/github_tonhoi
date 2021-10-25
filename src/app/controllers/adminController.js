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

    handleUser(req, res) {
        res.render('admin/handleUser', {
            layout: 'admin'
        })
    }
}

module.exports = new adminController;