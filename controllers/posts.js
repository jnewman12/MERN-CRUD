const Post = require('../models/post');

module.exports = {
  getAllPosts,
  getOnePost,
  createPost,
  deletePost,
  updatePost
};

function updatePost(req, res) {
  Post.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(function(post) {
    res.status(200).json(post);
  });
}

function deletePost(req, res) {
  Post.findByIdAndRemove(req.params.id).then(function(post) {
    res.status(200).json(post);
  });
}

function getOnePost(req, res) {
  Post.findById(req.params.id).then(function(post) {
    res.status(200).json(post);
  });
}

function createPost(req, res) {
  Post.create(req.body).then(function(post) {
    res.status(201).json(post);
  });
}

function getAllPosts(req, res) {
  Post.find({}).then(function(posts) {
    res.status(200).json(posts);
  });
}
