
const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const methodOverride = require('method-override')
const SortMiddleware = require('./app/middleware/sortMiddleware')

const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');

const port = process.env.PORT || 3000
const route = require('./routes')
const db = require('./config/db')

// Passport Config
require('./config/db/passport')(passport);

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

// Express session
app.use(
  session({
    secret: 'session secret',
    resave: false,
    saveUninitialized: false,
  })
);


// Passport middleware
app.use(passport.initialize());
app.use(passport.session());


// Connect flash
app.use(flash());

// Global variables
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});



app.engine('hbs', handlebars({
  extname:'hbs', 
  defaultLayout:'main.hbs',
  helpers: require('./helpers/handlebars')
}));

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))

app.use((req, res, next) => {
  res.locals.loggedIn = req.isAuthenticated();
  
  next();
});
route(app)




app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})