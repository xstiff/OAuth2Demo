const express = require('express');
const router = express.Router();

router.get(('/login') , (req, res) => {
    res.send('Login page<br> <h1>Sign in</h1><a class="button google" href="./login/google">Sign in with Google</a>')
});

module.exports = router;