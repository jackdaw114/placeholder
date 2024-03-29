const mongoose = require('mongoose')


const receiptSchema = mongoose.Schema({
    workerID: {
        type: String
    },
    userID: {
        type: String
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



module.exports = mongoose.model('Receipt', receiptSchema);