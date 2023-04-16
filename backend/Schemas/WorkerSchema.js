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
        required: true
    },
    lastname: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    jobs: {
        type: Array,
    },
    location: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
    },
<<<<<<< Updated upstream
    
    phone: {
=======
    rcount:{
        type:Number,
    },
    phoneNo: {
>>>>>>> Stashed changes
        type: Number,
        required: true
    }
});



module.exports = mongoose.model('Worker', WorkerSchema);