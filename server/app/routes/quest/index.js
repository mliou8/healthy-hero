'use strict';
var router = require('express').Router();
var mongoose = require('mongoose');
var Quest = mongoose.model('Quest');
var http = require('http')
var calculator = require('../../../algorithms/second-file.js');

//Get all Quests
router.get('/', function (req, res, next) {
	Quest.find()
	.then(function (quest) {
		res.json(quest);
	})
	.then(null, next)
});

//Testing http request through backend
router.get('/test', function (req, res, next) {
	http.request(calculator.options, calculator.callback).end()
})


router.post('/', function (req, res, next) {
	User
	.create(req.body.data)
	.then(function (result) {
		res.status(201).json(result);
	})
	.then(null, next)
})


module.exports = router;


