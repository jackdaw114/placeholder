const mongoose = require('mongoose');
const userDetailsSchema = new mongoose.Schema(
    {
        companyName: String,
        username: String,
        phoneNo: String,
        email: String,
        password: String
    },
    {
        collection: "UserDetails"
    }
);

mongoose.model("UserDetails", userDetailsSchema);