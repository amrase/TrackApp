const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = mongoose.model('User')

const router = express.Router();

require('dotenv').config()

const MY_SECRET_KEY= process.env.SECRET_KEY



router.post('/signup',async (req,res)=>{
    const {email,password} = req.body

    try{
        const user = new User({email,password})
        await user.save();
    
        //create jwt token 
        const token = jwt.sign({userId: user._id},MY_SECRET_KEY);
        console.log(user._id)
        res.send({token:token})
    }
    catch(err){
       return res.status(422).send(err.message)
    }
 
})


router.post('/signin',async  (req,res)=>{
    const {email,password} = req.body;

    if(!email || !password){
        return res.status(422).send({error:"Must provise email and password"})
    }

    const user = await User.findOne({email});

    if(!user){
        return res.status(404).send({error:"Invalid password or email"})
    }

    try {
        await user.comparePassword(password)
        const token = jwt.sign({userId:user._id},MY_SECRET_KEY)

        res.send({token})
    }
    catch(err){
        return res.status(422).send({error:'Invalid password or email'})
    }
    



})

module.exports = router;