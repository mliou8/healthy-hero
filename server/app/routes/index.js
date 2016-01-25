'use strict';
var router = require('express').Router();
module.exports = router;

router.use('/user', require('./user'));
router.use('/quest', require('./quest'));
router.use('/product', require('./product'));
router.use('/nutrient', require('./nutrient'));
router.use('/category', require('./category'));

// Make sure this is after all of
// the registered routes!
router.use(function (req, res) {
    res.status(404).end();
});
