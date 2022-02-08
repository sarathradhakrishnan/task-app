const  mongoose  = require("mongoose")

mongoose.connect('mongodb+srv://user1:user1@cluster0.pirbs.mongodb.net/Cluster0?retryWrites=true&w=majority',{useNewUrlParser : true}, (err) =>{
    if(!err)
    {
        console.log('MongoDB succesfully connected')
    }
    else
        console.log('Error in mongoDB : '+err)
})


require('./task.model')