var mongoose = require('mongoose');
var dbURI = 'mongodb://localhost/Loc8r';

var gracefulShutdown = function (msg, callback) {
    mongoose.connection.close(function () {
        console.log('Mongoose disconnected through ' + msg);
        callback();
    });
};

mongoose.connect(dbURI);

// Log DB connection, error and disconnected messages
mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});

// Listen for SIGURS2, which is what nodemon uses
process.once('SIGURS2', function () {
    gracefulShutdown('nodemon restart', function () {
        process.kill(process.pid, 'SIGURS2');
    });
});

// Listen for SIGINT emitted on application termination
process.on('SIGINT', function () {
    gracefulShutdown('app termination', function () {
        process.exit(0);
    });
});

// Listen for SIGTERM emitted when Heroku shuts down process
process.on('SIGTERM', function () {
    gracefulShutdown('Heroku app shutdown', function () {
        process.exit(0);
    });
});

require('./locations');