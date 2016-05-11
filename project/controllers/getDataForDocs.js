var Reservation = require('../models/reservation');

module.exports = function(req, res, next) {

    return Reservation.find({ 'executionStatus': true, 'deleteStatus': false }, function (err, reservation) {
        if (!err) {
            //console.log(reservation);
            return res.render('createdocs', { message: reservation, user: req.user });
        } else {
            res.statusCode = 500;
            console.error('Internal error(%d): %s', res.statusCode, err.message);
            return res.send({error: 'Server error'});
        }
    })
}
