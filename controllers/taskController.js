const express = require('express')
var router = express.Router()

router.get('/',(req,res)=>{
    res.write('sample')
})

module.exports = router;
