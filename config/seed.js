const Post = require('../models/post');
const data = require('./data');

const p1 = Post.deleteMany({});

Promise.all([p1])
.then(function(results) {
  data.forEach(function(dataObj) {
    var post = new Post(dataObj);
    post.save();
    console.log('post: ', post);
  });
}).then(function() {
  process.exit();
});