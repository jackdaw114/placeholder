const mongoose = require("mongoose");

const WorkerSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    firstname: {
        type: String,
        // required: true
    },
    lastname: {
        type: String,
        // required: true,
    },
    password: {
        type: String,
        // required: true
    },
    job: {
        type: String,
    }
});



module.exports = mongoose.model('Worker', WorkerSchema);