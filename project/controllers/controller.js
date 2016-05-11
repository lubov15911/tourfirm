var search = require('./searching');
var tour = require('./tour-info');
var sendReservation = require('./sendReservation');
var filter = require('./filter');
var getReservations = require('./getReservations');
var executeReservation = require('./executeReservation');
var getDataForDocs = require('./getDataForDocs');
var createDocs = require('./createDocs');
var deleteDataForDocs = require('./deleteDataForDocs');

module.exports = {
    search: search,
    getTourInfo: tour,
    sendReservation: sendReservation,
    filter: filter,
    getReservations: getReservations,
    executeReservation: executeReservation,
    getDataForDocs: getDataForDocs,
    createDocs: createDocs,
    deleteDataForDocs: deleteDataForDocs
};