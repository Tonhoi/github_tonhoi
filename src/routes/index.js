const home = require('./home')
const contactRouter = require('./contact')
const systemRouter = require('./system')
const questionRouter = require('./question')
const newsRouter = require('./news')
const newsBlogRouter = require('./newsBlog')
const postRouter = require('./post')
const writeBlogsRouter = require('./writeBlogs')

// page admin
const adminHomeRouter = require('./adminHome')
function route(app) {
    // page admin
    app.use('/homeAdmin', adminHomeRouter)
    app.use('/writeBlogs', writeBlogsRouter)

    
    app.use('/question', questionRouter)
    app.use('/news', newsRouter)
    app.use('/newsBlog', newsBlogRouter)
    app.use('/home', postRouter)
    
    app.use('/contact', contactRouter)
    app.use('/system', systemRouter)
    app.use('/', home)
}

module.exports = route;
