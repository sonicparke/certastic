var mongoose = require('mongoose');

var BeltSchema = mongoose.Schema({
    color: {type:String, required: '{PATH} is required!'},
    tags: [String]
});

var Belt = mongoose.model('Belt', BeltSchema);

function createDefaultBelts() {
    Belt.find({}).exec(function(err, collection){
        if(collection.length === 0) {
            Belt.create({color:'White'});
            Belt.create({color:'Gold'});
            Belt.create({color:'Orange'});
            Belt.create({color:'Green'});
            Belt.create({color:'Camo'});
            Belt.create({color:'Blue'});
            Belt.create({color:'Purple'});
            Belt.create({color:'Red'});
            Belt.create({color:'Brown'});
            Belt.create({color:'Reccomended Black'});
            Belt.create({color:'Black'});
        }
    });
}

exports.createDefaultBelts = createDefaultBelts;