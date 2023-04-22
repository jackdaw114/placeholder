const mongoose = require('mongoose')


const recieptSchema = mongoose.Schema({
    workerID: {
        type: String
    },
    userID: {
        tyep: String
    },
    service_cost: {
        type: Number
    },
    material_cost: {
        type: Number
    },
    visiting_charge: {
        type: Number
    }
});



module.exports = mongoose.model('Reciept', recieptSchema);