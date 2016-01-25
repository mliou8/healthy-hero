var mongoose = require('mongoose');

    var users = [
        {
            'email': 'testing@fsa.com',
            'password': 'password',
            'name': 'Michael',
            'completedQuests': ['Hunter Gatherer', 'Radicalize your Life'],
            'currentQuest': 'The Seedy Villain',
            'age': 25,
            'gender': 'Male',
            'totalExperience': '215',
        }
    ];

module.exports = users;

