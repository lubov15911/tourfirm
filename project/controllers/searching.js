var Address = require('../models/addresses');
var Hotel = require('../models/hotels');
var Tour = require('../models/tours');
var User = require('../models/user');

module.exports = function(req, res) {
    console.info('going searching');
    //var address = new Address({ _id: 1, country: "Греция", city: "Ираклион" });
    //address.save(function(err) {
    //    if (err) console.log('ERROR!!!');
    //});
    //
    //var hotel = new Hotel({ _id: 1, address_id: address._id, stars: 4, cold_table: true, image: "http://s.tez-tour.com/hotel/3265/AGAPI_BEACH_318_Overview_1_4363_middle.jpg" });
    //hotel.save(function(err) {
    //    if (err) console.log('ERROR!!!');
    //});
    //
    //var tour = new Tour({
    //    _id: 1,
    //    hotel_id: hotel._id,
    //    tour_name: "AGAPI BEACH",
    //    transportation: "air",
    //    price: {
    //        USD: 1542,
    //        EUR: 1342,
    //        RUB: 101989
    //    },
    //    number_of_tickets: 1000,
    //    description: "Отель с зеленой ухоженной территорией. Разнообразное питание на основе программы «все включено», ежедневные вечерние и дневные мероприятия для взрослых и детей. Развитая инфраструктура. Есть русскоязычный персонал. Напротив отеля автобусная остановка, удобное сообщение с центром Ираклиона. Рекомендуем для семейного отдыха."
    //});
    //
    //tour.save(function(err) {
    //    if (err) console.log('ERROR!!!');
    //});

    var search = JSON.parse(req).search;
    var re = '/' + search + '/i';
    console.log(re);

    var cursor = Tour.findOne({ number_of_tickets: 1000 }, function(err, tour) {
        if (err) return err;
        console.log(tour.description)
    });

    console.log(cursor.description);
    var t = '9' + cursor.description;
    console.log(t);

    return {
        description: 'sldjnflkvnfl'
    }
};