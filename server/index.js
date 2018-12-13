const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', '/public')));

app.use('/api', require('./api')); // include our routes!


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

// server error 500
app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
});

//start server
const port = process.env.PORT || 3000;
const test = () => {
    try {
        app.listen(port, () => {
            console.log(`Winging it up on port ${port}`);
            console.log(`localhost:${port}`);
        });
    }
    catch (error) {
        console.error(error);
    }
};

test();

