const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = mongoose.model('User')

const router = express.Router();

require('dotenv').config()

 const MY_SECRET_KEY= process.env.SECRET_KEY

 console.log(MY_SECRET_KEY)

router.post('/signup',async (req,res)=>{
    const {email,password} = req.body

    try{
        const user = new User({email,password})
        await user.save();
       

        //create jwt token
        const token = jwt.sign({userId: user._id},MY_SECRET_KEY);
        res.send({token})
        console.log(token)
    }
    catch(err){
       return res.status(422).send(err.message)
    }
 
})

module.exports = router;