const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')

const route = require('./Routes/myRoute')

const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server,{cors:{ origin:'*'}})
const postSock = require('./Socket/postSocket')
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(route)

io.on('connection',socket=>{
    postSock.post(io,socket)
})

mongoose.connect('mongodb+srv://user1:user12345@cluster0.6k8oa.mongodb.net/TestApp?retryWrites=true&w=majority')
.then(result=>{
    console.log("DB is connected")
    server.listen(3000)

}).catch(err=>{
    console.log(err)
})

