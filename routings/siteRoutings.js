var express = require('express'),
    router = express.Router(),
    indexRouter = require('../routes/index'),
    registerRouter = require ('../routes/register'),
    homeRouter = require ('../routes/homepage');
    usersRouter = require('../routes/users'),
    contactRouter = require ('../routes/contact');

router.use('/', indexRouter);
router.use('/signup',registerRouter);
router.use('/home',homeRouter);
router.use('/users', usersRouter);
router.use ('/contact', contactRouter);

module.exports = router;