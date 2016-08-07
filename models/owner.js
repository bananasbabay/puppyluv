// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;


// Schema
var ownerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
  location: String,
  favorite: String,
  numberOfBreeds: Number,
  numberOfDogs: Number,
});


// Return model
module.exports = restful.model('Owners', ownerSchema)