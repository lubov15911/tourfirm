var express = require('express');
var router = express.Router();
var controller = require('../controllers/controller');

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
    res.render('search', { user: req.user });
  });

  router.post('/search', controller.search);

  router.post('/tour', controller.getTourInfo);

  router.get('/reservation', function(req, res) {
    res.redirect('search');
  });

  router.post('/reservation', function(req, res) {
    res.render('reservation', { message: req.body.id });
  });

  router.post('/sendReservation', controller.sendReservation);

  router.post('/filter', controller.filter);

  router.get('/offlinereservation', isAuthenticated, controller.getReservations);

  router.post('/executeReservation', controller.executeReservation);

  router.post('/createDocs', controller.createDocs);

  router.get('/createdocs', isAuthenticated, controller.getDataForDocs);

  router.post('/deletedocs', controller.deleteDataForDocs);

  router.get('/statistics', isAuthenticated, function(req, res) {
    res.render('statistics', { user: req.user });
  });

  router.get('/news', function(req, res) {
    res.render('news');
  });

  router.post('/email', controller.email);

  return router;
};
