const express = require('express')

const router = express.Router();

router.get("/worker", async (req, res) => {
    res.send('haha this works').status(200)
})