const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
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
    phoneNo: {
        type: String,
    },
});



module.exports = mongoose.model('User', userSchema);