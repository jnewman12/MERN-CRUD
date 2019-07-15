const Post = require('../models/post');

module.exports = {
  getAllPosts,
  getOnePost,
  createPost,
  deletePost,
  updatePost,
  upvotePost,
  addComment,
  downvotePost
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
  console.log('hit');
  Post.find({}).then(function(posts) {
    console.log(posts);
    res.status(200).json(posts);
  });
}

function upvotePost(req, res) {
  Post.findById(req.params.id).then(function(post) {
    post.upvotes += 1;
    post.save(function(post) {
      res.status(200).json(post);
    })
  })
}

function downvotePost(req, res) {
  Post.findById(req.params.id).then(function(post) {
    post.upvotes -= 1;
    post.save(function(post) {
      res.status(200).json(post);
    })
  })
}

function addComment(req, res) {
  Post.findById(req.params.id).then(function(post) {
    console.log('push')
    post.comments.push(req.body);
    console.log('after push')
    post.save(function(err, post) {
      console.log(err);
      res.status(200).json(post);
    })
  })
}

