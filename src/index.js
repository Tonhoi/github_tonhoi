const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const methodOverride = require('method-override')
const SortMiddleware = require('./app/middleware/sortMiddleware')

const port = process.env.PORT || 3000
const route = require('./routes')
const db = require('./config/db')

// connect to db
db.connect()

app.use(express.static(path.join(__dirname, '/public')))

app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

app.use(methodOverride('_method'))

// custom Middleware
app.use(SortMiddleware)

app.use(morgan('combined'))


app.engine('hbs', handlebars({
  extname:'hbs', 
  defaultLayout:'main.hbs',
  helpers: require('./helpers/handlebars')
}));

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))

route(app)




app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})