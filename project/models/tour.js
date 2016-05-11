var mongoose = require('mongoose');

var TourSchema = new mongoose.Schema({
    _id: Number,
    hotel: {
        stars: Number,
        cold_table: Boolean,
        image: String, //link to photos
        address: {
            country: String,
            city: String
        }
    },
    tour_name: String,
    transportation: String,
    price: {
        USD: Number,
        EUR: Number,
        RUB: Number
    },
    number_of_tickets: Number,
    description: String,
    tags: String
});

TourSchema.methods.getPrices = function (tickets) {

    return [ +this.price.USD * tickets, +this.price.EUR * tickets, +this.price.RUB * tickets ];
};

module.exports = mongoose.model('Tour', TourSchema);