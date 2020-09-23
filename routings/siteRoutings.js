var express = require('express'),
    router = express.Router(),
    indexRouter = require('../controllers/index'),
    registerRouter = require('../controllers/register'),
    contactRouter = require('../controllers/contact');

router.use('/', indexRouter);
router.use('/signup', registerRouter);
router.use('/contact', contactRouter);

module.exports = router;
