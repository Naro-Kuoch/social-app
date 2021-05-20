// const { Socket } = require("socket.io");

const post = (io,socket)=>{
 socket.on('sharePost',message=>{
     console.log(message)
     socket.emit('posted',message)
 })   
}
module.exports= {post}