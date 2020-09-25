var express = require('express'),
    router = express.Router(),
    indexRouter = require('../controllers/index'),
    registerRouter = require('../controllers/register'),
    contactRouter = require('../controllers/contact'),
    homepageRouter = require('../controllers/homepage'),
    recoveryRouter = require('../controllers/recovery'),
    errorRouter = require('../controllers/error');
    
router.use('/', indexRouter);
router.use('/register', registerRouter);
router.use('/contact', contactRouter);
router.use('/recovery', recoveryRouter);
router.use('/homepage', homepageRouter);
router.use('/error', errorRouter);

module.exports = router;
