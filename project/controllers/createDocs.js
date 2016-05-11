var Reservation = require('../models/reservation');
var deleteDataForDocs = require('./deleteDataForDocs');

module.exports = function(req, res, next) {

    for (var i in req.body) {
        //Reservation.remove({ _id: i }, function(err, reservation) {
        //    if (err) {
        //        console.log('3ERROR!!!');
        //        console.log(err.stack);
        //    }
        //});
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
            }
        });
    }

    //deleteDataForDocs(req.body);
    //
    return res.redirect('/createdocs');
    //return deleteDataForDocs(req.body);
}
