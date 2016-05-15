var Tour = require('../models/tour');

module.exports = function(req, res, next) {

    var re = req.body.id;

    return Tour.find({ '_id': re }, function (err, tour) {
        if (!err) {
            return res.render('tour', { message: tour });
        } else {
            res.statusCode = 500;
            log.error('Internal error(%d): %s', res.statusCode, err.message);
            return res.send({error: 'Server error'});
        }
    })
}
