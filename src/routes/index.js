const home = require('./home')
const contactRouter = require('./contact')
const systemRouter = require('./system')
const questionRouter = require('./question')
const newsRouter = require('./news')
const newsBlogRouter = require('./newsBlog')
const postRouter = require('./post')

// page admin
const adminHomeRouter = require('./adminHome')
const userManagerRouter = require('./userManager')
const handleUserRouter = require('./handleUser')
function route(app) {
    // page admin
    app.use('/userManager', userManagerRouter)
    app.use('/homeAdmin', adminHomeRouter)
    app.use('/handleUser', handleUserRouter)
    
    app.use('/question', questionRouter)
    app.use('/news', newsRouter)
    app.use('/newsBlog', newsBlogRouter)
    app.use('/home', postRouter)
    
    app.use('/contact', contactRouter)
    app.use('/system', systemRouter)
    app.use('/', home)
}

module.exports = route;
