'use strict';

const db = require('./database');
const Students = require('./models/Students');

//do associates here

module.exports = {
    // Include your models in this exports object as well!
    Students,
    db
};
