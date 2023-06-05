

const express = require('express');
const app = express();

// Routes

const authRouter = require('./routes/auth/login');
const protectedRouter = require('./routes/protected/dashboard');


app.use('/auth', authRouter);
app.use('/', protectedRouter);


app.get('/', (req, res) => {
    res.send('<a href="/auth/google">Login with google</a>');
});





app.listen(5000, () => console.log('Listening on port 5000'));
