var Reservation = require('../models/reservation');

module.exports = function(tmp) {


    for (var i in tmp) {
        Reservation.remove({ _id: i }, function(err, reservation) {
            if (err) {
                console.log('3ERROR!!!');
                console.log(err.stack);
            }
        });
    }

    return res.redirect('/createdocs');
}
