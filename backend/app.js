const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');
const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const jwt = require("jsonwebtoken");

const connectDB = require('./jason/connect')

connectDB()

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.use('/worker', require('./jason/worker'))
app.use('/user', require('./jason/user'))

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});


require("./UserDetails");
const User = mongoose.model("UserDetails");
// Register API
app.post("/register", async (req, res) => {
    const { inputs } = req.body;
    const encryptedPass = await bcryptjs.hash(inputs.password, 14);
    try {
        const oldUser = await User.findOne({ email: inputs.email });
        if (oldUser) {
            return res.send({ error: "User Already exists!" })
        }
        await User.create({
            companyName: inputs.companyName,
            username: inputs.username,
            phoneNo: inputs.phoneNo,
            email: inputs.email,
            password: encryptedPass
        });
        res.send({ status: "ok" });

    } catch (error) {
        console.log(error);
        res.send({ status: "error" });
    }
});
// Login API
app.post("/login", async (req, res) => {
    console.log("Connected to Login api");
    const { inputs } = req.body;
    const user = await User.findOne({ username: inputs.username });
    if (!user) {
        return res.json({ error: "User not found" })
    }
    console.log(`Inputs: ${inputs}`);
    console.log(`User: ${user}`);
    if (await bcryptjs.compare(inputs.password, user.password)) {
        const token = jwt.sign({ email: user.email }, JWT_SECRET);
        if (res.status(201)) {
            return res.json({ status: "ok", data: token });
        }
        else {
            return res.json({ status: "error" });
        }
    }
    return res.json({ status: "error", error: "Invalid password!" })

});
