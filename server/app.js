var fs = require('fs');
var express = require('express');
var app = express();
var http = require('http');
var join = require('path').join;
var bodyParser = require("body-parser");
var api = require("./api");
var router = require("./router");

var PORT = 2980;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(join(__dirname, './../development')));


router(app);

api(app);


var httpServer = http.createServer(app);

httpServer.listen(PORT, function(){
  console.log("Server running on ", PORT);
})

