require('./models/db.js')
const express = require('express')
const taskController = require('./controllers/taskController')
const path = require('path')
const exphbs = require('express-handlebars')
const bodyparser = require('body-parser')

var app = express();
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

app.set('views',path.join(__dirname,'/views/'))
app.engine('hbs',exphbs.engine({extname:'hbs',defaultLayout:'mainLayout',layputsDir: __dirname + '/views/layouts'}))
app.set('view engine','hbs')

app.listen(5000,()=>{
    console.log('Express Server Started')
})

app.use('/task',taskController)