var mongoose = require('mongoose');

var HotelSchema = new mongoose.Schema({
    _id: Number,
    address_id: Number,
    stars: Number,
    cold_table: Boolean,
    image: String //link to photos
});


module.exports = mongoose.model('Hotel', HotelSchema);