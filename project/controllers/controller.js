var search = require('./searching');
var tour = require('./tour-info');
var sendReservation = require('./sendReservation');
var filter = require('./filter');
var getReservations = require('./getReservations');
var executeReservation = require('./executeReservation');

module.exports = {
    search: search,
    getTourInfo: tour,
    sendReservation: sendReservation,
    filter: filter,
    getReservations: getReservations,
    executeReservation: executeReservation
};