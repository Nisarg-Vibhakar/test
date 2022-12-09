
const express = require('express')
const bcrypt = require('bcrypt')
const User = require('../models/usermodel')

const form = (req,res)=>{

    //const hashedPass = req.body.password
    bcrypt.hash(req.body.password , 10, (err,hashedPass)=>{
        if(err){
            res.json({
                error:err
            })
        }
        

           let user = new User ({
        name:req.body.name,
        email:req.body.email,
        phoneno:req.body.phoneno,
        password:hashedPass
    
    })   
    user.save()
    .then(user=>{
        res.render('thankyou')
    })
    .catch(error=>{
        console.log(error)
    })

    })

 
}


module.exports = form