var apiRouter = 'http://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=36kGqiRr4PhkgnD2SAxjBFjE1U1aScsggujivAGd&nutrients=205&nutrients=204&nutrients=208&nutrients=269'
var secrets = require('../env/development.js')

console.log("secret ", secrets.USDA.ApiKey)
var calculator = {}

  calculator.options = {
    host: 'personatestuser.org',
    path: '/email'
  }

 calculator.secret = secrets;

 calculator.callback = function(response) {
  var str = '';
  //another chunk of data has been recieved, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });

  //the whole response has been received, so we just print it out here
  response.on('end', function () {
    console.log(str);
  });
}


module.exports = calculator;
