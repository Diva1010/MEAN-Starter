var express = require('express');
var bodyParser = require('body-parser');

module.exports = function(app){
    var env = "development";

    app.use(bodyParser.json());
    

}