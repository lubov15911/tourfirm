var Reservation = require('../models/reservation');

module.exports = function(req, res, next) {

    var online = (!req.user);
    var item = req.body;

    var reservation = new Reservation({
        tour_id: item.tour_id,
        fullname: item.fullname,
        email: item.email,
        phone: item.phone,
        tickets: item.tickets,
        onlineStatus: online,
        executionStatus: false,
        deleteStatus: false
    });

    reservation.save(function(err) {
        if (err) {
            console.log('3ERROR!!!');
            console.log(err.stack);
        }
    });

    return res.render('reservation', { answer: true, user: req.user });
}
