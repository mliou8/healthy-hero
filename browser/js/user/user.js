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

app.controller('UserCtrl', function ($scope, AuthService, currentUser, $state) {


	$scope.currentUser = currentUser;
	// $scope.calculator = QuestFactory.calculator();
	var levelKey = levelGenerator();
	levelCalculator();

	function levelGenerator () {
		var levelKey = [];
		for (var i = 1; i < 20; i++) {
			var temp = (i * 10) + (i * 5)
			levelKey.push([i, temp])
		}
		return levelKey;
	}

	function levelCalculator () {
		if(currentUser.totalExperience < 15) {
				$scope.userLevel = 1;
			}
		for (var i = 0; i < levelKey.length; i++) {
			if (currentUser.totalExperience === levelKey[i][0]) {
				$scope.userLevel = levelKey[i][1];
			}
		}
	}
})

// app.factory('QuestFactory', function ($http) {
// 	return {

// 	}
// })

// app.factory('Entry', function ($http, $resource) {

// })


