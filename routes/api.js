// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Owner = require('../models/owner');
var Dog = require('../models/owner');

// Routes
Owner.methods(['get', 'put', 'post', 'delete']);
Owner.register(router, '/owners');

// Return router
module.exports = router;