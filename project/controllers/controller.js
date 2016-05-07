var search = require('./searching');
var tour = require('./tour-info');
var sendReservation = require('./sendReservation');
var filter = require('./filter');

module.exports = {
    search: search,
    getTourInfo: tour,
    sendReservation: sendReservation,
    filter: filter
};