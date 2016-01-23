app.config(function ($stateProvider) {
  console.log("This config is being read");
    $stateProvider.state('register', {
        url: '/register',
        templateUrl: 'js/user/register.html',
        controller: 'RegisterCtrl'
    });

});

app.controller('RegisterCtrl', function ($scope, AuthService, $state, RegisterFactory) {

  console.log("This controller is being read");
  $scope.printData = function () {
    console.log("Hit this function")
    console.log($scope.userInfo.name)
  }
  // $scope.loginUser = function (userInfo) {

    //     $scope.error = null;
    //     console.log("new info", userInfo)
    //     AuthService.login(userInfo).then(function () {
    //         $state.go('user');
    //     }).catch(function () {
    //         $scope.error = 'Invalid registration credentials.';
    //     });
    // };

  $scope.registerSubmit = function() {
      console.log("user email", $scope.userInfo.email)
      console.log("user password", $scope.userInfo.password)
      console.log("user name", $scope.userInfo.name)
      RegisterFactory.addUser($scope.userInfo)
          .then(function(user) {
              console.log("user back", user)
              // $scope.loginUser({email: user.user.email, password: $scope.userInfo.password})
          })
    };

});


app.factory('RegisterFactory', function($http) {
  return {
    addUser: function (data) {
      return $http.post('api/user', {
        data: data
      })
      .then(function(response) {
        console.log("Registered User");
        return response.data;
      })
    }
  }
})


// app.directive('errSrc', function() {
//   return {
//     link: function(scope, element, attrs) {
//       element.bind('error', function() {
//         if (attrs.src != attrs.errSrc) {
//           attrs.$set('src', attrs.errSrc);
//           scope.badPic = true;
//           scope.$digest()

//         }
//       });
//     }
//   }
// });


