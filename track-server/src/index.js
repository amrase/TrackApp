require('dotenv').config()
require('./models/User')
require('./models/Track')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


const app = express();
app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json())

const authRoutes = require('./routes/authRoutes')
const trackRoutes = require('./routes/trackRoutes')
const requireAuth = require('./middlewares/requireAuth')



app.use(authRoutes)
app.use(trackRoutes)

const mongoURI = process.env.URL

mongoose.connect(mongoURI,{
    useUnifiedTopology:true,
    useCreateIndex:true,
    useNewUrlParser:true, 
})

mongoose.connection.on('connected',()=>{
    console.log('Connected to mongo instance')
})

mongoose.connection.on('error',(err)=>{
    console.error('Error connecting to mongo',err)
})


app.get('/',requireAuth,(req,res)=>{
    res.send(`You email: ${req.user.email}`)
});

app.listen(3000,()=>{
    console.log('Listening on port 3000')
})