
//import express
const mongoose = require('mongoose')
const express = require('express')
require('dotenv').config()



const app = express()

const mongoDB = process.env.URL

mongoose.connect(mongoDB,{
    useNewUrlParser:true,
    useCreateIndex:true
})


mongoose.connection.on('connected',()=>{
    console.log('Connected to mongo instance')
})

mongoose.connection.on('error',(err)=>{
    console.error('Errror connection to mongo',err)
})

app.get("/",(req,res)=>{
    res.send('Hi There')
})

app.listen(3000,()=>{
    console.log('Listening on Prot 3000')
})