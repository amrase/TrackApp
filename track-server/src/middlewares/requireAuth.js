const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = mongoose.model('User')
require('dotenv').config()

const MY_SECRET_KEY= process.env.SECRET_KEY

//next function 
//Authentication part
module.exports = (req,res,next) =>{
    //authorization === 'Bearer token'
    const { authorization } = req.headers;
    if(!authorization){
        //forbiden error
        return res.status(401).send({error:'You must be logged in'})
    }

    const token = authorization.replace('Bearer','')
    jwt.verify(token,MY_SECRET_KEY,async (err,payload)=>{
        // if(err){
        //     return res.status(401).send({error:'You must be logged in.'})
        // }
        // console.log(payload)
        const { userId } = payload
        const user = await User.findById(userId)
        req.user = user;

        //call next middelware
        next();
    })
}