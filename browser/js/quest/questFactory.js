app.factory('QuestFactory', function($http) {
  return {
    getQuest: function(questName) {
      return $http.get('/api/quest/' + questName)
        .then(function(response) {
          return response.data;
        });
    },
    populateQuests: function(questArr) {
      var questsFull = [];
      questArr.forEach(function(quest) {
        return $http.get('/api/quest/' + quest)
          .then(function(response) {
            return questsFull.push(response.data)
          })
      })
      return questsFull;
    }
  }
})
