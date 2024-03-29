const express = require('express')
const Worker = require('../Schemas/WorkerSchema')
const router = express.Router();
const bcrypt = require('bcrypt')
const Transaction = require('../Schemas/TransactionSchema');
const { default: mongoose } = require('mongoose');
const { Router } = require('express');
const RecieptSchema = require('../Schemas/ReceiptSchema');
const ChatSchema = require('../Schemas/ChatSchema');

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
                visiting_charge: req.body.visiting_charge,
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


router.post('/gettransactions', async (req, res) => {
    try {
        console.log(req.body)
        const find = await Transaction.find({ workerID: req.body.email })
        console.log(find)
        if (find.length != 0) {
            console.log(find)
            res.send(find).status(200)
        }
        else {
            console.log('no transactions')
            res.status(400).send('no transactions found')
        }
    } catch (err) {
        res.send(err).status(500)
    }
})

router.post('/updatetransaction', async (req, res) => {
    console.log(req.body)
    try {

        const find = await Transaction.findOne({ _id: req.body.id })
        if (find) {
            if (req.body.action === 'Accept') {
                const update = await Transaction.updateOne(
                    { _id: req.body.id },
                    {
                        $set: {
                            status: 'ongoing'
                        }
                    })
                res.send(update).status(200)
            }

            else if (req.body.action === 'Complete') {
                const update = await Transaction.updateOne(
                    { _id: req.body.id },
                    {
                        $set: {
                            status: 'completed'
                        }
                    })
                res.send(update).status(200)
            }
            else if (req.body.action == 'Decline') {
                const update = await Transaction.updateOne(
                    { _id: req.body.id },
                    {
                        $set: {
                            status: 'declined'
                        }
                    })
                res.send(update).status(200)

            }
            else if (req.body.action == 'Paid') {
                const update = await Transaction.updateOne(
                    { _id: req.body.id },
                    {
                        $set: {
                            status: 'paid'
                        }
                    })
                console.log(update)
                res.send('paid').status(200)

            }
        }
        else {
            res.status(400)
        }
    } catch (error) {
        console.log(error)
    }
})

router.post('/updatereceipt', async (req, res) => {
    try {
        console.log(req.body)
        const find = await Transaction.findOne({ _id: req.body.id })
        console.log(find)
        const updatereciept = await RecieptSchema.updateOne({ _id: find.receiptID },
            {
                $set: {
                    material_cost: req.body.material_cost,
                    service_cost: req.body.service_cost
                }
            })
        console.log(updatereciept)
        res.send(updatereciept).status(200);
    } catch (err) {
        console.log(err)
        res.status(500)
    }
})


router.post('/appendchat', async (req, res) => {
    try {
        const updatechat = await ChatSchema.updateOne({ _id: req.body.id },
            {
                $push: {
                    chat: { 'worker': req.body.chatdata }
                }
            })
        res.send(updatechat).status(200)
    } catch (err) {
        console.log(err)
        res.status(500)
    }
})

module.exports = router;