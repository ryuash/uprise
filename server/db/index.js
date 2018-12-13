const db = require('./db');
const Students = require('./models/Students');

//do associates here

module.exports = {
    // Include your models in this exports object as well!
    Students,
    db
};
