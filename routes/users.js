var express = require('express');
var router = express.Router();
var postsController = require('../controllers/posts');
var usersCtrl = require('../controllers/users');

/*---------- Public Routes ----------*/
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);


/*---------- Protected Routes ----------*/
// Process the token for only the routes below
router.use(require('../config/auth'));


function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;
