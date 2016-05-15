var Tour = require('../models/tour');

module.exports = function(req, res, next) {

    var re = new RegExp('(' + req.body.search + ')', 'i');
    console.log('RegExp: ' + re);

    return Tour.find({ 'tags': re }, function (err, tour) {
        if (!err) {
            console.log(tour);
            return res.render('search', { message: tour });
        } else {
            res.statusCode = 500;
            log.error('Internal error(%d): %s', res.statusCode, err.message);
            return res.send({error: 'Server error'});
        }
    })
}
