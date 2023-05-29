const express = require('express')
const inforoutes = express.Router()

inforoutes.get('/',(req , res)=>{
    res.send('this is the info page')
})

inforoutes.get('/text', (req , res )=>{ 
    res.send('kshfyuhajkdvfjabdfh sdafhiasdnfjsd')
})

module.exports = inforoutes