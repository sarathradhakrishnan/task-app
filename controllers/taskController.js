const express = require('express')
var router = express.Router()
const mongoose = require('mongoose')
const task = mongoose.model('Task')

router.get('/',(req,res)=>{
    res.render('task/addEdit',{
        viewTitle : "Update your to-do list"
    })
})

router.post('/',(req,res)=>{
    addTask(req,res)
})
//function to add task

function addTask(req,res){
    var Task = new task();
    Task.taskName = req.body.taskName;
    Task.taskDesc = req.body.taskDesc;
    Task.save((err,docs)=>{
        if(!err){
            res.redirect("task/list");
        }
        else{
            console.log("Error while saving"+err);
        }
    })
}
router.get('/list',(req,res)=>{
    res.json("List Page")
})
module.exports = router;
