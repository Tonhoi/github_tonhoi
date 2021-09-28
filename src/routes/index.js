const home = require('./home')
const contactRouter = require('./contact')
const questionRouter = require('./question')
const newsRouter = require('./news')
function route(app) {
    app.use('/question', questionRouter)
    app.use('/contact', contactRouter)
    app.use('/news', newsRouter)
    app.use('/', home)
}

module.exports = route;
