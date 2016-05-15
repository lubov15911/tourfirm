var Tour = require('../models/tour');

module.exports = function(req, res, next) {

    var re = req.body;

    var filter = {
        'hotel.address.country': re.country,
        'hotel.stars': re.stars,
        'hotel.cold_table': re.cold_table,
        'price.USD': { $gte: (+re.USD - 200), $lte: (+re.USD + 200) },
        'price.EUR': { $gte: (+re.EUR - 200), $lte: (+re.EUR + 200) },
        'price.RUB': { $gte: (+re.RUB - 200), $lte: (+re.RUB + 200) }
    };
    if (!re.stars) delete filter['hotel.stars'];
    if (!re.cold_table) delete filter['hotel.cold_table'];
    if (!re.USD) delete filter['price.USD'];
    if (!re.EUR) delete filter['price.EUR'];
    if (!re.RUB) delete filter['price.RUB'];

    return Tour.find(filter, function (err, tour) {
        if (!err) {
            console.log(tour);
            return res.render('search', { message: tour });
        } else {
            res.statusCode = 500;
            console.error('Internal error(%d): %s', res.statusCode, err.message);
            return res.send({error: 'Server error'});
        }
    })
}
