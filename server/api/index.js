//main folder. can use to delegate n make more sub files
const router = require('express').Router();

router.use('/users', require('./users')); //this is /api/users router

//error handling
router.use((req, res, next) => {
    const err = new Error('not found');
    err.state = 404;
    next(err);
});

module.exports = router;
