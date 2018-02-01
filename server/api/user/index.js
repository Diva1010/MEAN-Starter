var express = require('express');
var controller = require('./users.controller');
var config = require('../../config/environment');

var router = express.Router();
router.post('/loginUser', controller.login);
router.post('/register', controller.register);

module.exports = router;