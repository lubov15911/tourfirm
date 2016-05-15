var mongoose = require('mongoose');
var tour = require('./tour');


var fs = require('fs');
var zip = new require('node-zip')();

var ReservationSchema = new mongoose.Schema({
    tour_id: Number,
    fullname: String,
    email: String,
    phone: String,
    tickets: Number,
    summ: Number,
    onlineStatus: Boolean,
    executionStatus: Boolean,
    deleteStatus: Boolean
});

ReservationSchema.methods.print = function () {

    var email = this.email;
    var file = 'public/files/file_' + email + '.txt';

    fs.open(file, 'w', function(err, contents) {
        if (err) {
            console.log(err);
        } else {
            console.log(contents.toString());
        }
    });

    var summ = 0;
    var tickets = this.tickets;
    var name = this.fullname;
    tour.findById(this.tour_id, function (err, tour) {
        if (err) return handleError(err);

        summ = tour.getPrices(tickets);
        console.log('Summ' + summ);

        var text = '\n\n' +
            '\t\t\tТУРИСТИЧЕСКАЯ ПУТЕВКА\n\n' +
            'ФИО заказчика: ' + name + '\n\n' +
            'Количество билетов: ' + tickets + '\n' +
            'Общая стоимость: ' + summ[0] + ' USD\n' +
            '                 ' + summ[1] + ' EUR\n' +
            '                 ' + summ[2] + ' RUB\n';

        fs.writeFile(file, text);
        return tour.getPrices(tickets);
    });
};

module.exports = mongoose.model('Reservation', ReservationSchema);