var mongoose = require('mongoose');
var userModel = require('../models/User');
var courseModel = require('../models/Belt');

module.exports = function(config) {
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback() {
        console.log('Certastic db opened');
    });

    userModel.createDefaultUsers();
    courseModel.createDefaultBelts();
};

