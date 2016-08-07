// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


// connect our database
mongoose.connect('mongodb://localhost/cbb');


// Espress
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

// Routes
app.use('/api', require('./routes/api'));

app.use(express.static(__dirname + '/public'))


// Start server
app.listen(3000, function(){
  console.log('Server is up and running');
});