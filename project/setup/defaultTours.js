var tour = new Tour({
        _id: 1,
        hotel: {
            address: {
                country: "Греция",
                city: "Ираклион"
            },
            stars: 4,
            cold_table: true,
            image: "http://s.tez-tour.com/hotel/3265/AGAPI_BEACH_318_Overview_1_4363_middle.jpg" //link to photos
        },
        tour_name: "AGAPI BEACH",
        transportation: "air",
        price: {
            USD: 1309,
            EUR: 1147,
            RUB: 86537
        },
        number_of_tickets: 1000,
        description: "Отель с зеленой ухоженной территорией. Разнообразное питание на основе программы «все включено», ежедневные вечерние и дневные мероприятия для взрослых и детей. Развитая инфраструктура. Есть русскоязычный персонал. Напротив отеля автобусная остановка, удобное сообщение с центром Ираклиона. Рекомендуем для семейного отдыха.",
        tags: "Отдых с детьми, Острова, Пляжи"
    });
    
    tour.save(function(err) {
        if (err) {
            console.log('3ERROR!!!');
                    console.log(err.stack);
        }
    });
    
    var tour2 = new Tour({
        _id: 2,
        hotel: {
            address: {
                country: "Россия",
                city: "Кисловодск"
            },
            stars: 4,
            cold_table: true,
            image: "http://s.tez-tour.com/hotel/50002379/4_363_middle.jpg" //link to photos
        },
        tour_name: "SOLNECHNYI KISLOVODSK",
        transportation: "train",
        price: {
            USD: 208,
            EUR: 182,
            RUB: 13760
        },
        number_of_tickets: 200,
        description: "«Солнечный» — один из лучших и широко известных санаториев Юга России. Европейский уровень комфорта и высшее качество лечебных и оздоровительных услуг — вот почему даже самые взыскательные клиенты нашей страны и зарубежья возвращаются в «Солнечный» снова и снова.",
        tags: "Отдых с детьми, СПА и термы"
    });
    
    tour2.save(function(err) {
        if (err) {
            console.log('3ERROR!!!');
            console.log(err.stack);
        }
    });
