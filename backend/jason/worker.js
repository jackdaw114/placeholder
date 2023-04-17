const express = require('express')
const Worker = require('../Schemas/WorkerSchema')
const router = express.Router();
const bcrypt = require('bcrypt')

router.get("/getworkers", async (req, res) => {

    const query = () => {
        if (req.query.job) {
            return { jobs: req.query.job }
        }
        else return {}
    }
    console.log(query())
    try {

        const find = await Worker.find(query())
        if (find) {
            console.log(find)
            res.send(find).status(200)
        }
        else {
            res.send('no Workers found').status(400)
        }
    } catch (error) {
        res.send(error).status(500)
    }
})
router.post('/register', async (req, res) => {
    const saltRounds = 10;
    bcrypt.hash(req.body.password, saltRounds, async (error, hash) => {
        if (error) {
            console.log(error)
            res.send('error Generating hash').status(500)
        }
        else {
            const newWorker = new Worker({
                email: (req.body.email).toLowerCase(),
                username: req.body.username,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                jobs: [req.body.job],
                password: hash,
                location: req.body.location,
                rating: 3,

                rcount: 1,
                phoneNo: req.body.phoneNo
         })
            try {
                const saved = await newWorker.save()
                res.send(saved).status(200)
            } catch (error) {
                res.status(400).send(error.keyValue)
            }

        }
    })
})

router.post("/login", async (req, res) => {
    try {
        console.log("The request:", req.body)
        let user = await Worker.findOne({ username: req.body.username });

        console.log(user);
        if (user) {
            //bcrypt compare
            const match = await bcrypt.compare(req.body.password, user.password);
            if (match) {
                console.log('match')
                res.send(user); //dont think we should send user!!!!
            }
            else {
                console.log('incorrect password')
                res.send('incorrect password').status(400)
            }
        } else {
            res.send("No user found").status(400);
        }
    } catch (error) {
        res.send(error).status(500);
        console.log(error);
    }
})


router.get('/gettransactions',async(req,res)=>{
    res.send('sdfa;l')
})

module.exports = router;    