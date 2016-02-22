app.config(function($stateProvider) {
  $stateProvider.state('history', {
    url: '/user-history',
    templateUrl: 'js/user/history/history.html',
    controller: 'HistoryCtrl',
    resolve: {
      currentUser: function(AuthService) {
        return AuthService.getLoggedInUser();
      },
      completedQuestsFull: function(currentUser, QuestFactory) {
        return QuestFactory.populateQuests(currentUser.completedQuests)
      }
    }
  })
})
