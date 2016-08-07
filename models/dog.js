// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;


// Schema
var dogSchema = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
  sex: String,
  location: String,
  owner : [{ type: Schema.Types.ObjectId, ref: 'Owner' }]
});


// Return model
module.exports = restful.model('Dogs', dogSchema)