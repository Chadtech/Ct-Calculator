var fs = require('fs');
var express = require('express');
var app = express();
var http = require('http');
var join = require('path').join;
var bodyParser = require("body-parser");

var PORT = 2980;

app.use(express.static(join(__dirname, './../development')));

app.get('/',function(req, res, next) {
    var indexPage = join(__dirname, './../development/index.html');
    return res.status(200).sendFile(indexPage);
})

var httpServer = http.createServer(app);

httpServer.listen(PORT, function(){
    console.log("Server running on ", PORT);
})

