var Belt =  require('mongoose').model('Belt');

exports.getBelts = function(req, res) {
    Belt.find({}).exec(function(err, collection) {
        res.send(collection);
    });
};

exports.getBeltById = function(req, res) {
    Belt.findOne({_id:req.params.id}).exec(function(err, belt) {
        res.send(belt);
    });
};