const home = require('./home')
const contactRouter = require('./contact')
const questionRouter = require('./question')
const newsRouter = require('./news')
const newsBlogRouter = require('./newsBlog')
const postRouter = require('./post')

// page admin
const adminHomeRouter = require('./adminHome')
const userManagerRouter = require('./userManager')
function route(app) {
    app.use('/question', questionRouter)
    app.use('/contact', contactRouter)
    
    app.use('/news', newsRouter)
    app.use('/newsBlog', newsBlogRouter)
    app.use('/userManager', userManagerRouter)
    app.use('/homeAdmin', adminHomeRouter)
    app.use('/home', postRouter)
    app.use('/', home)
}

module.exports = route;
