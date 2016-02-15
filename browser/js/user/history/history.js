app.config(function($stateProvider) {
  $stateProvider.state('history', {
    url: '/user-history',
    templateUrl: 'js/user/history/history.html',
    controller: 'HistoryCtrl',
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
