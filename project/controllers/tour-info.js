var Tour = require('../models/tour');

module.exports = function(req, res, next) {

    console.log('***********');
    console.log(req.body);
    var re = req.body.id;
    console.log(re);
    console.log('***********');

    console.log(req.user);
    console.log('6***********');

    return Tour.find({ '_id': re }, function (err, tour) {
        if (!err) {
            console.log(tour);

            return res.render('tour', { message: tour });
            //return tour;
        } else {
            res.statusCode = 500;
            log.error('Internal error(%d): %s', res.statusCode, err.message);
            return res.send({error: 'Server error'});
        }
    })
}
