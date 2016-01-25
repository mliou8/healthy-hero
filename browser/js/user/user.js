app.config(function ($stateProvider) {
    $stateProvider.state('user', {
        url: '/user',
        templateUrl: 'js/user/user.html',
        controller: 'UserCtrl',
        resolve: {
            currentUser: function(AuthService){
                return AuthService.getLoggedInUser();
            },
            currentQuest: function (currentUser, QuestFactory) {
            	return QuestFactory.getQuest(currentUser.currentQuest)
				.then(function (response) {
					return response;
				})
            }
    	}
	})
	$stateProvider.state('stats', {
		url: '/user-statistics',
		templateUrl: 'js/user/stats.html',
		controller: 'UserCtrl',
		resolve: {
            currentUser: function(AuthService){
                return AuthService.getLoggedInUser();
            },
            currentQuest: function (currentUser, QuestFactory) {
            	return QuestFactory.getQuest(currentUser.currentQuest)
				.then(function (response) {
					return response;
				})
            }
    	}
	})
	$stateProvider.state('history', {
		url: '/user-history',
		templateUrl: 'js/user/history.html',
		controller: 'UserCtrl',
		resolve: {
            currentUser: function(AuthService){
                return AuthService.getLoggedInUser();
            },
            currentQuest: function (currentUser, QuestFactory) {
            	return QuestFactory.getQuest(currentUser.currentQuest)
				.then(function (response) {
					return response;
				})
            }
		}
	})
})

app.controller('UserCtrl', function ($scope, AuthService, currentUser, $state, QuestFactory, ProductFactory, currentQuest) {

	$scope.currentUser = currentUser;
	$scope.userLevel = levelCalculator();
	$scope.showDetails = false;
	$scope.showDetails2 = false;
	$scope.showDetails3 = false;
	function levelCalculator () {
		var userLevel = Math.floor(currentUser.totalExperience / 8)
		return userLevel;
	}
	//get the current Quest
	$scope.currentQuest = currentQuest;
	ProductFactory.getProduct(currentQuest[0].products[0])
	.then(function (response) {
		$scope.currentProduct = response[0];
	})

	$scope.toggleDetails = function () {
		if (!$scope.showDetails) {
			$scope.showDetails = true;
		} else {
			$scope.showDetails = false;
		}
	}


	$scope.toggleDetails2 = function () {
		if (!$scope.showDetails2) {
			$scope.showDetails2 = true;
		} else {
			$scope.showDetails2 = false;
		}
	}

	$scope.toggleDetails3 = function () {
		if (!$scope.showDetails3) {
			$scope.showDetails3 = true;
		} else {
			$scope.showDetails3 = false;
		}
	}

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

app.factory('ProductFactory', function ($http) {
	return {
		getProduct: function(productName) {
			return $http.get('/api/product/' + productName)
			.then(function (response) {
				return response.data;
			})
		}
	}
})


