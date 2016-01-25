var mongoose = require('mongoose');


var quests = [

{
	'name': "Hunter Gatherer",
	'description': 'Just like your ancestors did, venture out to Whole Foods so you can collect your prize.',
	'products': ['Grass-fed Red Meat', 'Chicken Eggs'],
	'reward': 5
},
{
	'name': 'Radicalize your Life',
	'description': 'Drink some green tea and get rid of those free-radicals',
	'products': ['Green Tea'],
	'reward': 3
},
{
	'name': 'Green is the New Black',
	'description': 'If you\'re ever going to be on a Netflix Original Series you need to keep your energy up. Get some leafies in you.',
	'products': ['Broccoli', 'Chili peppers'],
	'reward': 5
},
{
	'name': 'The Seedy Villain',
	'description': 'An appreciation for classical music and penchant for cocktails make a perfect B-list villain.',
	'products': ['Flaxseeds'],
	'reward': 3
}

];

module.exports = quests;

