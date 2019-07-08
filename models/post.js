var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
  comment: String
}, {
  timestamps: true
});

var PostSchema = new mongoose.Schema({
  name: String,
  comments: [CommentSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model("Post", PostSchema);
