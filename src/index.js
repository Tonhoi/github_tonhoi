const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = process.env.PORT || 3000
const route = require('./routes')

app.use(express.static(path.join(__dirname, '/public')))

app.use(morgan('combined'))


app.engine('hbs', handlebars({extname:'hbs', defaultLayout:'main.hbs'}));
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

route(app)




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})