const express = require('express')
const User = require('../Schemas/UserSchema')
const router = express.Router();
const bcrypt = require('bcrypt')


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
<<<<<<< Updated upstream
=======
                username: req.body.username,
                phoneNo: req.body.phoneNo
>>>>>>> Stashed changes
            })
            newUser.save((error, user) => {
                if (error) {
                    res.send(error).status(400)
                }
                else {
                    res.send(user)
                }
            })

        }
    })
})

module.exports = router;    