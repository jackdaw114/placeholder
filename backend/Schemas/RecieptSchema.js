const mongoose = require('mongoose')


const recieptSchema = mongoose.Schema({
    servicecost: {
        type: Number
    },
    materialcost: {
        type: Number
    },
    visitingcharge: {
        type: Number
    }
});



module.exports = mongoose.model('Reciept', recieptSchema);