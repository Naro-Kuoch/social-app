const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  postedBy: {
    type: String,
    required: true
  },
  postedAt:{
    type:String,

  },
  numLike: {
    type: Number,
    required: true
  },
  numShare: {
    type: Number,
    required: true
  },
  numComment: {
    type: Number,
    required: true
  }
}, {collection: 'posts'});

module.exports = mongoose.model('Post', postSchema);