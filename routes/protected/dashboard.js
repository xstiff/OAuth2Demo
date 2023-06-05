const express = require('express');
const router = express.Router();

router.get('/dash', (req,res) => {
    res.send("Hello user<br /> If you see this that means you are logged in")
})


module.exports = router;
