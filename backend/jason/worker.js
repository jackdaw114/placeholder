const express = require('express')

const router = express.Router();

router.get("/worker", async (req, res) => {
    res.send([{ name: 'test1' }, { name: 'test2' }]).status(200)
})

module.exports = router;    