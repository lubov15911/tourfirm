var express = require('express');
var router = express.Router();
var controller = require('../controllers/controller');
var search = require('../controllers/searching');

var Tour = require('../models/tour');

var isAuthenticated = function (req, res, next) {
  // if user is authenticated in the session, call the next() to call the next request handler
  // Passport adds this method to request object. A middleware is allowed to add properties to
  // request and response objects
  if (req.isAuthenticated())
    return next();
  // if the user is not authenticated then redirect him to the login page
  res.redirect('/');
};

module.exports = function(passport){

  /* GET login page. */
  router.get('/', function(req, res) {
    res.render('index', { message: req.flash('message') });
  });

  /* Handle Login POST */
  router.post('/login', passport.authenticate('login', {
    successRedirect: '/home',
    failureRedirect: '/error',
    failureFlash : true
  }));

  /* GET Registration Page */
  //router.get('/signup', function(req, res){
  //  res.render('register',{message: req.flash('message')});
  //});

  /* Handle Registration POST */
  router.post('/signup', passport.authenticate('signup', {
    successRedirect: '/home',
    failureRedirect: '/error',
    failureFlash : true
  }));

  /* GET Home Page */
  router.get('/home', isAuthenticated, function(req, res){
    res.render('home', { user: req.user });
  });

  /* Handle Logout */
  router.get('/signout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

  router.get('/error', function(req, res) {
    res.render('error', { message: req.flash('message') });
  });

  router.get('/search', function(req, res) {
    res.render('search');
  });

  router.post('/search', controller.search);

  router.post('/tour', controller.getTourInfo);


  router.get('/reservation', function(req, res) {
    res.redirect('/search');
  });

  router.post('/reservation', function(req, res) {
    res.render('reservation', { message: req.body.id });
  });

  router.post('/sendReservation', controller.sendReservation);

  return router;
};

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
