const express = require('express')
var router = express.Router()
const mongoose = require('mongoose')
const task = mongoose.model('Task')



router.get('/',(req,res)=>{
    res.render('task/addEdit',{
        viewTitle : "Add Task",
        btn: 'Submit',
        isUpdate :false,
    });
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
//to display

router.get('/list',(req,res)=>{
    task.find((err,docs) =>{
        if(!err){
            res.render('task/list',{
            list:docs.map(docs => docs.toJSON())
            }
            )
        }
    })
})

//To delete
router.get('/delete/:id',(req,res)=>{
    task.findByIdAndRemove(req.params.id,(err,docs)=>{
        if(!err){
            res.redirect('/task/list')
        }
        else{
            console.log('Error in deleting'+err)
        }
    })
})
// Redirect to Edit Task Page
router.get('/edit/:id', (req, res) => {
    task.findById(req.params.id, (err, doc) => {
        if (!err)
            res.render('task/addEdit', {
                viewTitle: 'Edit Task',
                taskName: doc.taskName,
                taskDesc: doc.taskDesc,
                id: doc.id,
                isUpdate: true,
                btn: 'Update'
            })
        else
            console.log("Error retriving data : ", err);

    })
})

// Edit Task
router.post('/edited/:id', (req, res) => {
    task.findByIdAndUpdate(req.params.id, {
        taskName: req.body.taskName,
        taskDesc: req.body.taskDesc
    }, (err, docs) => {
        if (!err)
            res.redirect('/task/list');
        else
            console.log('Error in Updating Task : ' + err);

    })

})
module.exports = router;
