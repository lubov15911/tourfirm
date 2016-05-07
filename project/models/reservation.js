var mongoose = require('mongoose');

var ReservationSchema = new mongoose.Schema({
    tour_id: Number,
    fullname: String,
    email: String,
    phone: String,
    tickets: Number,
    onlineStatus: Boolean,
    executionStatus: Boolean
});

module.exports = mongoose.model('Reservation', ReservationSchema);