var mongoose = require('mongoose');
var user = require('../models/user');
var Tour = require('../models/tour');

module.exports = function(done) {

    mongoose.connection.on('open', function() {
        console.info('Connected to mongo server!');
        return done();
    });

    mongoose.connection.on('error', function(err) {
        console.error('Could not connect to mongo server!');
        console.error(err.message);
        return done(err);
    });

    try {
        mongoose.connect('mongodb://localhost:27017/tourfirm');

        var tmp = new user({ username: 'root', password: 'root' });
        tmp.save(function(err) {
            if (err) {
                console.log('123///');
                console.log(err);
            } else {
                console.log('MEOW');
            }
        });




        console.info('Started connection on mongodb://localhost/tourfirm, waiting for it to open...');
    } catch (err) {
        console.error('Setting up failed to connect to mongodb://localhost/tourfirm');
        console.error(err.message);
        done(err)
    }
};

//mongoose.connect('mongodb://localhost/test');
//
//var Cat = mongoose.model('Cat', { name: String });
//
