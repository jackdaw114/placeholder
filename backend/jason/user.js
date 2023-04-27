const express = require('express')
const User = require('../Schemas/UserSchema')
const Worker = require('../Schemas/WorkerSchema')
const router = express.Router();
const bcrypt = require('bcrypt')
const Transaction = require('../Schemas/TransactionSchema');
const ChatSchema = require('../Schemas/ChatSchema');
const ReceiptSchema = require('../Schemas/ReceiptSchema');

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
                username: req.body.username,
                phoneNo: req.body.phoneNo

            })
            try {
                const user = await newUser.save()
                console.log(user._id)
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
        const find = await Worker.findOne({ email: req.body.workerID })
        console.log(find)

        const newChat = new ChatSchema({
            workerID: find.username,
            userID: req.body.userID,
            chat: []
        })
        console.log(`this is userID:  ${req.body.userID}`)
        const saveChat = await newChat.save();

        const newReceipt = new ReceiptSchema({
            userID: req.body.userID,
            workerID: find.username,
            service_cost: 0,
            material_cost: 0,
            visiting_charge: find.visiting_charge
        })

        const saveReceipt = await newReceipt.save();


        const newTransaction = new Transaction({
            jobdescription: req.body.jobdescription,
            address: req.body.address,
            dos: req.body.dos,
            comments: req.body.comments,
            workerID: req.body.workerID,
            workerName: find.username,
            userID: req.body.userID,
            status: 'pending',
            rating: 0,
            chatID: saveChat._id,
            receiptID: saveReceipt._id
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
        const findWorker = await Worker.findOne({ email: req.body.email })
        const transaction = await Transaction.findOne({ _id: req.body.id })
        console.log(findWorker)
        console.log(transaction.rating)
        if (findWorker && !transaction.rating) {
            const count = findWorker.rcount + 1
            const rate_w = (findWorker.rating * findWorker.rcount + req.body.rating) / (findWorker.rcount + 1)
            console.log(count)
            console.log(rate_w)
            let update = await Worker.updateOne(
                { email: req.body.email },
                {
                    $set: {
                        rcount: count,
                        rating: rate_w
                    }
                }
            )

            let updatetransaction = await Transaction.updateOne(
                { _id: req.body.id },
                {
                    $set: {
                        rating: req.body.rating
                    }
                }
            )

            console.log(updatetransaction)
            console.log(update)
            res.send(update)


        } else {
            res.send('worker already rated')
        }
    } catch (err) {
        console.log(err)
        res.send(err).status(500)
    }
})

router.post('/gettransactions', async (req, res) => {
    try {
        // localStorage.setItem('deleted', false)
        console.log(req.body)
        const find = await Transaction.find({ userID: req.body.username })
        if (find.length != 0) {
            console.log(find)
            res.send(find).status(200)
        }
        else {
            console.log('no transactions')
            res.status(400)
        }
    } catch (err) {
        res.send(err).status(500)
    }
})


router.post('/appendchat', async (req, res) => {
    try {
        const updatechat = await ChatSchema.updateOne({ _id: req.body.id },
            {
                $push: {
                    chat: { 'user': req.body.chatdata }
                }
            })

        res.send(updatechat).status(200)
    } catch (err) {
        console.log(err)
        res.status(500)
    }
})

router.post('/getreceipt', async (req, res) => {
    try {
        console.log('test')
        const findreceipt = await ReceiptSchema.findOne({ _id: req.body.id })
        res.send(findreceipt).status(200)
        console.log(findreceipt)
    } catch (err) {
        console.log(err)
        res.status(500)
    }
})


router.post('/gettotal', async (req, res) => {
    try {
        const find_transaction = Transaction.findOne()

    } catch (error) {
        console.log(err)
        res.status(500)
    }
})
// router.post('/cleartransactions', async (req, res) => {
//     try {
//         console.log(req.body)
//         // db.Transaction.deleteMany({});
//         localStorage.setItem('deleted', true)
//         res.send(status(200))
//     }
//     catch (err) {
//         res.send(err).status(500)
//     }
// })


module.exports = router;    