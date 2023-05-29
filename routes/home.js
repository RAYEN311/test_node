const express = require('express')
const homeroutes = express.Router()

// front end code start



homeroutes.get('/' , (req , res)=>{
    res.render('index')
})

// front end code stop
homeroutes.post('/', (req , res , next)=>{
    console.log(req.body.mail)
    var mail = req.body.mail
    var pass = req.body.pass
    res.status(200).render('index', { mail : mail , pass : pass})
    next();
})

module.exports = homeroutes