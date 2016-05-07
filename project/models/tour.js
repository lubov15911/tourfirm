var mongoose = require('mongoose');

var TourSchema = new mongoose.Schema({
    _id: Number,
    hotel_id: Number,
    tour_name: String,
    transportation: String,
    price: {
        USD: Number,
        EUR: Number,
        RUB: Number
    },
    number_of_tickets: Number,
    description: String
});


module.exports = mongoose.model('Tour', TourSchema);