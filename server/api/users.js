const router = require('express').Router();

//this is for /api/users
router.get('/', async (req, res, next) => {
    try {
        res.end();
    }
    catch (error) {
        next(error);
    }
});

module.exports = router;
