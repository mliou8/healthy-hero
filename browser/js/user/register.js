app.config(function ($stateProvider) {

    $stateProvider.state('register', {
        url: '/register',
        templateUrl: 'js/user/register.html',
        controller: 'RegisterCtrl'
    });

});

app.controller('RegisterCtrl', function ($scope, AuthService, $state, RegisterFactory) {

     $scope.userInfo = { }
     $scope.badPic = false;
     $scope.avatarID = "blank-avatar"

     $scope.image_source = $scope.userInfo.imageURL ? $scope.userInfo.imageURL : "https://s-media-cache-ak0.pinimg.com/236x/ee/1b/fc/ee1bfc6d80856df0a748bda63e69d4d4.jpg";

    $scope.$watch('userInfo.imageURL', function(newValue, oldValue) {
    console.log("CHANGE")
      var picTest = (/\.gif$|\.jpg$|\.png$|\.gif$/)
      var validPic = picTest.test(newValue) && newValue && newValue.length>0
      $scope.image_source = validPic ? newValue : "https://s-media-cache-ak0.pinimg.com/236x/ee/1b/fc/ee1bfc6d80856df0a748bda63e69d4d4.jpg";
      if (!validPic && newValue){
        console.log("changing to bad")
        $scope.badPic = true;
        $scope.image_source = 'http://www.greenchu.de/sugimori/071.jpg'
      } else { $scope.badPic = false}
    });

    $scope.loginUser = function (userInfo) {

        $scope.error = null;
        console.log("new info", userInfo)
        AuthService.login(userInfo).then(function () {
            $state.go('user');
        }).catch(function () {
            $scope.error = 'Invalid registration credentials.';
        });
    };

        $scope.registerSubmit = function() {
            console.log("user info", $scope.userInfo)
            RegisterFactory.addUser($scope.userInfo)
                .then(function(user) {
                    console.log("user back", user)
                    $scope.loginUser({email: user.user.email, password: $scope.userInfo.password})
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


