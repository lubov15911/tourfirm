var Reservation = require('../models/reservation');

module.exports = function(req, res, next) {

    return Reservation.find({ 'executionStatus': false,  'deleteStatus': false  }, function (err, reservation) {
        if (!err) {
            return res.render('offlinereservation', { message: reservation, user: req.user });
        } else {
            res.statusCode = 500;
            console.error('Internal error(%d): %s', res.statusCode, err.message);
            return res.send({error: 'Server error'});
        }
    })
}
