var search = require('./searching');
var tour = require('./tour-info');
var sendReservation = require('./sendReservation');

module.exports = {
    search: search,
    getTourInfo: tour,
    sendReservation: sendReservation
};