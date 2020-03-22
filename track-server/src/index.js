
//import express
require('./models/User')
require('./models/Track')
const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const authRoutes = require('./routes/authRoutes')
const trackRoutes = require('./routes/trackRoutes')
const requireAuth = require('./middlewares/requireAuth')

const app = express()

app.use(bodyParser.json())
app.use(authRoutes)

const mongoDB = process.env.URL

mongoose.connect(mongoDB,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex :true
})


mongoose.connection.on('connected',()=>{
    console.log('Connected to mongo instance')
})

mongoose.connection.on('error',(err)=>{
    console.error('Errror connection to mongo',err)
})

app.get("/",requireAuth,(req,res)=>{
    res.send(`Your email : ${req.user.email}`)
})

app.listen(3000,()=>{
    console.log('Listening on Prot 3000')
})