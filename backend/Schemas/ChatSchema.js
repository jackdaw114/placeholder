const mongoose = require('mongoose')


const chatSchema = mongoose.Schema({
    workerID: {
        type: String,
    },
    userID: {
        type: String,
    },
    chat: {
        type: Array
    },
});



module.exports = mongoose.model('Chat', chatSchema);