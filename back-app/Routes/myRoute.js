const { Router } = require('express')
const express = require('express')
const postController = require('../Controllers/postController')
const route = express.Router()


route.get('/',(req,res)=>{
    res.json({'message':'hi from backend'})
})
route.get('/posts',postController.getPost)
route.post('/posts',postController.createPost)


module.exports=route