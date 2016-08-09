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
  dogsName: String,
  dogsAge: Number,
  dogsBreed: String,
  dogsSex: String,
  timesBread: Number,
  dogHeight: String,
  dogWeight: Number,
  dogAKCPapers: String,
  aboutDog: String
});


// Return model
module.exports = restful.model('Owners', ownerSchema)