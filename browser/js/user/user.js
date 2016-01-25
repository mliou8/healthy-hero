app.config(function ($stateProvider) {
    $stateProvider.state('user', {
        url: '/user',
        templateUrl: 'js/user/user.html',
        controller: 'UserCtrl',
        resolve: {
            currentUser: function(AuthService){
                return AuthService.getLoggedInUser();
            }
    	}
	})
})

app.controller('UserCtrl', function ($scope, AuthService, currentUser, $state, QuestFactory) {

	$scope.currentUser = currentUser;
	$scope.userLevel = levelCalculator();

	function levelCalculator () {
		var userLevel = Math.floor(currentUser.totalExperience / 8)
		return userLevel;
	}
	//Set the current Quest
	QuestFactory.getQuest($scope.currentUser.currentQuest)
	.then(function (response) {
		$scope.currentQuest = response;
	})

	var completedQuests = [];
	currentUser.completedQuests.forEach(function (quest) {
		QuestFactory.getQuest(quest)
		.then(function (response) {
		completedQuests.push(response);
		})
	})
	$scope.completedQuests = completedQuests;
	//Get all completed Quests
	// QuestFactory.getCompletedQuests($scope.currentUser.completedQuests)
})


app.factory('QuestFactory', function ($http) {
	return {
		getQuest: function (questName) {
			return $http.get('/api/quest/' + questName)
			.then(function (response) {
				return response.data;
			});
		}
		// getCompletedQuests: function (questArray) {
		// 	var returnQuests = [];
		// 	// questArray.forEach(function (quest) {
		// 	// 	return $http.get('/api/quest/' + quest)
		// 	// 	.then(function (response) {
		// 	// 		returnQuests.push(response);
		// 	// 	})
		// 	// })
		// 	// console.log('return quests', returnQuests);
		// 	// return returnQuests;
		// 	return$http(
		// 	  method: 'GET',
		// 	  url: '/api/quest/',
		// 	  params: {
		// 	    "id[]": ids // ids is [1, 2, 3, 4]
		// 	  }
		// 	)
		// }
	}
})

// app.factory('Entry', function ($http, $resource) {

// })


