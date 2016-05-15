var Reservation = require('../models/reservation');

module.exports = function(req, res, next) {

    for (var i in req.body) {
        Reservation.findById(i, function (err, reservation) {
            if (err) return handleError(err);

            if (reservation.deleteStatus == false) {
                reservation.print();
                reservation.deleteStatus = true;
                reservation.save(function (err) {
                    if (err) {
                        console.log('3ERROR!!!');
                        console.log(err.stack);
                    }
                });
                var tickets = reservation.tickets;
                var id = reservation.tour_id;
            }
        });
    }
    return res.redirect('/createdocs');
}
