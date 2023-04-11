// Create reference for mongoose to access the mongo database.
var mongoose = require('mongoose');

// Create the database schema for the lawn mower data to save
var mowerSchema = new mongoose.Schema({
  maker: String,
  type: String,
  year: Number,
  powerPlant: String,
  capacity: Number,
  color: String,
  size: Number,
  datePurchased: Date
});

// Function to return all lawn mowers currently in the database
mowerSchema.statics.listAllMowers = function() {
  return this.find({});
};

// Function to return all lawn mowers made by a manufacturer
mowerSchema.statics.listManufacturedMowers = function() {
  return this.find(mowerSchema.maker);
}

// Function to return a lawn mower by database _id
mowerSchema.statics.listMowerByID = function() {
  return this.find(mowerSchema._id);
}

// Create a variable to hold a reference to the lawn mower database
var mowerModel = mongoose.model('mower', mowerSchema);

// Export the reference to the lawn mower database
module.exports = mowerModel;