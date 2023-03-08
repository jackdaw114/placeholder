const express = require('express');
const app = express();
const port = 3010;
const cors = require('cors');
const mongoose = require('mongoose');

app.use(express.json());
app.use(cors());

const mongoUrl = "mongodb+srv://Nigel:Nigel@cluster0.iifluj8.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoUrl, {
    useNewUrlParser: true
}).then(() => { console.log("Connected to database!"); })
    .catch((e) => console.log(e));

app.listen(port, () => {
    console.log(`Server started at port ${port}`); 
});

// app.post("/post", (req, res) => {
//     console.log(req.body);
//     const { data } = req.body;
//     try {
//         if (data == "Nigel") { 
//             res.send({ status: "ok" });
//         }
//         else {
//             res.send("User not found");
//         }
        
//     } catch (error) {
//         res.send({ status: "Something went wrong!" });
//     }
// })

require("./UserDetails");
const User = mongoose.model("UserDetails");
app.post("/register", async(req, res) => {
    const { inputs } = req.body;
    
    try {
        await User.create({
            companyName:inputs.companyName,
            username:inputs.username,
            phoneNo:inputs.phoneNo,
            email:inputs.email,
            password:inputs.password
        });
        res.send({ status: "ok" });
        
    } catch (error) {
        console.log(error);
        res.send({ status: "error" });
    }
});
