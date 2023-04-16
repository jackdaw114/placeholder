const express = require('express')
const User = require('../Schemas/UserSchema')
const Worker = require('../Schemas/WorkerSchema')
const router = express.Router();
const bcrypt = require('bcrypt')
const Transaction = require('../Schemas/TransactionSchema')

router.post('/register', async (req, res) => {
    const saltRounds = 10;
    bcrypt.hash(req.body.password, saltRounds, async (error, hash) => {
        if (error) {
            res.send('error Generating hash').status(500)
        }
        else {
            const newUser = new User({
                email: (req.body.email).toLowerCase(),
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                jobs: req.body.jobs,
                password: hash,
                location: req.body.location,
                username: req.body.username
            })
            try {
                const user = await newUser.save()
                console.log(user)
                res.send(user);
            } catch (err) {
                res.send(err).status(500)
            }
        }
    })
})

router.post("/login", async (req, res) => {
    try {
        console.log("The request:", req.body)
        let user = await User.findOne({ username: req.body.username });

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

router.post('/maketransaction', async (req, res) => {
    try {
        console.log(req.body.jobdescription)
        let newTransaction = new Transaction({
            jobdescription: req.body.jobdescription,
            address: req.body.address,
            dos: req.body.dos,
            comments: req.body.comments,
            workerID: req.body.workerID,
            userID: req.body.userID
        }
        )
        const transaction = await newTransaction.save()
        console.log(transaction)
    } catch (err) {
        res.send('incomplete transaction').status(500);
    }
})

router.post('/rate', async (req, res) => {
    try {
        console.log(req.body)
        const findWorker = await Worker.findOne({ email: req.body.workerID })
        if (findWorker) {
            const count = findWorker.rcount + 1;
            const newrating = (findWorker.rating * findWorker.rcount + req.body.rating) / count;
            let update = await Worker.updateOne(
                { emai: req.body.workerID },
                {
                    $set: {
                        rcount: count,
                        rating: newrating
                    }
                }
            )
            console.log(update)
            res.send(update)


        }
    } catch (err) {
        console.log(err)
        res.send(err).status(500)
    }
})

router.post('/gettransactions', async (req, res) => {
    try {
        console.log(req.body)
        const find = await Transaction.find({ userID: req.body.username })

        if (find.length != 0) {
            console.log(find)
            res.send(find).status(200)
        }
        else {
            console.log('no transactions')
            res.send('no transactions found').status(400)
        }
    } catch (err) {
        res.send(err).status(500)
    }
})


module.exports = router;    