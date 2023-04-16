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
                rcount:1,
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


router.get('/gettransactions',async(req,res)=>{
    res.send('sdfa;l')
})

module.exports = router;    