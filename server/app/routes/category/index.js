'use strict';
var router = require('express').Router();
var mongoose = require('mongoose');
var Category = mongoose.model('Category');

//Get all products
router.get('/', function (req, res, next) {
	Category.find()
	.then(function (category) {
		res.json(category);
	})
	.then(null, next)
});


module.exports = router;


