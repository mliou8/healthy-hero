app.factory('QuestFactory', function($http) {
  return {
    getQuest: function(questName) {
      return $http.get('/api/quest/' + questName)
        .then(function(response) {
          return response.data;
        });
    },
    allQuests: function(questArr) {
        var allQuests = [];
        return questArr.forEach(function(quest) {
            allQuests.push($http.get('/api/quest/' + quest));
          })
          .then(function(data) {
            return allQuests;
          })
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
