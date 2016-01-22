'use strict';
var router = require('express').Router();
var apiRouter = 'http://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=36kGqiRr4PhkgnD2SAxjBFjE1U1aScsggujivAGd&nutrients=205&nutrients=204&nutrients=208&nutrients=269'

http.get('http://www.google.com/index.html', (res) => {
  console.log(`Got response: ${res.statusCode}`);
  // consume response body
  res.resume();
}).on('error', (e) => {
  console.log(`Got error: ${e.message}`);
});



module.exports = router;


