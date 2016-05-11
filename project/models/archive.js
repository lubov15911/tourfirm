var mongoose = require('mongoose');
var tour = require('./tour');
var reservation = require('./reservation');

var ArchiveSchema = new mongoose.Schema({
    _id: Number,
    tickets: Number
});

module.exports = mongoose.model('Archive', ArchiveSchema);