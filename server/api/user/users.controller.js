
var express = require('express');
var router = express.Router();
var User = require('./user.model')
var mongo = require("mongoose");
var config = require('../../config/environment');

exports.login = function(req, res){
    User.findOne({ username: req.body.username , password: req.body.password}, function(err, users){
        console.log(users)
        if(err) return res.send(500, err);
        if(users == null) return res.send(401);
        res.json(users);
    });
    
}
exports.register = function(req, res){
   var newuser = new User(req.body);
   newuser.save(function(err, users){
    if(err) return res.send(500, err);
        res.json(users);
   })
}
