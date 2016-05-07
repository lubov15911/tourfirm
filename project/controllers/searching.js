var Tour = require('../models/tour');

module.exports = function(req, res, next) {

    console.log('***********');
    console.log(req.body);
    var re = new RegExp('(' + req.body.search + ')', 'i');
    console.log(re);
    console.log('***********');

    //var tour = new Tour({
    //    _id: 1,
    //    hotel: {
    //        address: {
    //            country: "Греция",
    //            city: "Ираклион"
    //        },
    //        stars: 4,
    //        cold_table: true,
    //        image: "http://s.tez-tour.com/hotel/3265/AGAPI_BEACH_318_Overview_1_4363_middle.jpg" //link to photos
    //    },
    //    tour_name: "AGAPI BEACH",
    //    transportation: "air",
    //    price: {
    //        USD: 345,
    //        EUR: 890,
    //        RUB: 234
    //    },
    //    number_of_tickets: 1000,
    //    description: "Отель с зеленой ухоженной территорией. Разнообразное питание на основе программы «все включено», ежедневные вечерние и дневные мероприятия для взрослых и детей. Развитая инфраструктура. Есть русскоязычный персонал. Напротив отеля автобусная остановка, удобное сообщение с центром Ираклиона. Рекомендуем для семейного отдыха."
    //});
    //
    //tour.save(function(err) {
    //    if (err) {
    //        console.log('3ERROR!!!');
    //                console.log(err.stack);
    //    }
    //});
    //
    //var tour2 = new Tour({
    //    _id: 2,
    //    hotel: {
    //        address: {
    //            country: "Россия",
    //            city: "Москва"
    //        },
    //        stars: 3,
    //        cold_table: false,
    //        image: "http://s.tez-tour.com/hotel/3265/AGAPI_BEACH_318_Overview_1_4363_middle.jpg" //link to photos
    //    },
    //    tour_name: "КРЕМЛЬ",
    //    transportation: "train",
    //    price: {
    //        USD: 1542,
    //        EUR: 1342,
    //        RUB: 101989
    //    },
    //    number_of_tickets: 200,
    //    description: "Есть русскоязычный персонал. Рекомендуем для семейного отдыха."
    //});
    //
    //tour2.save(function(err) {
    //    if (err) {
    //        console.log('3ERROR!!!');
    //        console.log(err.stack);
    //    }
    //});

    return Tour.find({ 'description': re }, function (err, tour) {
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
