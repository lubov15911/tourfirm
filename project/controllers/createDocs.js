var Reservation = require('../models/reservation');
var Archive = require('../models/archive');

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
                console.log('999999999999999999999999999999999999');
                console.log(reservation.tour_id);
                //Archive.findById(1, function (err, archive) {
                //    if (err) return handleError(err);
                //
                //    console.log(archive.tickets);
                //    //archive.tickets = +archive.tickets + +tickets;
                //    //console.log(archive.tickets);
                //    archive.save(function (err) {
                //        if (err) {
                //            console.log('3ERROR!!!');
                //            console.log(err.stack);
                //        }
                //    });
                //});
            }
        });
        //Archive.findById(1, function (err, archive) {
        //    if (err) return handleError(err);
        //
        //    console.log(archive.tickets);
        //    //archive.tickets = +archive.tickets + +tickets;
        //    //console.log(archive.tickets);
        //    archive.save(function (err) {
        //        if (err) {
        //            console.log('3ERROR!!!');
        //            console.log(err.stack);
        //        }
        //    });
        //});
    }

    //deleteDataForDocs(req.body);
    //
    return res.redirect('/createdocs');
    //return deleteDataForDocs(req.body);
}
