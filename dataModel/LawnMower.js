var mongoose = require('mongoose');

var mowerSchema = new mongoose.Schema({
  ownerFullName: String,
  email: String,
  manufacturer: String,
  mowerTypes: Array,
  datePurchased: Date,
  numMowersOwned: Integer,
  manufacturers: Array,
  member: Boolean,

  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('LawnMower', mowerSchema);