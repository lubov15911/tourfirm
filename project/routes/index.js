var express = require('express');
var router = express.Router();
var controller = require('../controllers/controller');
var search = require('../controllers/searching');


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
    res.render('search', { message: req.flash('message') });
  });

  router.post('/search', function(req, res) {
    res.render('search', { message: controller.search(JSON.stringify(req.body)) });
    //controller.search(JSON.stringify(req.body));
  });

  return router;
};