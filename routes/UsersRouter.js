var express = require('express');
var router = express.Router();
let userController = require('../controllers/UsersController') 
/* GET users listing. */
router.get('/', userController.index);

module.exports = router;
