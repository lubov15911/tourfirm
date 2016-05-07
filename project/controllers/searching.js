var Address = require('../models/address');
var Hotel = require('../models/hotel');
var Tour = require('../models/tour');
var User = require('../models/user');


module.exports = function(req, res, next) {

    console.log('***********');
    console.log(req.body);
    var re = new RegExp('(' + req.body.search + ')', 'i');
    console.log(re);
    console.log('***********');

    //var address = new Address({ _id: 2, country: "Россия", city: "Москва" });
    //address.save(function(err) {
    //    if (err) {
    //        console.log('1ERROR!!!');
    //        console.log(err.stack);
    //
    //    }
    //});

    //var hotel = new Hotel({ _id: 2, address_id: address._id, stars: 3, cold_table: false, image: "http://s.tez-tour.com/hotel/3265/AGAPI_BEACH_318_Overview_1_4363_middle.jpg" });
    //hotel.save(function(err) {
    //    if (err) console.log('2ERROR!!!');
    //});


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
                //return tour;
            } else {
                res.statusCode = 500;
                log.error('Internal error(%d): %s', res.statusCode, err.message);
                return res.send({error: 'Server error'});
            }
        })

    //return Tour.find(function (err, tour) {
    //  if (!err) {
    //    console.log(tour.tour_name);
    //    tour_name.push(tour.tour_name);
    //
    //     return res.render('search', {
    //       tour_name: tour[0].tour_name,
    //       transportation: tour[0].transportation,
    //       description: tour[0].description
    //
    //     });
    //  } else {
    //    res.statusCode = 500;
    //    log.error('Internal error(%d): %s',res.statusCode,err.message);
    //    return res.send({ error: 'Server error' });
    //  }
    //} )});


}
//    var search = JSON.parse(req).search;
//    var re = '/' + search + '/i';
//    var cursor = {};
//
//    var t = '';
//    t = Tour.findOne({ 'number_of_tickets' :  1000 }, function (err, users) {
//        console.log(users.description);
//        t = users.description;
//        console.log('мммммм' + t);
//    }).toArray(function (error, list) {
//        callback (list.length !== 0);
//    });
//    console.log('1' + cursor.description);
//
//
//    for (var i = 0; cursor[i]; i++) {
//        console.log('bbbbbbbbbbbbbbbb' + cursor[i]);
//
//    }
//
//
//    console.log('2' + t + '3');
//
//    return {
//        description: 'sldjnflkvnfl'
//    }
//};