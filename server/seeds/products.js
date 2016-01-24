var mongoose = require('mongoose');


var products = [

{
	"name": "Grass-fed Red Meat",
	"nutrients": ['Protein', 'Alpha Lipoic Acid'],
	"category": ['Animal'],
	"photoUrl": 'http://schollefamilynutrition.com/wp-content/uploads/2014/04/grass-fed-beef.jpg',
	"description": 'Alpha Lipoic Acid has a lot of health benefits. But you don\'t need much convincing to eat some beef.'
},
{
	"name": "Flaxseeds",
	"nutrients": ['Omega-3', 'Fat'],
	"category": ['Nut'],
	"photoUrl": 'http://www.nutritionhealthconnection.com/images/Nuts/Brown-Flax-Seeds-Main.jpg',
	"description": 'They\'re say what seeds? Just try them, they\'re good for you.'
},
{
	"name": "Chicken Eggs",
	"nutrients": ['Protein', 'B-Vitamins'],
	"category": ['Animal'],
	"photoUrl": 'http://www.newhealthadvisor.com/images/1HT00584/eggs.jpg',
	"description": 'Which came first, the chicken or this lame blurb.'
},
{
	"name": "Broccoli",
	"nutrients": ['Vitamin-C', 'Fiber'],
	"category": ['Vegetable'],
	"photoUrl": 'http://sekapporchard.com/wp-content/uploads/2013/09/Broccoli.jpg',
	"description": 'Eat some broccoli and Popeye\'s girlfriend will leave him for you. Results may vary.'
},
{
	"name": "Chili peppers",
	"nutrients": ['Vitamin-C'],
	"category": ['Vegetable'],
	"photoUrl": 'http://img2.timeinc.net/health/img/web/2013/11/slides/vitaminc-chili-peppers-400x400.jpg',
	"description": 'You can definitely eat this unless you\'re a pansy. Get a spicy badge for eating it.'
},
{
	"name": "Green Tea",
	"nutrients": ['Antioxidants'],
	"category": ['Drink'],
	"photoUrl": 'http://media.tumblr.com/tumblr_kz5sfaxqxD1qzrw0g.png',
	"description": 'It\'s an Oriental product get your hype on!'
}

];

module.exports = products;

