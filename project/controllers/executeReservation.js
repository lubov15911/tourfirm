var Reservation = require('../models/reservation');

module.exports = function(req, res, next) {

    for (var i in req.body) {
        Reservation.findById(i, function (err, reservation) {
            if (err) return handleError(err);

            reservation.executionStatus = true;
            reservation.save(function (err) {
                if (err) {
                    console.log('3ERROR!!!');
                    console.log(err.stack);
                }
            });
        });
    }

    return res.redirect('/offlinereservation');
}
