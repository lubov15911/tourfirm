var mongoose = require('mongoose');

var AddressSchema = new mongoose.Schema({
    _id: Number,
    country: String,
    city: String
});


module.exports = mongoose.model('Address', AddressSchema);
