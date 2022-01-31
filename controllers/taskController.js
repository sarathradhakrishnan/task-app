const express = require('express')
var router = express.Router()

router.get('/',(req,res)=>{
    res.render('task/addEdit',{
        viewTitle : "Update your to-do list"
    })
})

module.exports = router;
