require('./models/db.js')

const express = require('express')

var app = express();

app.listen(5000,()=>{
    console.log('Express Server Started')
})

app.use('/task',taskController)