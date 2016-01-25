'use strict';
var router = require('express').Router();
var mongoose = require('mongoose');
var Nutrient = mongoose.model('Nutrient');

//Get all products
router.get('/', function (req, res, next) {
	Nutrient.find()
	.then(function (nutrient) {
		res.json(nutrient);
	})
	.then(null, next)
});



module.exports = router;


