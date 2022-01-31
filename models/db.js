const  mongoose  = require("mongoose")

mongoose.connect('mongodb://localhost:27017/taskDB',{useNewUrlParser : true}, (err) =>{
    if(!err)
    {
        console.log('MongoDB succesfully connected')
    }
    else
        console.log('Error in mongoDB : '+err)
})

require('./task.model')