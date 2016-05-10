var Reservation = require('../models/reservation');

module.exports = function(req, res, next) {

    console.log('***********');
    console.log(req.user);
    var online = (!req.user);

    console.log(online);
    var item = req.body;
    console.log(item);
    console.log('***********');

    var reservation = new Reservation({
        tour_id: item.tour_id,
        fullname: item.fullname,
        email: item.email,
        phone: item.phone,
        tickets: item.tickets,
        onlineStatus: online,
        executionStatus: false
    });

    reservation.save(function(err) {
        if (err) {
            console.log('3ERROR!!!');
            console.log(err.stack);
        }
    });

    return res.render('reservation', { answer: true, user: req.user });
    //    if (!err) {
    //        console.log(tour);
    //
    //        return res.render('tour', { message: tour });
    //        //return tour;
    //    } else {
    //        res.statusCode = 500;
    //        log.error('Internal error(%d): %s', res.statusCode, err.message);
    //        return res.send({error: 'Server error'});
    //    }
    //})
}
