var express = require('express');
var router = express.Router();
var postsController = require('../controllers/posts');

/* GET /api/posts */
router.get('/posts', postsController.getAllPosts);
router.get('/posts/:id', postsController.getOnePost);
router.post('/posts', postsController.createPost);
router.delete('/posts/:id', postsController.deletePost);
router.put('/posts/:id', postsController.updatePost);

module.exports = router;