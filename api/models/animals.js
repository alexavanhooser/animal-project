let mongoose = require('mongoose');

// Animal Schema 

let AnimalSchema = new.mongoose.Schema({
    name: {type: String, required: true},
    imageUrl: {type: String, required: true},
    status: {type: String, required: true},
    popuation: {type: Number, required: true},
    continent: {type: String, required: true},
    facts: {
        factOne: {type: String, required: true},
        factTwo: {type: String, required: true},
        factThree: {type: String, required: true},
    }

});

module.exports = mongoose.model('Animals', AnimalSchema);
