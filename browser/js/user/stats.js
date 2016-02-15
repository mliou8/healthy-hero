app.config(function($stateProvider) {
  $stateProvider.state('stats', {
    url: '/user-statistics',
    templateUrl: 'js/user/stats.html',
    controller: 'UserCtrl',
    resolve: {
      currentUser: function(AuthService) {
        return AuthService.getLoggedInUser();
      },
      currentQuest: function(currentUser, QuestFactory) {
        return QuestFactory.getQuest(currentUser.currentQuest)
          .then(function(response) {
            return response;
          })
      }
    }
  })
})
