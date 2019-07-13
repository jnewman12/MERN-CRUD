var express = require('express');
var router = express.Router();
var postsController = require('../controllers/posts');
var usersCtrl = require('../controllers/users');

// MOUNTED ON `/api/posts`

router.get('/', postsController.getAllPosts);
router.get('/:id', postsController.getOnePost);

/*---------- Protected Routes ----------*/
// Process the token for only the routes below
router.use(require('../config/auth'));

router.post('/', checkAuth, postsController.createPost);
router.put('/:id/upvote', checkAuth, postsController.upvotePost);
router.put('/:id/downvote', checkAuth, postsController.downvotePost);
router.delete('/:id', checkAuth, postsController.deletePost);
router.put('/:id', checkAuth, postsController.updatePost);
router.post('/:id/comments', checkAuth, postsController.addComment);

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;