var Tour = require('../models/tour');

module.exports = function(req, res, next) {

    console.log('1***********');
    var re = req.body;
    console.log(re);
    console.log('2***********');

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

    var filter = {
        'hotel.address.country': re.country,
        'hotel.stars': re.stars,
        'hotel.cold_table': re.cold_table,
        'price.USD': { $gte: (+re.USD - 200), $lte: (+re.USD + 200) },
        'price.EUR': { $gte: (+re.EUR - 200), $lte: (+re.EUR + 200) },
        'price.RUB': { $gte: (+re.RUB - 200), $lte: (+re.RUB + 200) }
    };

    console.log(filter);

    console.log('3***********');
    if (!re.stars) delete filter['hotel.stars'];
    if (!re.cold_table) delete filter['hotel.cold_table'];
    if (!re.USD) delete filter['price.USD'];
    if (!re.EUR) delete filter['price.EUR'];
    if (!re.RUB) delete filter['price.RUB'];


    console.log(filter);

    console.log('4***********');
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
