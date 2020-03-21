
//import express
require('./models/User')
const mongoose = require('mongoose')




const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()

const authRoutes = require('./routes/authRoutes')

const app = express()

app.use(bodyParser.json())
app.use(authRoutes)

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