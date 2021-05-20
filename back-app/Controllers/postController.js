const POST = require('../models/postModel');
const http = require('http')
const io = require('socket.io')(http)
exports.getPost = (req,res)=>{
    // return res.json([
    //     {
    //         id:1,
    //         content:"this is post",
    //         postedBy: "Naro",
    //         postedAt:"today, 2pm",
    //         numLike:2,
    //         numComment:40,
    //         numShare:44
    //     },
    //     {
    //         id:2,
    //         content:"this is post: afafasf",
    //         postedBy: "Naro",
    //         postedAt:"yesterday, 3am",
    //         numLike:20,
    //         numComment:54,
    //         numShare:94
    //     }
    // ] )  
    POST.find().then(result=>{
        console.log(result)
        res.json(result)
    }).catch(err=>{
        console.log(err)
    })
} 
exports.createPost = (req,res) =>{
    console.log(req.body)
    let post = new POST({
        content:req.body.content,
        postedAt: 'just now',
        postedBy:req.body.postedBy,
        numLike:0,
        numComment:0,
        numShare:0
    })
    post.save().then(result=>{
        console.log('post created')

        res.json({"message":"posted is created", "data": result})
    }).catch(err=>{
        console.log(err)
    })
}