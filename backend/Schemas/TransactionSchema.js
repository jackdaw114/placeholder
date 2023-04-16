const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema({
    jobdescription: {
        type: String,
    },
    address: {
        type: String,
    },
    dos: {
        type: String,
        // required: true
    },
    comments: {
        type: String,
        // required: true,
    },
    workerID: {
        type: String,
    },
    userID:{
        type:String,
    }

});



module.exports = mongoose.model('Transaction', transactionSchema);