var express = require('express');
var router = express.Router();
var postsController = require('../controllers/posts');
var usersCtrl = require('../controllers/users');
// var verifyToken = require('../serverAuth').verifyToken

router.get('/posts', postsController.getAllPosts);
router.get('/posts/:id', postsController.getOnePost);

/*---------- Protected Routes ----------*/
// Process the token for only the routes below
router.use(require('../config/auth'));

router.post('/posts', checkAuth, postsController.createPost);
router.put('/posts/:id/upvote', checkAuth, postsController.upvotePost);
router.put('/posts/:id/downvote', checkAuth, postsController.downvotePost);
router.delete('/posts/:id', checkAuth, postsController.deletePost);
router.put('/posts/:id', checkAuth, postsController.updatePost);
router.post('/posts/:id/comments', checkAuth, postsController.addComment);

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;