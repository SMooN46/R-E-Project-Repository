var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = require('./router')(app, Book);

var server = app.listen(port, function(){
  console.log('Connected port '+port+'!');
});

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
  console.log('Connected to mongod server');
});

mongoose.connect('mongodb://localhost/mongodb_tutorial');

mongoose.connect('mongodb')

var Book = require('./models/book');
