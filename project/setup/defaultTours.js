

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
var tour3 = new Tour({
    _id: 3,
    hotel: {
        address: {
            country: "Болгария",
            city: "Солнечный Берег"
        },
        stars: 3,
        cold_table: true,
        image: "http://s.tez-tour.com/hotel/7000054/IMG_9935_8252_middle.JPG" //link to photos
    },
    tour_name: "AMFORA BEACH",
    transportation: "train",
    price: {
        USD: 974,
        EUR: 864,
        RUB: 64475
    },
    number_of_tickets: 500,
    description: "Бывший отель Delta Beach с новым названием и новым менеджментом. Полностью обновлен. Удобно расположен рядом с пляжем и многими дискотеками. Рекомендуем для молодежного отдыха.",
    tags: "Пляжи"
});
var tour4 = new Tour({
    _id: 4,
    hotel: {
        address: {
            country: "Болгария",
            city: "Солнечный Берег"
        },
        stars: 4,
        cold_table: true,
        image: "http://s.tez-tour.com/hotel/7014120/Panorama_pool_hotel_8109_2759_middle.jpg" //link to photos
    },
    tour_name: "ALBA",
    transportation: "air",
    price: {
        USD: 1342,
        EUR: 1176,
        RUB: 88786
    },
    number_of_tickets: 500,
    description: "Отель находится недалеко от пляжа, в самом центре курорта, рядом с развлечениями и дискотеками. Подходит для активного молодежного отдыха. Не рекомендуем для спокойного отдыха.",
    tags: "Пляжи"
});
var tour5 = new Tour({
    _id: 5,
    hotel: {
        address: {
            country: "Греция",
            city: " Элунда"
        },
        stars: 5,
        cold_table: true,
        image: "http://s.tez-tour.com/hotel/2929/1311786865069_middle.jpg" //link to photos
    },
    tour_name: "AQUILA ELOUNDA VILLAGE",
    transportation: "air",
    price: {
        USD: 1201,
        EUR: 1052,
        RUB: 79448
    },
    number_of_tickets: 200,
    description: "Удобство, комфорт и профессиональный сервис – визитная карточка отеля. Панорамный вид на море и каскад бассейнов придают отелю экзотический облик. Рекомендуем для спокойного респектабельного отдыха пар. Из-за наличия спусков и подъемов людям с ограниченными возможностями передвижения отель не рекомендуется.",
    tags: "Отдых без детей, Острова, Пляжи, СПА и термы, VIP-отдых и услуги"
});
var tour6 = new Tour({
    _id: 6,
    hotel: {
        address: {
            country: "Греция",
            city: "Агиос-Николаос"
        },
        stars: 4,
        cold_table: true,
        image: "http://s.tez-tour.com/hotel/3106/1311787176281_middle.jpg" //link to photos
    },
    tour_name: "PARK VILLAGE",
    transportation: "air",
    price: {
        USD: 1169,
        EUR: 1024,
        RUB: 77331
    },
    number_of_tickets: 500,
    description: "Οтель с зеленой территорией в стиле традиционной критской деревни. Все номера – двухкомнатные апартаменты, просторные и светлые. Прекрасный вид на залив Мирабелло. Небольшой песчаный пляж под навесом деревьев, пологий вход в море. Легкая анимация для взрослых. Активная программа детского мини-клуба. Рекомендуем для семейного отдыха с детьми всех возрастов.",
    tags: "Отдых с детьми, Острова, Пляжи"
});
var tour7 = new Tour({
    _id: 7,
    hotel: {
        address: {
            country: "Греция",
            city: "Элунда"
        },
        stars: 5,
        cold_table: true,
        image: "http://s.tez-tour.com/hotel/721/1311782930032_middle.jpg" //link to photos
    },
    tour_name: "DOMES OF ELOUNDA AUTOGRAPH COLLECTION",
    transportation: "air",
    price: {
        USD: 3500,
        EUR: 3066,
        RUB: 231530
    },
    number_of_tickets: 500,
    description: "Престижный отель, расположенный в уединенном месте, с видом на остров Спиналонга. Истинная средиземноморская архитектура, мягкие тона интерьеров, изысканная мебель ручной работы – все это гармонирует с окружающей средой. Разнообразный номерной фонд от двухкомнатных сьютов до роскошных резиденций с индивидуальным бассейном. Рекомендуем как для респектабельного семейного отдыха, так и для отдыха романтических пар. Есть возможность проведения свадебных церемоний (символические, официальные церемонии с выездом Мэра, венчание в часовне на территории комплекса). В 3,5 км от отеля находится Элунда, туристический поселок славится своими рыбными тавернами со свежими морепродуктам, а в 1,5 км – историческое местечко Плака.",
    tags: "Острова, Отдых с детьми, Пляжи, СПА и термы, VIP-отдых и услуги"
});
var tour8 = new Tour({
    _id: 8,
    hotel: {
        address: {
            country: "Греция",
            city: "Агиос-Николаос"
        },
        stars: 3,
        cold_table: true,
        image: "http://s.tez-tour.com/hotel/2774/TERRACE_VIEW_7873_middle.jpg" //link to photos
    },
    tour_name: "ELOUNDA AKTI OLOUS",
    transportation: "air",
    price: {
        USD: 1697,
        EUR: 1486,
        RUB: 112259
    },
    number_of_tickets: 500,
    description: "Небольшой уютный отель с ограниченной территорией. Находится в курортном местечке Элунда, где множество таверн и кафе. Рекомендуем для экономичного отдыха, а также для молодежи.",
    tags: "Отдых без детей, Острова, Пляжи"
});
var tour9 = new Tour({
    _id: 9,
    hotel: {
        address: {
            country: "Греция",
            city: "Фалираки"
        },
        stars: 3,
        cold_table: true,
        image: "http://s.tez-tour.com/hotel/50002279/lellis_achousa_146_260_middle.jpg" //link to photos
    },
    tour_name: "ACHOUSA HOTEL",
    transportation: "air",
    price: {
        USD: 918,
        EUR: 804,
        RUB: 60727
    },
    number_of_tickets: 500,
    description: "Небольшой отель с ухоженной территорией, утопающей в зелени, и простым номерным фондом. Все номера оборудованы кухонным уголком. Удачное расположение в местечке Фалираки, с его ресторанами, барами и тавернами. Рекомендуем для бюджетного отдыха любой категории туристов.",
    tags: "Острова, Пляжи"
});
var tour10 = new Tour({
    _id: 10,
    hotel: {
        address: {
            country: "Греция",
            city: "Родос"
        },
        stars: 5,
        cold_table: true,
        image: "http://s.tez-tour.com/hotel/2211/1311785533585_middle.jpg" //link to photos
    },
    tour_name: "ALDEMAR AMILIA MARE",
    transportation: "air",
    price: {
        USD: 2686,
        EUR: 2353,
        RUB: 177682
    },
    number_of_tickets: 500,
    description: "Aldemar Resorts – одна из ведущих гостиничных сетей в Греции. Внимательный русскоговорящий персонал, хорошее питание. Развитая детская инфраструктура. Активная анимация в течение всего дня и вечерняя развлекательная программа. Хороший песчано-галечный пляж отмечен Голубым флагом. Рекомендуем для отдыха туристов любого возраста, семей с детьми и молодежи.",
    tags: "Отдых с детьми, Острова, Пляжи, VIP-отдых и услуги"
});
var tour11 = new Tour({
    _id: 11,
    hotel: {
        address: {
            country: "Греция",
            city: "Фалираки"
        },
        stars: 2,
        cold_table: true,
        image: "http://s.tez-tour.com/hotel/50002308/general_view_2069_middle.jpg" //link to photos
    },
    tour_name: "ARGO HOTEL",
    transportation: "air",
    price: {
        USD: 968,
        EUR: 848,
        RUB: 64034
    },
    number_of_tickets: 500,
    description: "Отель с компактной территорией. Расположен в центре активного курортного городка Фалираки. Отель не размещает детей (12+). Рекомендуем для молодежного отдыха, а также для всех, кому важна близость вечерних развлечений.",
    tags: "Отдых без детей, Острова,Пляжи"
});
var tour12 = new Tour({
    _id: 12,
    hotel: {
        address: {
            country: "Италия",
            city: "Римини"
        },
        stars: 3,
        cold_table: false,
        image: "http://s.tez-tour.com/hotel/7017180/1_6316_middle.JPG" //link to photos
    },
    tour_name: "ABAMAR (RIMINI)",
    transportation: "air",
    price: {
        USD: 974,
        EUR: 864,
        RUB: 64475
    },
    number_of_tickets: 500,
    description: "Очень милый семейный отель с минимум необходимых услуг, расположен в морском центре курорта.",
    tags: "Пляжи"
});
var tour13 = new Tour({
    _id: 13,
    hotel: {
        address: {
            country: "Италия",
            city: "Каттолика"
        },
        stars: 3,
        cold_table: false,
        image: "http://s.tez-tour.com/hotel/7015242/web_09_01_8270_middle.jpg" //link to photos
    },
    tour_name: "ALEXANDRA PLAZA (RICCIONE)",
    transportation: "air",
    price: {
        USD: 974,
        EUR: 864,
        RUB: 64475
    },
    number_of_tickets: 500,
    description: "Симпатичный отель в спокойном месте, на первой линии (между пляжем и отелем дороги нет). Собственный сад площадью 4000 м2. Отель трепетно относится к своим маленьким гостям и предлагает широкий выбор услуг для семей с детьми. Для взыскательных клиентов рекомендуем полностью обновленные номера Executive в современном стиле.",
    tags: "Отдых с детьми, Пляжи"
});
var tour14 = new Tour({
    _id: 14,
    hotel: {
        address: {
            country: "Австрия",
            city: "Пизендорф"
        },
        stars: 4,
        cold_table: false,
        image: "http://s.tez-tour.com/hotel/7020059/Hotel-2-v2_7624_middle.jpg" //link to photos
    },
    tour_name: "ALPENPARKS HOTEL & APARTMENT CENTRAL (ZELL AM SEE)",
    transportation: "air",
    price: {
        USD: 974,
        EUR: 864,
        RUB: 64475
    },
    number_of_tickets: 500,
    description: "Новые современные апартаменты в самом сердце Целль-ам-Зее. Отличная инфраструктура и близость к подъемнику City X-Press.",
    tags: "Горнолыжные курорты"
});
var tour15 = new Tour({
    _id: 15,
    hotel: {
        address: {
            country: "Австрия",
            city: "Пизендорф"
        },
        stars: 3,
        cold_table: false,
        image: "http://s.tez-tour.com/hotel/7018492/APT_1_8597_middle.jpg" //link to photos
    },
    tour_name: "DUERLINGER HAUS (PIESENDORF)",
    transportation: "air",
    price: {
        USD: 974,
        EUR: 864,
        RUB: 64475
    },
    number_of_tickets: 500,
    description: "Бюджетный вариант размещения. В отеле, находящемся в семейном управлении, только одни апартаменты.",
    tags: "Горнолыжные курорты"
});
var tour16 = new Tour({
    _id: 16,
    hotel: {
        address: {
            country: "Доминикана",
            city: "Игуэй"
        },
        stars: 5,
        cold_table: true,
        image: "http://s.tez-tour.com/hotel/87/BBPD_AERIAL_VIEW_1871_middle.jpg" //link to photos
    },
    tour_name: "BARCELO BAVARO PALACE DELUXE",
    transportation: "air",
    price: {
        USD: 974,
        EUR: 864,
        RUB: 64475
    },
    number_of_tickets: 500,
    description: "Отель славится своим великолепным пляжем и отличной кухней. Хорошо спланированная разнообразная инфраструктура комплекса Barcelo Bavaro Beach Resort не позволит скучать гостям любого возраста. По территории комплекса курсирует паровозик. Клиенты отеля старше 18 лет могут пользоваться всеми услугами отеля Barcelo Bavaro Beach 5* (за доп. плату).",
    tags: "Острова, Отдых с детьми, Свадебные пакеты, Пляжи, СПА и термы, VIP-отдых и услуги"
});
var tour17 = new Tour({
    _id: 17,
    hotel: {
        address: {
            country: "Доминикана",
            city: "---"
        },
        stars: 4,
        cold_table: true,
        image: "http://s.tez-tour.com/hotel/7000046/3_retoc_4929_middle.jpg" //link to photos
    },
    tour_name: "BE LIVE COLLECTION CANOA",
    transportation: "air",
    price: {
        USD: 974,
        EUR: 864,
        RUB: 64475
    },
    number_of_tickets: 500,
    description: "Hotel Be Live Саnoa расположен рядом с островом Саона, поблизости (500 м) от Восточного национального парка и всего в 24 км от красивейшей тематической деревушки Альтос-де-Чавон. На территории отеля имеется все для полноценного отдыха. Можно смело рекомендовать любой категории туристов: парам, семьям с детьми, а также любителям активного отдыха.",
    tags: "Острова, Отдых с детьми, Пляжи"
});
var tour18 = new Tour({
    _id: 18,
    hotel: {
        address: {
            country: "Андорра",
            city: " Андорра-ла-Велья"
        },
        stars: 5,
        cold_table: true,
        image: "http://s.tez-tour.com/hotel/1630/andorra_park_general_view_2821_middle.jpg" //link to photos
    },
    tour_name: "ANDORRA PARK",
    transportation: "air",
    price: {
        USD: 974,
        EUR: 864,
        RUB: 64475
    },
    number_of_tickets: 500,
    description: "Обновленный отель в современном стиле, обширная парковая территория (15 000 м). Высокий уровень сервиса, просторные стильные номера, разнообразное питание и SPA-центр с широким выбором процедур. Рядом находится торговый центр, куда можно попасть прямо из отеля. Рекомендуем для взыскательных клиентов. Отель отмечен знаком «Q» за соответствующее качество в таких категориях, как, например, «гастрономический» и «деловой».",
    tags: "Отдых с детьми, Горнолыжные курорты, СПА и термы, VIP-отдых и услуги"
});
var tour19 = new Tour({
    _id: 19,
    hotel: {
        address: {
            country: "Испания",
            city: "Тенерифе - Коста-Адехе"
        },
        stars: 4,
        cold_table: true,
        image: "http://s.tez-tour.com/hotel/2702/PISCINA_5734_middle.jpg" //link to photos
    },
    tour_name: "HOTEL TROYA",
    transportation: "air",
    price: {
        USD: 974,
        EUR: 864,
        RUB: 64475
    },
    number_of_tickets: 500,
    description: "Отель расположен в центре курорта, на первой линии. Рядом с отелем множество магазинов, баров, ресторанов и дискотек. Рекомендуем для семейного и молодежного отдыха. В 2013-2014 годах отель был полностью реновирован: номера с 4 по 7 этаж, Открылся SPA площадью 1000 м2 и детский парк.",
    tags: "Острова, Пляжи, СПА и термы"
});
var tour20 = new Tour({
    _id: 20,
    hotel: {
        address: {
            country: "Испания",
            city: "Барселона"
        },
        stars: 5,
        cold_table: true,
        image: "http://s.tez-tour.com/hotel/2143/new_RCBARCE_00153_121904_673_middle.jpg" //link to photos
    },
    tour_name: "ARTS BARCELONA",
    transportation: "air",
    price: {
        USD: 3557,
        EUR: 3117,
        RUB: 235329
    },
    number_of_tickets: 500,
    description: "Отель удачно расположен – в 10 минутах ходьбы от исторического центра Барселоны. Из окон открывается незабываемый вид на городские пляжи и кварталы Барселоны. Рядом с отелем находятся спортивный комплекс Port Olympic, зоопарк, магазины и центры развлечений. Отель Arts 5*Luxe, один из первых отелей класса люкс в Барселоне, продолжает оставаться символом качественного VIP-отдыха.",
    tags: "Отдых с детьми, Экскурсионный отдых и круизы, Пляжи, СПА и термы, VIP-отдых и услуги"
});
var tour21 = new Tour({
    _id: 21,
    hotel: {
        address: {
            country: "Испания",
            city: "Таррагон"
        },
        stars: 5,
        cold_table: true,
        image: "http://s.tez-tour.com/hotel/7016140/DOLCE_SITGES_POOLS_262_middle.jpg" //link to photos
    },
    tour_name: "DOLCE SITGES",
    transportation: "air",
    price: {
        USD: 3557,
        EUR: 3117,
        RUB: 235329
    },
    number_of_tickets: 500,
    description: "Роскошный отель в 10 минутах езды от местечка Ситжес, с великолепным SPA-центром и широким гастрономическим выбором. Главным минусом, но в то же время и достоинством отеля является его удаленность от города. До железнодорожной станции либо до центра города нужно добираться на такси (от 10 евро в один конец). В то же время отель славится панорамными видами редкой красоты, в нем немного русских туристов. Это идеальное место для тех, кто желает провести время в роскоши и вдали от суеты. Рекомендуем для отдыха пар, а также для деловых поездок. Отдельного упоминания заслуживает также обширный конгресс-центр, полностью оборудованный по последнему слову техники. До пляжа нужно добираться на машине либо на транспорте, который организует отель в летнее время.",
    tags: "Пляжи, СПА и термы, VIP-отдых и услуги"
});
var tour22 = new Tour({
    _id: 22,
    hotel: {
        address: {
            country: " Мальдивы",
            city: " Мальдивы"
        },
        stars: 5,
        cold_table: true,
        image: "http://s.tez-tour.com/hotel/50000884/02012-Loama_Resort_island_view_4775_middle.jpg" //link to photos
    },
    tour_name: "LOAMA RESORT MALDIVES AT MAAMIGILLI ",
    transportation: "air",
    price: {
        USD: 974,
        EUR: 864,
        RUB: 64475
    },
    number_of_tickets: 500,
    description: "Особенностью курорта является наличие первого официального исторического музея, расположенного за пределами столицы Мале, коллекция экспонатов которого позволит гостям отеля получить представление о самобытной местной культуре. Хороший уровень сервиса поможет оценить по достоинству традиционное мальдивское гостеприимство. В отеле возможна организация свадебных церемоний.",
    tags: "Острова, Пляжи, СПА и термы"
});
var tour23 = new Tour({
    _id: 23,
    hotel: {
        address: {
            country: "Мальдивы",
            city: "Мальдивы"
        },
        stars: 4,
        cold_table: true,
        image: "http://s.tez-tour.com/hotel/4312/AERIAL_OF_HELENGELI_ISLAND_3978_middle.jpg" //link to photos
    },
    tour_name: "OBLU BY ATMOSPHERE AT HELENGELI MALDIVES ",
    transportation: "air",
    price: {
        USD: 4182,
        EUR: 3664,
        RUB: 276645
    },
    number_of_tickets: 500,
    description: "Второй на Мальдивах отель сети Atmosphere Hotels and Resorts. Отель предлагает хорошее питание, отличный уровень сервиса, размещение в комфортабельных виллах, в оформлении интерьера которых использованы яркие элементы. Всем гостям курорта предлагается проживание на базе All Inclusive, включающей в себя помимо питания и определенного набора напитков также 3 вида безмоторного водного спорта и 2 экскурсии. Рекомендуем для любителей подводного плавания и снорклинга, т.к. у отеля красивый домашний риф и в непосредственной близости от курорта расположены более 20 всемирно известных точек для дайвинга.",
    tags: "Острова, Пляжи, СПА и термы"
});
var tour24 = new Tour({
    _id: 24,
    hotel: {
        address: {
            country: "Мальдивы",
            city: "Мальдивы"
        },
        stars: 4,
        cold_table: true,
        image: "http://s.tez-tour.com/hotel/2348/1311785810014_middle.jpg" //link to photos
    },
    tour_name: "ADAARAN SELECT HUDHURAN FUSHI ",
    transportation: "air",
    price: {
        USD: 3098,
        EUR: 2714,
        RUB: 204937
    },
    number_of_tickets: 500,
    description: "Adaaran Select Hudhuran Fushi – популярный бюджетный отель, хорошо известный на российском рынке. Обширная территория, утопающая в тропической зелени. Водные виллы Adaaran Select Hudhuran Fushi Ocean Villas образуют свою небольшую независимую территорию. Гости водных вилл имеют возможность пользоваться всеми услугами отеля Adaaran Select Hudhuran Fushi.",
    tags: "Острова, Свадебные пакеты, Пляжи, СПА и термы"
});

tour.save(function(err) {
    if (err) {
        console.log('3ERROR!!!');
        console.log(err.stack);
    }
});
tour2.save(function(err) {
        if (err) {
            console.log('3ERROR!!!');
            console.log(err.stack);
        }
    });
tour3.save(function(err) {
    if (err) {
        console.log('3ERROR!!!');
        console.log(err.stack);
    }
});
tour4.save(function(err) {
    if (err) {
        console.log('3ERROR!!!');
        console.log(err.stack);
    }
});
tour5.save(function(err) {
    if (err) {
        console.log('3ERROR!!!');
        console.log(err.stack);
    }
});
tour6.save(function(err) {
    if (err) {
        console.log('3ERROR!!!');
        console.log(err.stack);
    }
});
tour7.save(function(err) {
    if (err) {
        console.log('3ERROR!!!');
        console.log(err.stack);
    }
});
tour8.save(function(err) {
    if (err) {
        console.log('3ERROR!!!');
        console.log(err.stack);
    }
});
tour9.save(function(err) {
    if (err) {
        console.log('3ERROR!!!');
        console.log(err.stack);
    }
});
tour10.save(function(err) {
    if (err) {
        console.log('3ERROR!!!');
        console.log(err.stack);
    }
});
tour11.save(function(err) {
    if (err) {
        console.log('3ERROR!!!');
        console.log(err.stack);
    }
});
tour12.save(function(err) {
    if (err) {
        console.log('3ERROR!!!');
        console.log(err.stack);
    }
});
tour13.save(function(err) {
    if (err) {
        console.log('3ERROR!!!');
        console.log(err.stack);
    }
});
tour14.save(function(err) {
    if (err) {
        console.log('3ERROR!!!');
        console.log(err.stack);
    }
});
tour15.save(function(err) {
    if (err) {
        console.log('3ERROR!!!');
        console.log(err.stack);
    }
});
tour16.save(function(err) {
    if (err) {
        console.log('3ERROR!!!');
        console.log(err.stack);
    }
});
tour17.save(function(err) {
    if (err) {
        console.log('3ERROR!!!');
        console.log(err.stack);
    }
});
tour18.save(function(err) {
    if (err) {
        console.log('3ERROR!!!');
        console.log(err.stack);
    }
});
tour19.save(function(err) {
    if (err) {
        console.log('3ERROR!!!');
        console.log(err.stack);
    }
});
tour20.save(function(err) {
    if (err) {
        console.log('3ERROR!!!');
        console.log(err.stack);
    }
});
tour21.save(function(err) {
    if (err) {
        console.log('3ERROR!!!');
        console.log(err.stack);
    }
});
tour22.save(function(err) {
    if (err) {
        console.log('3ERROR!!!');
        console.log(err.stack);
    }
});
tour23.save(function(err) {
    if (err) {
        console.log('3ERROR!!!');
        console.log(err.stack);
    }
});
tour24.save(function(err) {
    if (err) {
        console.log('3ERROR!!!');
        console.log(err.stack);
    }
});
