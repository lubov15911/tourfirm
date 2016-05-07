var Reservation = require('../models/reservation');

module.exports = function(req, res, next) {

    console.log('***********');
    console.log(req.body);
    var item = req.body;
    console.log(item);
    console.log('***********');

    var reservation = new Reservation({
        tour_id: item.tour_id,
        fullname: item.fullname,
        email: item.email,
        phone: item.phone,
        tickets: item.tickets,
        onlineStatus: true,
        executionStatus: false
    });

    var t = reservation.save(function(err) {
        if (err) {
            console.log('3ERROR!!!');
            console.log(err.stack);
        }
    });

    console.log('tttttttttttttttttt');
    console.log(t);
    console.log('tttttttttttttttttt');


    return res.render('reservation', { answer: true });
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
